const randomNumber = () => Math.floor(Math.random() * 100);

let isDivisible = number => (randomNumber() % number) === 0;

test('quando o número aleatório é divisível pelo que escolhi retorna `true`', () => {
  isDivisible = jest.fn().mockReturnValue('true')
  expect(isDivisible()).toBe('true');
  expect(isDivisible).toHaveBeenCalled();
  expect(isDivisible).toHaveBeenCalledTimes(1);
});




// Resolução da Débora


function randomNumber() {
  return Math.floor(Math.random() * 100);
  }
  
  function isDivisible(number) {
  if (randomNumber() % number === 0) {
  return true;
  } 
  return false
  }
  
  test('verifica que a função randomNumber() é chamada quando invocamos a isDivisible()', () => {
  randomNumber = jest.fn();
  
  isDivisible();
  expect(randomNumber).toHaveBeenCalled();
  }); 

  function randomNumber() {
return Math.floor(Math.random() * 100);
}

function isDivisible(number) {
if (randomNumber() % number === 0) {
return true;
} 
return false
}

test('verifica que a função randomNumber() é chamada quando invocamos a isDivisible()', () => {
randomNumber = jest.fn();

isDivisible();
expect(randomNumber).toHaveBeenCalled();
}); 
function randomNumber() {
return Math.floor(Math.random() * 100);
}

function isDivisible(number) {
if (randomNumber() % number === 0) {
return true;
} 
return false
}

test('verifica que a função randomNumber() é chamada quando invocamos a isDivisible()', () => {
randomNumber = jest.fn();

isDivisible();
expect(randomNumber).toHaveBeenCalled();
});

test('quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true', () => {
randomNumber = jest.fn().mockReturnValue(24);
expect(isDivisible(2)).toBe(true);
});

test('Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.', () => {
randomNumber = jest
.fn()
.mockReturnValueOnce(8)
.mockReturnValueOnce(13)
.mockReturnValue(24)

expect(isDivisible(4)).toBe(true);

expect(isDivisible(3)).toBe(false);

expect(isDivisible(2)).toBe(true);

expect(isDivisible(12)).toBe(true);
}); 












  function randomNumber() {
  return Math.floor(Math.random() * 100);
  }
  
  function isDivisible(number) {
  if (randomNumber() % number === 0) {
  return true;
  } 
  return false
  }
  
  test('verifica que a função randomNumber() é chamada quando invocamos a isDivisible()', () => {
  randomNumber = jest.fn();
  
  isDivisible();
  expect(randomNumber).toHaveBeenCalled();
  });
  
  test('quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true', () => {
  randomNumber = jest.fn().mockReturnValue(24);
  expect(isDivisible(2)).toBe(true);
  });
  
  test('Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.', () => {
  randomNumber = jest
  .fn()
  .mockReturnValueOnce(8)
  .mockReturnValueOnce(13)
  .mockReturnValue(24)
  
  expect(isDivisible(4)).toBe(true);
  
  expect(isDivisible(3)).toBe(false);
  
  expect(isDivisible(2)).toBe(true);
  
  expect(isDivisible(12)).toBe(true);
  }); 