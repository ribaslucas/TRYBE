
// function maiorNumero(array){
//     let test = array[0];
//     let indice = 0;
  
//     for (let i=1; i<array.length; i++){
//       if(array[i]>test){
//         test = array[i];
//         indice = i;
//       }
//     }
    
//     return indice;
//   }
  
//   console.log(maiorNumero([2,3,6,7,10,1]));
//   console.log(maiorNumero([9,19,5]));
//   console.log(maiorNumero([34567, 1, -10, 25]));
//   console.log(maiorNumero([6,7,2,10,35]));
//   console.log(maiorNumero([4, 5, 20, 14, 65, 24]));

// // Outra meneira de resolver - Achei a lógica dessa mais fácil.

//   function indiceMaiorInteiro (numeros) {
//     let maiorInteiro = 0;
//     for (let i in numeros) {
//       if (numeros[maiorInteiro] < numeros[i]) {
//         maiorInteiro = i;
//       }
//     }
//     return maiorInteiro;
//   }
//   console.log(indiceMaiorInteiro([1, 5, 8, 15]));


// dado uma lista (array), descobrir o maior valor.

// primeiro criar uma função que recebe um array
let arrayTeste = [6,7,2,10,35];

const escolheMaiorValor = (listaDeValores) => {
  // agora eu tenho que comprar e saber quem é o maior. Vou fazer isso um a um...
  // esquerda com direita... 
let maiorValor = listaDeValores[0]; // abrirndo a contagem com o primeiro valor do array

  for (let i = 0; i < listaDeValores.length; i++) {
    // console.log(listaDeValores[i]);
    if ( listaDeValores[i] > maiorValor ) {
      maiorValor = listaDeValores[i]
    }
  }
  return maiorValor;
}

console.log(escolheMaiorValor(arrayTeste));