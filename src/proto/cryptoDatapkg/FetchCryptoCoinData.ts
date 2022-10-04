// Original file: src/proto/cryptoData.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Coin as _cryptoDatapkg_Coin, Coin__Output as _cryptoDatapkg_Coin__Output } from '../cryptoDatapkg/Coin';
import type { CoinData as _cryptoDatapkg_CoinData, CoinData__Output as _cryptoDatapkg_CoinData__Output } from '../cryptoDatapkg/CoinData';

export interface FetchCryptoCoinDataClient extends grpc.Client {
  GetCoinData(argument: _cryptoDatapkg_Coin, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_cryptoDatapkg_CoinData__Output>;
  GetCoinData(argument: _cryptoDatapkg_Coin, options?: grpc.CallOptions): grpc.ClientReadableStream<_cryptoDatapkg_CoinData__Output>;
  getCoinData(argument: _cryptoDatapkg_Coin, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_cryptoDatapkg_CoinData__Output>;
  getCoinData(argument: _cryptoDatapkg_Coin, options?: grpc.CallOptions): grpc.ClientReadableStream<_cryptoDatapkg_CoinData__Output>;
  
}

export interface FetchCryptoCoinDataHandlers extends grpc.UntypedServiceImplementation {
  GetCoinData: grpc.handleServerStreamingCall<_cryptoDatapkg_Coin__Output, _cryptoDatapkg_CoinData>;
  
}

export interface FetchCryptoCoinDataDefinition extends grpc.ServiceDefinition {
  GetCoinData: MethodDefinition<_cryptoDatapkg_Coin, _cryptoDatapkg_CoinData, _cryptoDatapkg_Coin__Output, _cryptoDatapkg_CoinData__Output>
}
