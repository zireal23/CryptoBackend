import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { FetchCryptoCoinDataClient as _cryptoData_FetchCryptoCoinDataClient, FetchCryptoCoinDataDefinition as _cryptoData_FetchCryptoCoinDataDefinition } from './cryptoData/FetchCryptoCoinData';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  cryptoData: {
    Coin: MessageTypeDefinition
    CoinData: MessageTypeDefinition
    FetchCryptoCoinData: SubtypeConstructor<typeof grpc.Client, _cryptoData_FetchCryptoCoinDataClient> & { service: _cryptoData_FetchCryptoCoinDataDefinition }
  }
}

