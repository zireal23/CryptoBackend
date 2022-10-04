import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../proto/cryptoData";
import { FetchCryptoCoinDataHandlers } from "../proto/cryptoDatapkg/FetchCryptoCoinData";
import { CoinData } from "../proto/cryptoDatapkg/CoinData";
import cryptoPriceModel from "../models/cryptoPriceModel";

const streamCoinData = () => {
  const PORT = process.env.GRPCPORT || 8082;
  const PROTO_FILE = "../proto/cryptoData.proto";

  const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
  const grpcObj = grpc.loadPackageDefinition(
    packageDef
  ) as unknown as ProtoGrpcType;
  const cryptoDatapkg = grpcObj.cryptoDatapkg;
  function main() {
    const server = getServer();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    server.bindAsync(
      `0.0.0.0:${PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`GRPC Server has started on port ${PORT}`);
        server.start();
      }
    );
  }
  function getServer() {
    const server = new grpc.Server();
    server.addService(cryptoDatapkg.FetchCryptoCoinData.service, {
      GetCoinData: (call) => {
        const coinName = call.request.coinName;
        if (!coinName) {
          console.log("Invalid Coin Name");
          call.end();
        }
        let runCount = 0;
        const streamCryptoPrices = setInterval(() => {
          runCount++;
          cryptoPriceModel
            .findOne({ ID: String(coinName).toLowerCase() })
            .sort({ _id: -1 })
            .limit(1)
            .exec(function (err, result) {
              if (err) {
                console.log("Couldnt fetch data from DB");
              }
              console.log(`Found ${coinName} with price ${result?.RealPrice}`);
              result?.$assertPopulated;
              const coinDataResponse: CoinData = {
                name: result?.Name,
                priceAt: result?.PriceAt,
                currentPrice: result?.RealPrice,
                arithmeticAggregate: result?.ArithmeticAggregatePrice,
                geometricAggregate: result?.GeometricAggregatePrice,
                harmonicAggregate: result?.HarmonicAggregatePrice,
              };
              call.write(coinDataResponse);
              if (runCount > 1000000) {
                clearInterval(streamCryptoPrices);
                call.end();
              }
            });
        }, 10000);
      },
    } as FetchCryptoCoinDataHandlers);
    return server;
  }
  main();
};

export default streamCoinData;
