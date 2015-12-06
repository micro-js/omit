/**
 * Imports
 */

var forEach = require('@micro-js/foreach')

/**
 * Object omit
 */

function omit (obj, keys, ctx) {
  var result = {}

  if (Array.isArray(keys)) {
    forEach(obj, function (val, key) {
      if (keys.indexOf(key) === -1) {
        result[key] = val
      }
    })
  } else if (typeof keys === 'function') {
    forEach(obj, function (val, key) {
      if (keys !== key) {
        result[key] = val
      }
    })
  } else {
    forEach(obj, function (val, key) {
      if (!keys.call(ctx, key)) {
        result[key] = val
      }
    })
  }

  return result
}

/**
 * Exports
 */

module.exports = omit
