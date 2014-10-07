# viete-formula

[![Build Status][travis-svg]][travis]

Estimate pi with [Viète's formula][viete formula]. Converges way faster than
the [Leibniz series][leibniz series] does.

## Example

``` javascript
var vieteFormula = require('viete-formula');

vieteFormula(28);
// => 3.141592653589794
```

## Installation

``` bash
$ npm install viete-formula
```

## API

``` javascript
var vieteFormula = require('viete-formula');
```

### `vieteFormula(n)`

Estimate pi with Viète's formula. The larger _Number_ `n` provided, the further
the infinite product will go (yielding a more accurate estimate).


   [travis]: https://travis-ci.org/KenanY/viete-formula
   [travis-svg]: https://img.shields.io/travis/KenanY/viete-formula.svg
   [viete formula]: https://en.wikipedia.org/wiki/Vi%C3%A8te's_formula
   [leibniz series]: https://github.com/KenanY/leibniz-series