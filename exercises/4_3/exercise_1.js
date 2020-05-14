// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
// seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5;
let numeroDeLinhas;// ou posição da linha
let asterisco = '*';
let inputLine = ''; // é aonde eu vou jogar os asteriscos. 

for (numeroDeLinhas = 0; numeroDeLinhas < n; numeroDeLinhas++) {
  inputLine = inputLine + asterisco;
  console.log(inputLine);
};

for (numeroDeLinhas = 0; numeroDeLinhas < n; numeroDeLinhas++) {
  console.log(inputLine);
};
