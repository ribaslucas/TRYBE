'use strict'

const assert = require('assert');
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

assert.deepEqual(sum(4, 5), 9);//Teste se o retorno de sum(4, 5) é 9
assert.deepEqual(sum(0, 0), 0);// Teste se o retorno de sum(0, 0) é 0
assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers/);//Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
