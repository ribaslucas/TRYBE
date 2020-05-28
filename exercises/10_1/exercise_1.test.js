const service = require('./exercise_1');

// Exercise 8.3/1
  // toBe e toEqual são equivalentes para números

describe('Exercise 8.3/1', () => {
  test('sum two values', () => {expect(service.sum(4, 5)).toEqual(9)});//Teste se o retorno de sum(4, 5) é 9
  test('sum two values', () => {expect(service.sum(0, 0)).toEqual(0)});// Teste se o retorno de sum(0, 0) é 0
  test('trow error', () => {
    expect(() => (service.sum(4, '5')))
  .toThrow(/parameters must be numbers/)});//Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
});

// // Exercise 8.3/2

// describe('Exercise8.3/2', () => {
//   const myList = [1, 2, 3, 4];
//   test('array position', () => {expect(myIndexOf(myList, 3)).toBe(2)});
//   test('array position', () => {expect(myIndexOf(myList, 5)).toBe(-1)});
// });

// // Exercise 8.3/3

// describe('Exercise8.3/3', () => {
//   test('sum the values in the array', () => {expect(mySum([1, 2, 3, 4])).toBe(10)});
//   test('sum the values in the array', () => {expect(mySum([1, -2, -3, 4])).toEqual(0)});
//   test('sum the values in the array', () => {expect(mySum([1, 3, -5 , 7, -9, 11])).toEqual(8)});
//   test('sum the values in the array', () => {expect(mySum([])).toEqual(0)});
// });

// // Exercise 8.3/4 - aqui faltou o exercício de inserir array que eu não entendi como se faz.

// describe('Exercise 8.3/4', () => {
//   test('remove number in a array', () => {
//     const arr = [1, 2, 3, 4];
//     expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
//     expect(myRemove(arr, 3)).not.toEqual(arr);
//     expect(myRemove(arr, 5)).toEqual(arr);

// // const myList = [5, 6, 7, 8];
// // myRemove(myList, 5);
// // assert.deepStrictEqual(myList, [5, 6, 7, 8]);

// // assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
//   });
// });

// // Exercise 8.3/5

// describe('Exercise 8.3/5', () => {
//   test('remove without copy', () => {
//     const myList = [1, 2, 3, 4];
//     expect(myRemoveWithoutCopy(myList, 3)).toEqual([1, 2, 4]);
//     expect(myRemoveWithoutCopy(myList, 3)).not.toEqual([1, 2, 3, 4]);
//     // expect(myRemoveWithoutCopy(myList, 1)).toHaveLength(3); // não saquei o erro
//     expect(myRemoveWithoutCopy(myList, 5)).toBe(myList);
//   })
// });


// // Exercise 8.3/6

// describe('Exercise 8.3/6', () => {
//   test('resultados do fizzbuzz', () => {
//   expect(myFizzBuzz(15)).toEqual('fizzbuzz');
//   expect(myFizzBuzz(9)).toEqual('fizz');
//   expect(myFizzBuzz(25)).toEqual('buzz');
//   expect(myFizzBuzz(17)).toEqual(17);
//   expect(myFizzBuzz('this_is_not_a_number')).toBe(false)
//   // assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);
//   });
// });

// // Exercise 8.3/7

// describe('Exercise 8.3/7', () => {
//   const thereIs = '';
//     test('therrIs is a string', () => {
//       expect(typeof thereIs).toBe('string');
//     });
// });

// // Exercise 8.3/8

// describe('Exercise 8.3/8', () => {
//   function thereIs() {};
//     test('thereIs is a function', () => {
//       expect(typeof thereIs).toBe('function');
//     });
// });

// // Exercise 8.3/9 - não é para fazer

// // Exercise 8.3/10

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// describe('Exercise 8.3/10', () => {
//   test('comparing objects', () => {
//     expect(obj1).toStrictEqual(obj2);
//     expect(obj1).not.toStrictEqual(obj3);
//     expect(obj2).not.toStrictEqual(obj3);
//   });
// });

// // Exercise 8.3/11

// describe('Exercise 8.3/11', () => {
//   test ('comparing a is bigger than b', () => {
//     expect(isAbove(7, 5)).toStrictEqual(true);
//     expect(isAbove(7, 7)).toStrictEqual(false);
//     expect(isAbove(7, 8)).toStrictEqual(false);
//   });
// });