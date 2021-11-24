
var blocks_possibleTypes = ['blocks']
module.exports.isblocks = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isblocks"')
  return blocks_possibleTypes.includes(obj.__typename)
}

var dipdup_contract_possibleTypes = ['dipdup_contract']
module.exports.isdipdup_contract = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}

var dipdup_head_possibleTypes = ['dipdup_head']
module.exports.isdipdup_head = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}

var dipdup_index_possibleTypes = ['dipdup_index']
module.exports.isdipdup_index = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}

var dipdup_schema_possibleTypes = ['dipdup_schema']
module.exports.isdipdup_schema = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}

var query_root_possibleTypes = ['query_root']
module.exports.isquery_root = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}

var reorgs_possibleTypes = ['reorgs']
module.exports.isreorgs = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isreorgs"')
  return reorgs_possibleTypes.includes(obj.__typename)
}

var reorgs_1d_possibleTypes = ['reorgs_1d']
module.exports.isreorgs_1d = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isreorgs_1d"')
  return reorgs_1d_possibleTypes.includes(obj.__typename)
}

var reorgs_1d_with_gaps_possibleTypes = ['reorgs_1d_with_gaps']
module.exports.isreorgs_1d_with_gaps = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isreorgs_1d_with_gaps"')
  return reorgs_1d_with_gaps_possibleTypes.includes(obj.__typename)
}

var reorgs_1h_possibleTypes = ['reorgs_1h']
module.exports.isreorgs_1h = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isreorgs_1h"')
  return reorgs_1h_possibleTypes.includes(obj.__typename)
}

var reorgs_1h_with_gaps_possibleTypes = ['reorgs_1h_with_gaps']
module.exports.isreorgs_1h_with_gaps = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isreorgs_1h_with_gaps"')
  return reorgs_1h_with_gaps_possibleTypes.includes(obj.__typename)
}

var reorgs_1w_possibleTypes = ['reorgs_1w']
module.exports.isreorgs_1w = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isreorgs_1w"')
  return reorgs_1w_possibleTypes.includes(obj.__typename)
}

var reorgs_1w_with_gaps_possibleTypes = ['reorgs_1w_with_gaps']
module.exports.isreorgs_1w_with_gaps = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isreorgs_1w_with_gaps"')
  return reorgs_1w_with_gaps_possibleTypes.includes(obj.__typename)
}

var subscription_root_possibleTypes = ['subscription_root']
module.exports.issubscription_root = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}
