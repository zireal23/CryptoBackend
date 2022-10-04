import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { FetchCryptoCoinDataClient as _cryptoDatapkg_FetchCryptoCoinDataClient, FetchCryptoCoinDataDefinition as _cryptoDatapkg_FetchCryptoCoinDataDefinition } from './cryptoDatapkg/FetchCryptoCoinData';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  cryptoDatapkg: {
    Coin: MessageTypeDefinition
    CoinData: MessageTypeDefinition
    FetchCryptoCoinData: SubtypeConstructor<typeof grpc.Client, _cryptoDatapkg_FetchCryptoCoinDataClient> & { service: _cryptoDatapkg_FetchCryptoCoinDataDefinition }
  }
}

