// Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex++) {
  // console.log('executou o primeiro for');
  for (columnIndex = 0; columnIndex <= n; columnIndex++) {
    // console.log('executou o segundo for');
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition--;
};
