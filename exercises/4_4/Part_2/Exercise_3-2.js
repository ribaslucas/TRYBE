// // Ainda tenho dificuldade em entender o laço. A parte do If não fiou clara.

// function indiceMenorInteiro (numeros) {
//   let menorInteiro = 0;
//   for (let i in numeros) {
//     if (numeros[menorInteiro] > numeros[i]) {
//       menorInteiro = i;
//     }
//   }
//   return menorInteiro;
// }
// console.log(indiceMenorInteiro([1, 5, 8, 15]));



// // Outra meneira de fazer o exercício. Peguei no Git de alguem e me esqueci de quem foi.


// function menorNumero(array){
//     let test = array[0];
//     let indice = 0;
  
//     for (let i = 1; i < array.length; i++){
//       if(array[i] < test){
//         test = array[i];
//         indice = i;
//       }
//     }
    
//     return indice;
//   }
  
//   console.log(menorNumero([2,3,6,7,10,1]));
//   console.log(menorNumero([9,19,5]));
//   console.log(menorNumero([34567, 1, -10, 25]));
//   console.log(menorNumero([6,7,2,10,35]));
//   console.log(menorNumero([4, 5, 20, 14, 65, 24]));

// Depois do 1X1 com o Hamaji ficou mais claro o exercício.

let arrayTeste = [-10, 2, 5, 10, -20]

const escolheMenorNumero = (listaDeValores) => {
  let menorValor = listaDeValores[0];

    for (let i = 0; i < listaDeValores.length; i++) {
      if ( listaDeValores[i] < menorValor) {
        menorValor = listaDeValores[i]
    }
  }
  return menorValor;
}

console.log(escolheMenorNumero(arrayTeste));