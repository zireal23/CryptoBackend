// Original file: src/proto/cryptoData.proto

import type { Long } from '@grpc/proto-loader';

export interface CoinData {
  'name'?: (string);
  'priceAt'?: (number | string | Long);
  'currentPrice'?: (number | string);
  'arithmeticAggregate'?: (number | string);
  'geometricAggregate'?: (number | string);
  'harmonicAggregate'?: (number | string);
}

export interface CoinData__Output {
  'name'?: (string);
  'priceAt'?: (Long);
  'currentPrice'?: (number);
  'arithmeticAggregate'?: (number);
  'geometricAggregate'?: (number);
  'harmonicAggregate'?: (number);
}
