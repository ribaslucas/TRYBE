// não entendi a lógica de colocar o for (number of nunbers) imagino que exista outra maneira de fazer isso


// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. 
// Ou seja:

// Dica: use parâmetro rest.

const assert = require('assert')

// escreva sum abaixo
const sum = (...numbers) => {
  let total = 0;
  for (number of numbers) total += number
  return total
} 

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    


// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. 
// Ou seja:

// Dica: use parâmetro rest.