// Original file: src/proto/cryptoData.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Coin as _cryptoData_Coin, Coin__Output as _cryptoData_Coin__Output } from '../cryptoData/Coin';
import type { CoinData as _cryptoData_CoinData, CoinData__Output as _cryptoData_CoinData__Output } from '../cryptoData/CoinData';

export interface FetchCryptoCoinDataClient extends grpc.Client {
  getCoinData(argument: _cryptoData_Coin, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_cryptoData_CoinData__Output>;
  getCoinData(argument: _cryptoData_Coin, options?: grpc.CallOptions): grpc.ClientReadableStream<_cryptoData_CoinData__Output>;
  getCoinData(argument: _cryptoData_Coin, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_cryptoData_CoinData__Output>;
  getCoinData(argument: _cryptoData_Coin, options?: grpc.CallOptions): grpc.ClientReadableStream<_cryptoData_CoinData__Output>;
  
}

export interface FetchCryptoCoinDataHandlers extends grpc.UntypedServiceImplementation {
  getCoinData: grpc.handleServerStreamingCall<_cryptoData_Coin__Output, _cryptoData_CoinData>;
  
}

export interface FetchCryptoCoinDataDefinition extends grpc.ServiceDefinition {
  getCoinData: MethodDefinition<_cryptoData_Coin, _cryptoData_CoinData, _cryptoData_Coin__Output, _cryptoData_CoinData__Output>
}
