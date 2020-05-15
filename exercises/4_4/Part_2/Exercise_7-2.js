// Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word. 
// Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(stringWord, stringEnd) {
    let result = false;
    for (let i = 0; i < stringEnd.length; i += 1) {
        if (stringEnd[stringEnd.length - 1] === stringWord[stringWord.length - 1]) {
            result = true;
        }
    }
    return result;
}

console.log(verificaFimPalavra("trybe", "be"));