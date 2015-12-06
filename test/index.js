/**
 * Imports
 */

var omit = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var obj = {a: 1}
  var newObj = omit(obj, 'a')

  t.equal(newObj.a, undefined)
  t.equal(Object.keys(newObj).length, 0)
  t.end()
})
