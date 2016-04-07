
# omit

Simple, tiny object omit utility

## Installation

    $ npm install @f/omit

## Usage

`omit(keys, obj)`

  * `keys` - A single key, array of keys, object (with truthy values), or truth-test function for keys to omit
  * `obj` - An object from which you'd like to omit some keys

Returns a new object with `keys` omitted from it.

## Currying/indexing

If you pass only one argument to `omit` it will return a partially applied omit function. If that argument is an array of keys, it will be indexed into an object so that it can be processed quickly. So if you want to remove a long list of keys from an object and that list is static, you should do this:

```javascript
var omit = require('@f/omit')
var keys = ['some', 'long', 'list', 'of', 'keys']

var filterKeys = omit(keys)
```

## License

MIT
