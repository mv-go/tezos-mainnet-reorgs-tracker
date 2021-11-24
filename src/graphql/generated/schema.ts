import { FieldsSelection, Observable } from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    bigint: any,
    jsonb: any,
    timestamptz: any,
}

/** columns and relationships of "blocks" */
export interface blocks {
    id: Scalars['String']
    level: Scalars['bigint']
    orphan: Scalars['Boolean']
    timestamp: Scalars['timestamptz']
    __typename: 'blocks'
}

/** select columns of table "blocks" */
export type blocks_select_column = 'id' | 'level' | 'orphan' | 'timestamp'

/** columns and relationships of "dipdup_contract" */
export interface dipdup_contract {
    address: Scalars['String']
    created_at: Scalars['timestamptz']
    name: Scalars['String']
    typename?: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_contract'
}

/** select columns of table "dipdup_contract" */
export type dipdup_contract_select_column = 'address' | 'created_at' | 'name' | 'typename' | 'updated_at'

/** columns and relationships of "dipdup_head" */
export interface dipdup_head {
    created_at: Scalars['timestamptz']
    hash: Scalars['String']
    level: Scalars['Int']
    name: Scalars['String']
    timestamp: Scalars['timestamptz']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_head'
}

/** select columns of table "dipdup_head" */
export type dipdup_head_select_column = 'created_at' | 'hash' | 'level' | 'name' | 'timestamp' | 'updated_at'

/** columns and relationships of "dipdup_index" */
export interface dipdup_index {
    config_hash: Scalars['String']
    created_at: Scalars['timestamptz']
    level: Scalars['Int']
    name: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status: Scalars['String']
    template?: Scalars['String']
    template_values?: Scalars['jsonb']
    /** operation: operation\nbig_map: big_map\nhead: head */
    type: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_index'
}

/** select columns of table "dipdup_index" */
export type dipdup_index_select_column = 'config_hash' | 'created_at' | 'level' | 'name' | 'status' | 'template' | 'template_values' | 'type' | 'updated_at'

/** columns and relationships of "dipdup_schema" */
export interface dipdup_schema {
    created_at: Scalars['timestamptz']
    hash: Scalars['String']
    name: Scalars['String']
    /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
    reindex?: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_schema'
}

/** select columns of table "dipdup_schema" */
export type dipdup_schema_select_column = 'created_at' | 'hash' | 'name' | 'reindex' | 'updated_at'

/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "blocks" */
    blocks: blocks[]
    /** fetch data from the table: "blocks" using primary key columns */
    blocks_by_pk?: blocks
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract: dipdup_contract[]
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: dipdup_contract
    /** fetch data from the table: "dipdup_head" */
    dipdup_head: dipdup_head[]
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: dipdup_head
    /** fetch data from the table: "dipdup_index" */
    dipdup_index: dipdup_index[]
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema: dipdup_schema[]
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: dipdup_schema
    /** fetch data from the table: "reorgs" */
    reorgs: reorgs[]
    /** fetch data from the table: "reorgs_1d" */
    reorgs_1d: reorgs_1d[]
    /** fetch data from the table: "reorgs_1d_with_gaps" */
    reorgs_1d_with_gaps: reorgs_1d_with_gaps[]
    /** fetch data from the table: "reorgs_1h" */
    reorgs_1h: reorgs_1h[]
    /** fetch data from the table: "reorgs_1h_with_gaps" */
    reorgs_1h_with_gaps: reorgs_1h_with_gaps[]
    /** fetch data from the table: "reorgs_1w" */
    reorgs_1w: reorgs_1w[]
    /** fetch data from the table: "reorgs_1w_with_gaps" */
    reorgs_1w_with_gaps: reorgs_1w_with_gaps[]
    /** fetch data from the table: "reorgs" using primary key columns */
    reorgs_by_pk?: reorgs
    __typename: 'query_root'
}

/** columns and relationships of "reorgs" */
export interface reorgs {
    from_level: Scalars['bigint']
    id: Scalars['Int']
    timestamp: Scalars['timestamptz']
    to_level: Scalars['bigint']
    __typename: 'reorgs'
}

/** columns and relationships of "reorgs_1d" */
export interface reorgs_1d {
    bucket?: Scalars['timestamptz']
    num_accidents?: Scalars['bigint']
    __typename: 'reorgs_1d'
}

/** select columns of table "reorgs_1d" */
export type reorgs_1d_select_column = 'bucket' | 'num_accidents'

/** columns and relationships of "reorgs_1d_with_gaps" */
export interface reorgs_1d_with_gaps {
    bucket?: Scalars['timestamptz']
    num_accidents?: Scalars['bigint']
    __typename: 'reorgs_1d_with_gaps'
}

/** select columns of table "reorgs_1d_with_gaps" */
export type reorgs_1d_with_gaps_select_column = 'bucket' | 'num_accidents'

/** columns and relationships of "reorgs_1h" */
export interface reorgs_1h {
    bucket?: Scalars['timestamptz']
    num_accidents?: Scalars['bigint']
    __typename: 'reorgs_1h'
}

/** select columns of table "reorgs_1h" */
export type reorgs_1h_select_column = 'bucket' | 'num_accidents'

/** columns and relationships of "reorgs_1h_with_gaps" */
export interface reorgs_1h_with_gaps {
    bucket?: Scalars['timestamptz']
    num_accidents?: Scalars['bigint']
    __typename: 'reorgs_1h_with_gaps'
}

/** select columns of table "reorgs_1h_with_gaps" */
export type reorgs_1h_with_gaps_select_column = 'bucket' | 'num_accidents'

/** columns and relationships of "reorgs_1w" */
export interface reorgs_1w {
    bucket?: Scalars['timestamptz']
    num_accidents?: Scalars['bigint']
    __typename: 'reorgs_1w'
}

/** select columns of table "reorgs_1w" */
export type reorgs_1w_select_column = 'bucket' | 'num_accidents'

/** columns and relationships of "reorgs_1w_with_gaps" */
export interface reorgs_1w_with_gaps {
    bucket?: Scalars['timestamptz']
    num_accidents?: Scalars['bigint']
    __typename: 'reorgs_1w_with_gaps'
}

/** select columns of table "reorgs_1w_with_gaps" */
export type reorgs_1w_with_gaps_select_column = 'bucket' | 'num_accidents'

/** select columns of table "reorgs" */
export type reorgs_select_column = 'from_level' | 'id' | 'timestamp' | 'to_level'

export interface subscription_root {
    /** fetch data from the table: "blocks" */
    blocks: blocks[]
    /** fetch data from the table: "blocks" using primary key columns */
    blocks_by_pk?: blocks
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract: dipdup_contract[]
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: dipdup_contract
    /** fetch data from the table: "dipdup_head" */
    dipdup_head: dipdup_head[]
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: dipdup_head
    /** fetch data from the table: "dipdup_index" */
    dipdup_index: dipdup_index[]
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema: dipdup_schema[]
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: dipdup_schema
    /** fetch data from the table: "reorgs" */
    reorgs: reorgs[]
    /** fetch data from the table: "reorgs_1d" */
    reorgs_1d: reorgs_1d[]
    /** fetch data from the table: "reorgs_1d_with_gaps" */
    reorgs_1d_with_gaps: reorgs_1d_with_gaps[]
    /** fetch data from the table: "reorgs_1h" */
    reorgs_1h: reorgs_1h[]
    /** fetch data from the table: "reorgs_1h_with_gaps" */
    reorgs_1h_with_gaps: reorgs_1h_with_gaps[]
    /** fetch data from the table: "reorgs_1w" */
    reorgs_1w: reorgs_1w[]
    /** fetch data from the table: "reorgs_1w_with_gaps" */
    reorgs_1w_with_gaps: reorgs_1w_with_gaps[]
    /** fetch data from the table: "reorgs" using primary key columns */
    reorgs_by_pk?: reorgs
    __typename: 'subscription_root'
}

export type Query = query_root
export type Subscription = subscription_root

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null), _gt?: (Scalars['Boolean'] | null), _gte?: (Scalars['Boolean'] | null), _in?: (Scalars['Boolean'][] | null), _is_null?: (Scalars['Boolean'] | null), _lt?: (Scalars['Boolean'] | null), _lte?: (Scalars['Boolean'] | null), _neq?: (Scalars['Boolean'] | null), _nin?: (Scalars['Boolean'][] | null)}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null), _gt?: (Scalars['Int'] | null), _gte?: (Scalars['Int'] | null), _in?: (Scalars['Int'][] | null), _is_null?: (Scalars['Boolean'] | null), _lt?: (Scalars['Int'] | null), _lte?: (Scalars['Int'] | null), _neq?: (Scalars['Int'] | null), _nin?: (Scalars['Int'][] | null)}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null), _gt?: (Scalars['String'] | null), _gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null), _in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null), _is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null), _lt?: (Scalars['String'] | null), _lte?: (Scalars['String'] | null), _neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null), _nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null), _gt?: (Scalars['bigint'] | null), _gte?: (Scalars['bigint'] | null), _in?: (Scalars['bigint'][] | null), _is_null?: (Scalars['Boolean'] | null), _lt?: (Scalars['bigint'] | null), _lte?: (Scalars['bigint'] | null), _neq?: (Scalars['bigint'] | null), _nin?: (Scalars['bigint'][] | null)}

/** columns and relationships of "blocks" */
export interface blocksRequest{
    id?: boolean | number
    level?: boolean | number
    orphan?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "blocks". All fields are combined with a logical 'AND'. */
export interface blocks_bool_exp {_and?: (blocks_bool_exp[] | null), _not?: (blocks_bool_exp | null), _or?: (blocks_bool_exp[] | null), id?: (String_comparison_exp | null), level?: (bigint_comparison_exp | null), orphan?: (Boolean_comparison_exp | null), timestamp?: (timestamptz_comparison_exp | null)}

/** Ordering options when selecting data from "blocks". */
export interface blocks_order_by {id?: (order_by | null), level?: (order_by | null), orphan?: (order_by | null), timestamp?: (order_by | null)}

/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractRequest{
    address?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_bool_exp {_and?: (dipdup_contract_bool_exp[] | null), _not?: (dipdup_contract_bool_exp | null), _or?: (dipdup_contract_bool_exp[] | null), address?: (String_comparison_exp | null), created_at?: (timestamptz_comparison_exp | null), name?: (String_comparison_exp | null), typename?: (String_comparison_exp | null), updated_at?: (timestamptz_comparison_exp | null)}

/** Ordering options when selecting data from "dipdup_contract". */
export interface dipdup_contract_order_by {address?: (order_by | null), created_at?: (order_by | null), name?: (order_by | null), typename?: (order_by | null), updated_at?: (order_by | null)}

/** columns and relationships of "dipdup_head" */
export interface dipdup_headRequest{
    created_at?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export interface dipdup_head_bool_exp {_and?: (dipdup_head_bool_exp[] | null), _not?: (dipdup_head_bool_exp | null), _or?: (dipdup_head_bool_exp[] | null), created_at?: (timestamptz_comparison_exp | null), hash?: (String_comparison_exp | null), level?: (Int_comparison_exp | null), name?: (String_comparison_exp | null), timestamp?: (timestamptz_comparison_exp | null), updated_at?: (timestamptz_comparison_exp | null)}

/** Ordering options when selecting data from "dipdup_head". */
export interface dipdup_head_order_by {created_at?: (order_by | null), hash?: (order_by | null), level?: (order_by | null), name?: (order_by | null), timestamp?: (order_by | null), updated_at?: (order_by | null)}

/** columns and relationships of "dipdup_index" */
export interface dipdup_indexRequest{
    config_hash?: boolean | number
    created_at?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    template_values?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head */
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "dipdup_index". All fields are combined with a logical 'AND'. */
export interface dipdup_index_bool_exp {_and?: (dipdup_index_bool_exp[] | null), _not?: (dipdup_index_bool_exp | null), _or?: (dipdup_index_bool_exp[] | null), config_hash?: (String_comparison_exp | null), created_at?: (timestamptz_comparison_exp | null), level?: (Int_comparison_exp | null), name?: (String_comparison_exp | null), status?: (String_comparison_exp | null), template?: (String_comparison_exp | null), template_values?: (jsonb_comparison_exp | null), type?: (String_comparison_exp | null), updated_at?: (timestamptz_comparison_exp | null)}

/** Ordering options when selecting data from "dipdup_index". */
export interface dipdup_index_order_by {config_hash?: (order_by | null), created_at?: (order_by | null), level?: (order_by | null), name?: (order_by | null), status?: (order_by | null), template?: (order_by | null), template_values?: (order_by | null), type?: (order_by | null), updated_at?: (order_by | null)}

/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaRequest{
    created_at?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
    reindex?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export interface dipdup_schema_bool_exp {_and?: (dipdup_schema_bool_exp[] | null), _not?: (dipdup_schema_bool_exp | null), _or?: (dipdup_schema_bool_exp[] | null), created_at?: (timestamptz_comparison_exp | null), hash?: (String_comparison_exp | null), name?: (String_comparison_exp | null), reindex?: (String_comparison_exp | null), updated_at?: (timestamptz_comparison_exp | null)}

/** Ordering options when selecting data from "dipdup_schema". */
export interface dipdup_schema_order_by {created_at?: (order_by | null), hash?: (order_by | null), name?: (order_by | null), reindex?: (order_by | null), updated_at?: (order_by | null)}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null), _eq?: (Scalars['jsonb'] | null), _gt?: (Scalars['jsonb'] | null), _gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null), _in?: (Scalars['jsonb'][] | null), _is_null?: (Scalars['Boolean'] | null), _lt?: (Scalars['jsonb'] | null), _lte?: (Scalars['jsonb'] | null), _neq?: (Scalars['jsonb'] | null), _nin?: (Scalars['jsonb'][] | null)}

export interface query_rootRequest{
    /** fetch data from the table: "blocks" */
    blocks?: [{
    /** distinct select on columns */
    distinct_on?: (blocks_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (blocks_order_by[] | null),
    /** filter the rows returned */
    where?: (blocks_bool_exp | null)}, blocksRequest] | blocksRequest
    /** fetch data from the table: "blocks" using primary key columns */
    blocks_by_pk?: [{id: Scalars['String']}, blocksRequest]
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)}, dipdup_contractRequest] | dipdup_contractRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: [{name: Scalars['String']}, dipdup_contractRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdup_head?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)}, dipdup_headRequest] | dipdup_headRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: [{name: Scalars['String']}, dipdup_headRequest]
    /** fetch data from the table: "dipdup_index" */
    dipdup_index?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)}, dipdup_indexRequest] | dipdup_indexRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: [{name: Scalars['String']}, dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)}, dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: [{name: Scalars['String']}, dipdup_schemaRequest]
    /** fetch data from the table: "reorgs" */
    reorgs?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_bool_exp | null)}, reorgsRequest] | reorgsRequest
    /** fetch data from the table: "reorgs_1d" */
    reorgs_1d?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1d_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1d_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1d_bool_exp | null)}, reorgs_1dRequest] | reorgs_1dRequest
    /** fetch data from the table: "reorgs_1d_with_gaps" */
    reorgs_1d_with_gaps?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1d_with_gaps_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1d_with_gaps_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1d_with_gaps_bool_exp | null)}, reorgs_1d_with_gapsRequest] | reorgs_1d_with_gapsRequest
    /** fetch data from the table: "reorgs_1h" */
    reorgs_1h?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1h_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1h_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1h_bool_exp | null)}, reorgs_1hRequest] | reorgs_1hRequest
    /** fetch data from the table: "reorgs_1h_with_gaps" */
    reorgs_1h_with_gaps?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1h_with_gaps_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1h_with_gaps_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1h_with_gaps_bool_exp | null)}, reorgs_1h_with_gapsRequest] | reorgs_1h_with_gapsRequest
    /** fetch data from the table: "reorgs_1w" */
    reorgs_1w?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1w_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1w_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1w_bool_exp | null)}, reorgs_1wRequest] | reorgs_1wRequest
    /** fetch data from the table: "reorgs_1w_with_gaps" */
    reorgs_1w_with_gaps?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1w_with_gaps_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1w_with_gaps_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1w_with_gaps_bool_exp | null)}, reorgs_1w_with_gapsRequest] | reorgs_1w_with_gapsRequest
    /** fetch data from the table: "reorgs" using primary key columns */
    reorgs_by_pk?: [{id: Scalars['Int'], timestamp: Scalars['timestamptz']}, reorgsRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** columns and relationships of "reorgs" */
export interface reorgsRequest{
    from_level?: boolean | number
    id?: boolean | number
    timestamp?: boolean | number
    to_level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** columns and relationships of "reorgs_1d" */
export interface reorgs_1dRequest{
    bucket?: boolean | number
    num_accidents?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "reorgs_1d". All fields are combined with a logical 'AND'. */
export interface reorgs_1d_bool_exp {_and?: (reorgs_1d_bool_exp[] | null), _not?: (reorgs_1d_bool_exp | null), _or?: (reorgs_1d_bool_exp[] | null), bucket?: (timestamptz_comparison_exp | null), num_accidents?: (bigint_comparison_exp | null)}

/** Ordering options when selecting data from "reorgs_1d". */
export interface reorgs_1d_order_by {bucket?: (order_by | null), num_accidents?: (order_by | null)}

/** columns and relationships of "reorgs_1d_with_gaps" */
export interface reorgs_1d_with_gapsRequest{
    bucket?: boolean | number
    num_accidents?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "reorgs_1d_with_gaps". All fields are combined with a logical 'AND'. */
export interface reorgs_1d_with_gaps_bool_exp {_and?: (reorgs_1d_with_gaps_bool_exp[] | null), _not?: (reorgs_1d_with_gaps_bool_exp | null), _or?: (reorgs_1d_with_gaps_bool_exp[] | null), bucket?: (timestamptz_comparison_exp | null), num_accidents?: (bigint_comparison_exp | null)}

/** Ordering options when selecting data from "reorgs_1d_with_gaps". */
export interface reorgs_1d_with_gaps_order_by {bucket?: (order_by | null), num_accidents?: (order_by | null)}

/** columns and relationships of "reorgs_1h" */
export interface reorgs_1hRequest{
    bucket?: boolean | number
    num_accidents?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "reorgs_1h". All fields are combined with a logical 'AND'. */
export interface reorgs_1h_bool_exp {_and?: (reorgs_1h_bool_exp[] | null), _not?: (reorgs_1h_bool_exp | null), _or?: (reorgs_1h_bool_exp[] | null), bucket?: (timestamptz_comparison_exp | null), num_accidents?: (bigint_comparison_exp | null)}

/** Ordering options when selecting data from "reorgs_1h". */
export interface reorgs_1h_order_by {bucket?: (order_by | null), num_accidents?: (order_by | null)}

/** columns and relationships of "reorgs_1h_with_gaps" */
export interface reorgs_1h_with_gapsRequest{
    bucket?: boolean | number
    num_accidents?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "reorgs_1h_with_gaps". All fields are combined with a logical 'AND'. */
export interface reorgs_1h_with_gaps_bool_exp {_and?: (reorgs_1h_with_gaps_bool_exp[] | null), _not?: (reorgs_1h_with_gaps_bool_exp | null), _or?: (reorgs_1h_with_gaps_bool_exp[] | null), bucket?: (timestamptz_comparison_exp | null), num_accidents?: (bigint_comparison_exp | null)}

/** Ordering options when selecting data from "reorgs_1h_with_gaps". */
export interface reorgs_1h_with_gaps_order_by {bucket?: (order_by | null), num_accidents?: (order_by | null)}

/** columns and relationships of "reorgs_1w" */
export interface reorgs_1wRequest{
    bucket?: boolean | number
    num_accidents?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "reorgs_1w". All fields are combined with a logical 'AND'. */
export interface reorgs_1w_bool_exp {_and?: (reorgs_1w_bool_exp[] | null), _not?: (reorgs_1w_bool_exp | null), _or?: (reorgs_1w_bool_exp[] | null), bucket?: (timestamptz_comparison_exp | null), num_accidents?: (bigint_comparison_exp | null)}

/** Ordering options when selecting data from "reorgs_1w". */
export interface reorgs_1w_order_by {bucket?: (order_by | null), num_accidents?: (order_by | null)}

/** columns and relationships of "reorgs_1w_with_gaps" */
export interface reorgs_1w_with_gapsRequest{
    bucket?: boolean | number
    num_accidents?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "reorgs_1w_with_gaps". All fields are combined with a logical 'AND'. */
export interface reorgs_1w_with_gaps_bool_exp {_and?: (reorgs_1w_with_gaps_bool_exp[] | null), _not?: (reorgs_1w_with_gaps_bool_exp | null), _or?: (reorgs_1w_with_gaps_bool_exp[] | null), bucket?: (timestamptz_comparison_exp | null), num_accidents?: (bigint_comparison_exp | null)}

/** Ordering options when selecting data from "reorgs_1w_with_gaps". */
export interface reorgs_1w_with_gaps_order_by {bucket?: (order_by | null), num_accidents?: (order_by | null)}

/** Boolean expression to filter rows from the table "reorgs". All fields are combined with a logical 'AND'. */
export interface reorgs_bool_exp {_and?: (reorgs_bool_exp[] | null), _not?: (reorgs_bool_exp | null), _or?: (reorgs_bool_exp[] | null), from_level?: (bigint_comparison_exp | null), id?: (Int_comparison_exp | null), timestamp?: (timestamptz_comparison_exp | null), to_level?: (bigint_comparison_exp | null)}

/** Ordering options when selecting data from "reorgs". */
export interface reorgs_order_by {from_level?: (order_by | null), id?: (order_by | null), timestamp?: (order_by | null), to_level?: (order_by | null)}

export interface subscription_rootRequest{
    /** fetch data from the table: "blocks" */
    blocks?: [{
    /** distinct select on columns */
    distinct_on?: (blocks_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (blocks_order_by[] | null),
    /** filter the rows returned */
    where?: (blocks_bool_exp | null)}, blocksRequest] | blocksRequest
    /** fetch data from the table: "blocks" using primary key columns */
    blocks_by_pk?: [{id: Scalars['String']}, blocksRequest]
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)}, dipdup_contractRequest] | dipdup_contractRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: [{name: Scalars['String']}, dipdup_contractRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdup_head?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)}, dipdup_headRequest] | dipdup_headRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: [{name: Scalars['String']}, dipdup_headRequest]
    /** fetch data from the table: "dipdup_index" */
    dipdup_index?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)}, dipdup_indexRequest] | dipdup_indexRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: [{name: Scalars['String']}, dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)}, dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: [{name: Scalars['String']}, dipdup_schemaRequest]
    /** fetch data from the table: "reorgs" */
    reorgs?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_bool_exp | null)}, reorgsRequest] | reorgsRequest
    /** fetch data from the table: "reorgs_1d" */
    reorgs_1d?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1d_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1d_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1d_bool_exp | null)}, reorgs_1dRequest] | reorgs_1dRequest
    /** fetch data from the table: "reorgs_1d_with_gaps" */
    reorgs_1d_with_gaps?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1d_with_gaps_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1d_with_gaps_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1d_with_gaps_bool_exp | null)}, reorgs_1d_with_gapsRequest] | reorgs_1d_with_gapsRequest
    /** fetch data from the table: "reorgs_1h" */
    reorgs_1h?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1h_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1h_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1h_bool_exp | null)}, reorgs_1hRequest] | reorgs_1hRequest
    /** fetch data from the table: "reorgs_1h_with_gaps" */
    reorgs_1h_with_gaps?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1h_with_gaps_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1h_with_gaps_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1h_with_gaps_bool_exp | null)}, reorgs_1h_with_gapsRequest] | reorgs_1h_with_gapsRequest
    /** fetch data from the table: "reorgs_1w" */
    reorgs_1w?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1w_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1w_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1w_bool_exp | null)}, reorgs_1wRequest] | reorgs_1wRequest
    /** fetch data from the table: "reorgs_1w_with_gaps" */
    reorgs_1w_with_gaps?: [{
    /** distinct select on columns */
    distinct_on?: (reorgs_1w_with_gaps_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (reorgs_1w_with_gaps_order_by[] | null),
    /** filter the rows returned */
    where?: (reorgs_1w_with_gaps_bool_exp | null)}, reorgs_1w_with_gapsRequest] | reorgs_1w_with_gapsRequest
    /** fetch data from the table: "reorgs" using primary key columns */
    reorgs_by_pk?: [{id: Scalars['Int'], timestamp: Scalars['timestamptz']}, reorgsRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null), _gt?: (Scalars['timestamptz'] | null), _gte?: (Scalars['timestamptz'] | null), _in?: (Scalars['timestamptz'][] | null), _is_null?: (Scalars['Boolean'] | null), _lt?: (Scalars['timestamptz'] | null), _lte?: (Scalars['timestamptz'] | null), _neq?: (Scalars['timestamptz'] | null), _nin?: (Scalars['timestamptz'][] | null)}

export type QueryRequest = query_rootRequest
export type SubscriptionRequest = subscription_rootRequest

const blocks_possibleTypes = ['blocks']
export const isblocks = (obj?: { __typename?: any } | null): obj is blocks => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks"')
  return blocks_possibleTypes.includes(obj.__typename)
}

const dipdup_contract_possibleTypes = ['dipdup_contract']
export const isdipdup_contract = (obj?: { __typename?: any } | null): obj is dipdup_contract => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}

const dipdup_head_possibleTypes = ['dipdup_head']
export const isdipdup_head = (obj?: { __typename?: any } | null): obj is dipdup_head => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}

const dipdup_index_possibleTypes = ['dipdup_index']
export const isdipdup_index = (obj?: { __typename?: any } | null): obj is dipdup_index => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}

const dipdup_schema_possibleTypes = ['dipdup_schema']
export const isdipdup_schema = (obj?: { __typename?: any } | null): obj is dipdup_schema => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}

const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}

const reorgs_possibleTypes = ['reorgs']
export const isreorgs = (obj?: { __typename?: any } | null): obj is reorgs => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isreorgs"')
  return reorgs_possibleTypes.includes(obj.__typename)
}

const reorgs_1d_possibleTypes = ['reorgs_1d']
export const isreorgs_1d = (obj?: { __typename?: any } | null): obj is reorgs_1d => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isreorgs_1d"')
  return reorgs_1d_possibleTypes.includes(obj.__typename)
}

const reorgs_1d_with_gaps_possibleTypes = ['reorgs_1d_with_gaps']
export const isreorgs_1d_with_gaps = (obj?: { __typename?: any } | null): obj is reorgs_1d_with_gaps => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isreorgs_1d_with_gaps"')
  return reorgs_1d_with_gaps_possibleTypes.includes(obj.__typename)
}

const reorgs_1h_possibleTypes = ['reorgs_1h']
export const isreorgs_1h = (obj?: { __typename?: any } | null): obj is reorgs_1h => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isreorgs_1h"')
  return reorgs_1h_possibleTypes.includes(obj.__typename)
}

const reorgs_1h_with_gaps_possibleTypes = ['reorgs_1h_with_gaps']
export const isreorgs_1h_with_gaps = (obj?: { __typename?: any } | null): obj is reorgs_1h_with_gaps => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isreorgs_1h_with_gaps"')
  return reorgs_1h_with_gaps_possibleTypes.includes(obj.__typename)
}

const reorgs_1w_possibleTypes = ['reorgs_1w']
export const isreorgs_1w = (obj?: { __typename?: any } | null): obj is reorgs_1w => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isreorgs_1w"')
  return reorgs_1w_possibleTypes.includes(obj.__typename)
}

const reorgs_1w_with_gaps_possibleTypes = ['reorgs_1w_with_gaps']
export const isreorgs_1w_with_gaps = (obj?: { __typename?: any } | null): obj is reorgs_1w_with_gaps => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isreorgs_1w_with_gaps"')
  return reorgs_1w_with_gaps_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}

/** columns and relationships of "blocks" */
export interface blocksPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    orphan: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}

/** columns and relationships of "blocks" */
export interface blocksObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    orphan: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}

/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}

/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}

/** columns and relationships of "dipdup_head" */
export interface dipdup_headPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}

/** columns and relationships of "dipdup_head" */
export interface dipdup_headObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}

/** columns and relationships of "dipdup_index" */
export interface dipdup_indexPromiseChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),

/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    template_values: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>}),

/** operation: operation\nbig_map: big_map\nhead: head */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}

/** columns and relationships of "dipdup_index" */
export interface dipdup_indexObservableChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),

/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    template_values: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>}),

/** operation: operation\nbig_map: big_map\nhead: head */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}

/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),

/** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}

/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),

/** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}

export interface query_rootPromiseChain{

/** fetch data from the table: "blocks" */
blocks: ((args?: {
/** distinct select on columns */
distinct_on?: (blocks_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (blocks_order_by[] | null),
/** filter the rows returned */
where?: (blocks_bool_exp | null)}) => {get: <R extends blocksRequest>(request: R, defaultValue?: FieldsSelection<blocks, R>[]) => Promise<FieldsSelection<blocks, R>[]>})&({get: <R extends blocksRequest>(request: R, defaultValue?: FieldsSelection<blocks, R>[]) => Promise<FieldsSelection<blocks, R>[]>}),

/** fetch data from the table: "blocks" using primary key columns */
blocks_by_pk: ((args: {id: Scalars['String']}) => blocksPromiseChain & {get: <R extends blocksRequest>(request: R, defaultValue?: (FieldsSelection<blocks, R> | undefined)) => Promise<(FieldsSelection<blocks, R> | undefined)>}),

/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),

/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),

/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),

/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),

/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),

/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),

/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),

/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),

/** fetch data from the table: "reorgs" */
reorgs: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_bool_exp | null)}) => {get: <R extends reorgsRequest>(request: R, defaultValue?: FieldsSelection<reorgs, R>[]) => Promise<FieldsSelection<reorgs, R>[]>})&({get: <R extends reorgsRequest>(request: R, defaultValue?: FieldsSelection<reorgs, R>[]) => Promise<FieldsSelection<reorgs, R>[]>}),

/** fetch data from the table: "reorgs_1d" */
reorgs_1d: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1d_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1d_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1d_bool_exp | null)}) => {get: <R extends reorgs_1dRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d, R>[]) => Promise<FieldsSelection<reorgs_1d, R>[]>})&({get: <R extends reorgs_1dRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d, R>[]) => Promise<FieldsSelection<reorgs_1d, R>[]>}),

/** fetch data from the table: "reorgs_1d_with_gaps" */
reorgs_1d_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1d_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1d_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1d_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1d_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1d_with_gaps, R>[]>})&({get: <R extends reorgs_1d_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1d_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs_1h" */
reorgs_1h: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1h_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1h_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1h_bool_exp | null)}) => {get: <R extends reorgs_1hRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h, R>[]) => Promise<FieldsSelection<reorgs_1h, R>[]>})&({get: <R extends reorgs_1hRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h, R>[]) => Promise<FieldsSelection<reorgs_1h, R>[]>}),

/** fetch data from the table: "reorgs_1h_with_gaps" */
reorgs_1h_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1h_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1h_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1h_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1h_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1h_with_gaps, R>[]>})&({get: <R extends reorgs_1h_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1h_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs_1w" */
reorgs_1w: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1w_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1w_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1w_bool_exp | null)}) => {get: <R extends reorgs_1wRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w, R>[]) => Promise<FieldsSelection<reorgs_1w, R>[]>})&({get: <R extends reorgs_1wRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w, R>[]) => Promise<FieldsSelection<reorgs_1w, R>[]>}),

/** fetch data from the table: "reorgs_1w_with_gaps" */
reorgs_1w_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1w_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1w_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1w_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1w_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1w_with_gaps, R>[]>})&({get: <R extends reorgs_1w_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1w_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs" using primary key columns */
reorgs_by_pk: ((args: {id: Scalars['Int'], timestamp: Scalars['timestamptz']}) => reorgsPromiseChain & {get: <R extends reorgsRequest>(request: R, defaultValue?: (FieldsSelection<reorgs, R> | undefined)) => Promise<(FieldsSelection<reorgs, R> | undefined)>})
}

export interface query_rootObservableChain{

/** fetch data from the table: "blocks" */
blocks: ((args?: {
/** distinct select on columns */
distinct_on?: (blocks_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (blocks_order_by[] | null),
/** filter the rows returned */
where?: (blocks_bool_exp | null)}) => {get: <R extends blocksRequest>(request: R, defaultValue?: FieldsSelection<blocks, R>[]) => Observable<FieldsSelection<blocks, R>[]>})&({get: <R extends blocksRequest>(request: R, defaultValue?: FieldsSelection<blocks, R>[]) => Observable<FieldsSelection<blocks, R>[]>}),

/** fetch data from the table: "blocks" using primary key columns */
blocks_by_pk: ((args: {id: Scalars['String']}) => blocksObservableChain & {get: <R extends blocksRequest>(request: R, defaultValue?: (FieldsSelection<blocks, R> | undefined)) => Observable<(FieldsSelection<blocks, R> | undefined)>}),

/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),

/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),

/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),

/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),

/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),

/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),

/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),

/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),

/** fetch data from the table: "reorgs" */
reorgs: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_bool_exp | null)}) => {get: <R extends reorgsRequest>(request: R, defaultValue?: FieldsSelection<reorgs, R>[]) => Observable<FieldsSelection<reorgs, R>[]>})&({get: <R extends reorgsRequest>(request: R, defaultValue?: FieldsSelection<reorgs, R>[]) => Observable<FieldsSelection<reorgs, R>[]>}),

/** fetch data from the table: "reorgs_1d" */
reorgs_1d: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1d_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1d_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1d_bool_exp | null)}) => {get: <R extends reorgs_1dRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d, R>[]) => Observable<FieldsSelection<reorgs_1d, R>[]>})&({get: <R extends reorgs_1dRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d, R>[]) => Observable<FieldsSelection<reorgs_1d, R>[]>}),

/** fetch data from the table: "reorgs_1d_with_gaps" */
reorgs_1d_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1d_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1d_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1d_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1d_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1d_with_gaps, R>[]>})&({get: <R extends reorgs_1d_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1d_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs_1h" */
reorgs_1h: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1h_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1h_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1h_bool_exp | null)}) => {get: <R extends reorgs_1hRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h, R>[]) => Observable<FieldsSelection<reorgs_1h, R>[]>})&({get: <R extends reorgs_1hRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h, R>[]) => Observable<FieldsSelection<reorgs_1h, R>[]>}),

/** fetch data from the table: "reorgs_1h_with_gaps" */
reorgs_1h_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1h_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1h_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1h_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1h_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1h_with_gaps, R>[]>})&({get: <R extends reorgs_1h_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1h_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs_1w" */
reorgs_1w: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1w_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1w_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1w_bool_exp | null)}) => {get: <R extends reorgs_1wRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w, R>[]) => Observable<FieldsSelection<reorgs_1w, R>[]>})&({get: <R extends reorgs_1wRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w, R>[]) => Observable<FieldsSelection<reorgs_1w, R>[]>}),

/** fetch data from the table: "reorgs_1w_with_gaps" */
reorgs_1w_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1w_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1w_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1w_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1w_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1w_with_gaps, R>[]>})&({get: <R extends reorgs_1w_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1w_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs" using primary key columns */
reorgs_by_pk: ((args: {id: Scalars['Int'], timestamp: Scalars['timestamptz']}) => reorgsObservableChain & {get: <R extends reorgsRequest>(request: R, defaultValue?: (FieldsSelection<reorgs, R> | undefined)) => Observable<(FieldsSelection<reorgs, R> | undefined)>})
}

/** columns and relationships of "reorgs" */
export interface reorgsPromiseChain{
    from_level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    to_level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>})
}

/** columns and relationships of "reorgs" */
export interface reorgsObservableChain{
    from_level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    to_level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>})
}

/** columns and relationships of "reorgs_1d" */
export interface reorgs_1dPromiseChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1d" */
export interface reorgs_1dObservableChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1d_with_gaps" */
export interface reorgs_1d_with_gapsPromiseChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1d_with_gaps" */
export interface reorgs_1d_with_gapsObservableChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1h" */
export interface reorgs_1hPromiseChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1h" */
export interface reorgs_1hObservableChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1h_with_gaps" */
export interface reorgs_1h_with_gapsPromiseChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1h_with_gaps" */
export interface reorgs_1h_with_gapsObservableChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1w" */
export interface reorgs_1wPromiseChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1w" */
export interface reorgs_1wObservableChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1w_with_gaps" */
export interface reorgs_1w_with_gapsPromiseChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}

/** columns and relationships of "reorgs_1w_with_gaps" */
export interface reorgs_1w_with_gapsObservableChain{
    bucket: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    num_accidents: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}

export interface subscription_rootPromiseChain{

/** fetch data from the table: "blocks" */
blocks: ((args?: {
/** distinct select on columns */
distinct_on?: (blocks_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (blocks_order_by[] | null),
/** filter the rows returned */
where?: (blocks_bool_exp | null)}) => {get: <R extends blocksRequest>(request: R, defaultValue?: FieldsSelection<blocks, R>[]) => Promise<FieldsSelection<blocks, R>[]>})&({get: <R extends blocksRequest>(request: R, defaultValue?: FieldsSelection<blocks, R>[]) => Promise<FieldsSelection<blocks, R>[]>}),

/** fetch data from the table: "blocks" using primary key columns */
blocks_by_pk: ((args: {id: Scalars['String']}) => blocksPromiseChain & {get: <R extends blocksRequest>(request: R, defaultValue?: (FieldsSelection<blocks, R> | undefined)) => Promise<(FieldsSelection<blocks, R> | undefined)>}),

/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),

/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),

/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),

/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),

/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),

/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),

/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),

/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),

/** fetch data from the table: "reorgs" */
reorgs: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_bool_exp | null)}) => {get: <R extends reorgsRequest>(request: R, defaultValue?: FieldsSelection<reorgs, R>[]) => Promise<FieldsSelection<reorgs, R>[]>})&({get: <R extends reorgsRequest>(request: R, defaultValue?: FieldsSelection<reorgs, R>[]) => Promise<FieldsSelection<reorgs, R>[]>}),

/** fetch data from the table: "reorgs_1d" */
reorgs_1d: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1d_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1d_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1d_bool_exp | null)}) => {get: <R extends reorgs_1dRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d, R>[]) => Promise<FieldsSelection<reorgs_1d, R>[]>})&({get: <R extends reorgs_1dRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d, R>[]) => Promise<FieldsSelection<reorgs_1d, R>[]>}),

/** fetch data from the table: "reorgs_1d_with_gaps" */
reorgs_1d_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1d_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1d_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1d_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1d_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1d_with_gaps, R>[]>})&({get: <R extends reorgs_1d_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1d_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs_1h" */
reorgs_1h: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1h_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1h_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1h_bool_exp | null)}) => {get: <R extends reorgs_1hRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h, R>[]) => Promise<FieldsSelection<reorgs_1h, R>[]>})&({get: <R extends reorgs_1hRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h, R>[]) => Promise<FieldsSelection<reorgs_1h, R>[]>}),

/** fetch data from the table: "reorgs_1h_with_gaps" */
reorgs_1h_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1h_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1h_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1h_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1h_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1h_with_gaps, R>[]>})&({get: <R extends reorgs_1h_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1h_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs_1w" */
reorgs_1w: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1w_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1w_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1w_bool_exp | null)}) => {get: <R extends reorgs_1wRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w, R>[]) => Promise<FieldsSelection<reorgs_1w, R>[]>})&({get: <R extends reorgs_1wRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w, R>[]) => Promise<FieldsSelection<reorgs_1w, R>[]>}),

/** fetch data from the table: "reorgs_1w_with_gaps" */
reorgs_1w_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1w_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1w_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1w_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1w_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1w_with_gaps, R>[]>})&({get: <R extends reorgs_1w_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w_with_gaps, R>[]) => Promise<FieldsSelection<reorgs_1w_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs" using primary key columns */
reorgs_by_pk: ((args: {id: Scalars['Int'], timestamp: Scalars['timestamptz']}) => reorgsPromiseChain & {get: <R extends reorgsRequest>(request: R, defaultValue?: (FieldsSelection<reorgs, R> | undefined)) => Promise<(FieldsSelection<reorgs, R> | undefined)>})
}

export interface subscription_rootObservableChain{

/** fetch data from the table: "blocks" */
blocks: ((args?: {
/** distinct select on columns */
distinct_on?: (blocks_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (blocks_order_by[] | null),
/** filter the rows returned */
where?: (blocks_bool_exp | null)}) => {get: <R extends blocksRequest>(request: R, defaultValue?: FieldsSelection<blocks, R>[]) => Observable<FieldsSelection<blocks, R>[]>})&({get: <R extends blocksRequest>(request: R, defaultValue?: FieldsSelection<blocks, R>[]) => Observable<FieldsSelection<blocks, R>[]>}),

/** fetch data from the table: "blocks" using primary key columns */
blocks_by_pk: ((args: {id: Scalars['String']}) => blocksObservableChain & {get: <R extends blocksRequest>(request: R, defaultValue?: (FieldsSelection<blocks, R> | undefined)) => Observable<(FieldsSelection<blocks, R> | undefined)>}),

/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),

/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),

/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),

/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),

/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),

/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),

/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),

/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),

/** fetch data from the table: "reorgs" */
reorgs: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_bool_exp | null)}) => {get: <R extends reorgsRequest>(request: R, defaultValue?: FieldsSelection<reorgs, R>[]) => Observable<FieldsSelection<reorgs, R>[]>})&({get: <R extends reorgsRequest>(request: R, defaultValue?: FieldsSelection<reorgs, R>[]) => Observable<FieldsSelection<reorgs, R>[]>}),

/** fetch data from the table: "reorgs_1d" */
reorgs_1d: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1d_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1d_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1d_bool_exp | null)}) => {get: <R extends reorgs_1dRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d, R>[]) => Observable<FieldsSelection<reorgs_1d, R>[]>})&({get: <R extends reorgs_1dRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d, R>[]) => Observable<FieldsSelection<reorgs_1d, R>[]>}),

/** fetch data from the table: "reorgs_1d_with_gaps" */
reorgs_1d_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1d_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1d_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1d_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1d_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1d_with_gaps, R>[]>})&({get: <R extends reorgs_1d_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1d_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1d_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs_1h" */
reorgs_1h: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1h_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1h_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1h_bool_exp | null)}) => {get: <R extends reorgs_1hRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h, R>[]) => Observable<FieldsSelection<reorgs_1h, R>[]>})&({get: <R extends reorgs_1hRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h, R>[]) => Observable<FieldsSelection<reorgs_1h, R>[]>}),

/** fetch data from the table: "reorgs_1h_with_gaps" */
reorgs_1h_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1h_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1h_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1h_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1h_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1h_with_gaps, R>[]>})&({get: <R extends reorgs_1h_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1h_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1h_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs_1w" */
reorgs_1w: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1w_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1w_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1w_bool_exp | null)}) => {get: <R extends reorgs_1wRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w, R>[]) => Observable<FieldsSelection<reorgs_1w, R>[]>})&({get: <R extends reorgs_1wRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w, R>[]) => Observable<FieldsSelection<reorgs_1w, R>[]>}),

/** fetch data from the table: "reorgs_1w_with_gaps" */
reorgs_1w_with_gaps: ((args?: {
/** distinct select on columns */
distinct_on?: (reorgs_1w_with_gaps_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (reorgs_1w_with_gaps_order_by[] | null),
/** filter the rows returned */
where?: (reorgs_1w_with_gaps_bool_exp | null)}) => {get: <R extends reorgs_1w_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1w_with_gaps, R>[]>})&({get: <R extends reorgs_1w_with_gapsRequest>(request: R, defaultValue?: FieldsSelection<reorgs_1w_with_gaps, R>[]) => Observable<FieldsSelection<reorgs_1w_with_gaps, R>[]>}),

/** fetch data from the table: "reorgs" using primary key columns */
reorgs_by_pk: ((args: {id: Scalars['Int'], timestamp: Scalars['timestamptz']}) => reorgsObservableChain & {get: <R extends reorgsRequest>(request: R, defaultValue?: (FieldsSelection<reorgs, R> | undefined)) => Observable<(FieldsSelection<reorgs, R> | undefined)>})
}
