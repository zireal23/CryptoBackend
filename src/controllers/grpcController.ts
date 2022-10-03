import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../proto/cryptoData";
import { ClientRequest } from "http";

const streamCoinData = () => {
  const PORT = process.env.PORT || 8082;
  const PROTO_FILE = "../proto/cryptoData.proto";

  const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
  const grpcObj = grpc.loadPackageDefinition(
    packageDef
  ) as unknown as ProtoGrpcType;
  const grpcClient = new grpcObj.cryptoData.FetchCryptoCoinData(
    `0.0.0.0:${PORT}`,
    grpc.credentials.createInsecure()
    );
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5);
    grpcClient.waitForReady(deadline, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Connected to the grpc Stub");
        onClientReady();
    })
    const onClientReady = () => {
        grpcClient.getCoinData({coinName: "bitcoin"})
    }
};



export default streamCoinData;
