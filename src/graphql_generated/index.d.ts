import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumblocksSelectColumn = {
  id: 'id',
  level: 'level',
  orphan: 'orphan',
  timestamp: 'timestamp',
} as const

export declare const enumdipdupContractSelectColumn = {
  address: 'address',
  created_at: 'created_at',
  name: 'name',
  typename: 'typename',
  updated_at: 'updated_at',
} as const

export declare const enumdipdupHeadSelectColumn = {
  created_at: 'created_at',
  hash: 'hash',
  level: 'level',
  name: 'name',
  timestamp: 'timestamp',
  updated_at: 'updated_at',
} as const

export declare const enumdipdupIndexSelectColumn = {
  config_hash: 'config_hash',
  created_at: 'created_at',
  level: 'level',
  name: 'name',
  status: 'status',
  template: 'template',
  template_values: 'template_values',
  type: 'type',
  updated_at: 'updated_at',
} as const

export declare const enumdipdupSchemaSelectColumn = {
  created_at: 'created_at',
  hash: 'hash',
  name: 'name',
  reindex: 'reindex',
  updated_at: 'updated_at',
} as const

export declare const enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
} as const

export declare const enumreorgs1DSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
} as const

export declare const enumreorgs1DWithGapsSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
} as const

export declare const enumreorgs1HSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
} as const

export declare const enumreorgs1HWithGapsSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
} as const

export declare const enumreorgs1WSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
} as const

export declare const enumreorgs1WWithGapsSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
} as const

export declare const enumreorgsSelectColumn = {
  from_level: 'from_level',
  id: 'id',
  timestamp: 'timestamp',
  to_level: 'to_level',
} as const
