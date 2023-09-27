'use strict';

/**
 * @param {number} a
 * @returns {number}
 */
function nestedRadical(a) {
  if (a === 1) {
    return Math.sqrt(2);
  }
  return Math.sqrt(2 + nestedRadical(a - 1));
}

/**
 * @param {number} n
 * @returns {number}
 */
function vieteFormula(n) {
  let ret = 1;
  for (let i = 1; i <= n; i++) {
    ret *= nestedRadical(i) / 2;
  }
  return 2 / ret;
}

module.exports = vieteFormula;
