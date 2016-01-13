# condense-keys [![Build Status](https://travis-ci.org/kevva/condense-keys.svg?branch=master)](https://travis-ci.org/kevva/condense-keys)

> Remove keys with empty values from an object


## Install

```
$ npm install --save condense-keys
```


## Usage

```js
const condenseKeys = require('condense-keys');

condenseKeys({a: 'foo', b: null, c: undefined, d: ''});
//=> {a: 'foo'}
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
