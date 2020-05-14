function verificaPalimero(string) {
    for (index in string) {
        if (string[index] === string[string.length - 1 - index]) {
            return true;
        }
        else {
            return false;
        }
    }
} 

console.log(verificaPalimero("arara")); 


  
// function verificapalindromo(word){
//     let separeteString = word.split('');
//     let invertString = '';
//     let comprimento = separeteString.length;
  
//     //virando a variável
//     for( let i=1; i<=comprimento; i++){
//       invertString = invertString + separeteString[comprimento - i];
//     }
  
//     //Comparando
//     if (word === invertString){
//       return true;
//     }else {
//       return false;
//     }
//   }
  
//   console.log(verificapalindromo("mutum"));


// function verificaPalindrome(str) {
//     result = null;
//     let stringLenght = str.length
//     for (let i = 0; i <= stringLenght / 2 - 1; i += 1) {
//         if (str[i] === str[stringLenght - 1 - i]) {
//             result = true
//         } else {
//             result = false;
//             break;
//         }
//     }
//     return result;
// }

// console.log(verificaPalindrome("sator arepo tenet opera rotas"));