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
  var newObj = omit('a', obj)

  t.equal(newObj.a, undefined)
  t.equal(Object.keys(newObj).length, 0)

  t.end()
})

test('should curry', function (t) {
  var obj = {a: 1, b: 2}
  var omitA = omit(['a', 'b'])
  var newObj = omitA(obj)

  t.equal(newObj.a, undefined)
  t.equal(newObj.b, undefined)
  t.equal(Object.keys(newObj).length, 0)

  t.end()
})
