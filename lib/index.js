/**
 * Imports
 */

var forEach = require('foreach')
var asArray = require('as-array')

/**
 * Object omit
 */

function omit (obj, keys) {
  var result = {}

  keys = asArray(keys)
  forEach(obj, function (val, key) {
    if (keys.indexOf(key) !== -1) {
      result[key] = val
    }
  })

  return result
}

/**
 * Exports
 */

module.exports = omit
