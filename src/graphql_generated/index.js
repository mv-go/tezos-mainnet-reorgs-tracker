const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.8.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://reorgs.staging.dipdup.net/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumblocksSelectColumn = {
  id: 'id',
  level: 'level',
  orphan: 'orphan',
  timestamp: 'timestamp',
}

module.exports.enumdipdupContractSelectColumn = {
  address: 'address',
  created_at: 'created_at',
  name: 'name',
  typename: 'typename',
  updated_at: 'updated_at',
}

module.exports.enumdipdupHeadSelectColumn = {
  created_at: 'created_at',
  hash: 'hash',
  level: 'level',
  name: 'name',
  timestamp: 'timestamp',
  updated_at: 'updated_at',
}

module.exports.enumdipdupIndexSelectColumn = {
  config_hash: 'config_hash',
  created_at: 'created_at',
  level: 'level',
  name: 'name',
  status: 'status',
  template: 'template',
  template_values: 'template_values',
  type: 'type',
  updated_at: 'updated_at',
}

module.exports.enumdipdupSchemaSelectColumn = {
  created_at: 'created_at',
  hash: 'hash',
  name: 'name',
  reindex: 'reindex',
  updated_at: 'updated_at',
}

module.exports.enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

module.exports.enumreorgs1DSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
}

module.exports.enumreorgs1DWithGapsSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
}

module.exports.enumreorgs1HSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
}

module.exports.enumreorgs1HWithGapsSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
}

module.exports.enumreorgs1WSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
}

module.exports.enumreorgs1WWithGapsSelectColumn = {
  bucket: 'bucket',
  num_accidents: 'num_accidents',
}

module.exports.enumreorgsSelectColumn = {
  from_level: 'from_level',
  id: 'id',
  timestamp: 'timestamp',
  to_level: 'to_level',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
