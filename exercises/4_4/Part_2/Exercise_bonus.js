// (Difícil) Faça um programa que receba uma string em algarismos romanos
// e retorne o número que a string representa.

// Tem algum erro na função que não pega os objetos criados ???

function transformaRomanos(listaRomanos) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let listaNumeros = [];
  let tranformados = 0;

  for (let i in listaRomanos) {
    listaNumeros[i] = romanos[listaRomanos[i]];
  }

  for (let i in listaNumeros) {
    if (listaNumeros[i] < listaNumeros[i + 1]) {
      listaNumeros[i + 1] = listaNumeros[i + 1] - listaNumeros[i];
    } else {
      result += listaNumeros[i];
    }
  }
  return tranformados;
}

console.log(transformaRomanos(XVIII));

