// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Não faço ideia do que está se passando nessa lógica abaixo.

let arr = [8, 2, 3, 5, 8, 2, 3];

function mostRepeat(array) {
  let largestArray = [];
  for (let i = 0; i < array.length; i += 1) {
    let repeatedArray = [];
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        repeatedArray.push(array[i]);
      }
    }
    if (repeatedArray.length > largestArray.length) {
      largestArray = repeatedArray;
    }
  }
  return largestArray[0];
}

console.log(mostRepeat(arr));

// Abaixo está o gabarito do exercício.

function maisRepetido(listaDeNumeros) {
  let contagemRepetidos = 0;
  let contagemNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in listaDeNumeros) {
    let verificaNumero = listaDeNumeros[index];
    for (let index2 in listaDeNumeros) {
      if (verificaNumero === listaDeNumeros[index2]) {
        contagemNumero++;
      }
    }
    if (contagemNumero > contagemRepetidos) {
      contagemRepetidos = contagemNumero;
      indexNumeroRepetido = index;
    }
    contagemNumero = 0;
  }
  return listaDeNumeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
