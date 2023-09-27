'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');
const vieteFormula = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(vieteFormula));
});

test('approaches pi as series increases', function(t) {
  for (let i = 2; i < 28; i++) {
    t.ok(vieteFormula(i) > vieteFormula(i - 1));
  }

  // After n = 27 JavaScript doesn't store enough decimal places. Checking
  // equality of doubles is bad but it actually works here.
  for (let i = 28; i < 1001; i++) {
    t.equal(vieteFormula(i), 3.141592653589794);
  }

  t.end();
});
