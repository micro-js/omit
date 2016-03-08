/**
 * Imports
 */

var isFunction = require('@f/is-function')
var forEach = require('@f/foreach-obj')
var isObject = require('@f/is-object')
var identity = require('@f/identity')
var isArray = require('@f/is-array')
var index = require('@f/index')
var has = require('@f/has')

/**
 * Object omit wrapper that curries
 * and indexes if possible
 */

function omit (keys, obj) {
  if (arguments.length === 1) {
    if (isArray(keys)) {
      keys = index(identity, T, keys)
    }

    return function (obj) {
      return internalOmit.call(this, keys, obj)
    }
  }

  return internalOmit.call(this, keys, obj)
}

/**
 * Omit implementation
 */

function internalOmit (keys, obj) {
  var result = {}

  if (isArray(keys)) {
    forEach(obj, function (val, key) {
      if (keys.indexOf(key) === -1) {
        result[key] = val
      }
    })
  } else if (isObject(keys)) {
    forEach(obj, function (val, key) {
      if (!has(key, keys)) {
        result[key] = val
      }
    })
  } else if (isFunction(keys)) {
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
 * Helpers
 */

function T () { return true }

/**
 * Exports
 */

module.exports = omit
