// Exercise 1 - criate 5 programs to basec math operations //

// Defining the variables//

let a = 20; 
let b = 10; 

// Program 1 - Sum // Dá para ser feito de 3 maneiras. A primeira é a mais clássica
// a segunda seria uma maneira mais simples e a terceira é a arrow function da primeira.

let sum = a + b;
console.log (sum);


function soma(x, y) {
    return x + y;
    }
    console.log(soma(a, b))


const somatorio = (a, b) => a + b;
console.log(somatorio(a, b))


// Program 2 - Subtraction //

let subtration = a - b;
console.log (subtration);


function subtracao(a, b) {
    return a - b 
}
console.log(subtracao(a, b))


const sub = (a, b) => a - b;
console.log(sub(a, b));


// Program 2 - Multiplication //

let multiplication = a * b;
console.log (multiplication);


function multiplicacao(a, b) {
    return a * b
}
console.log(multiplicacao(a, b));


const mult = (a, b) => a * b;
console.log(mult(a, b));


// Program 2 - Division //

let division = a / b;
console.log (division);

function divisao(a, b) {
    return a / b
}
console.log(divisao(a, b));


const divi = (a, b) => a / b;
console.log(divi(a, b));


// Program 2 - Module //

//let module = a % b;
//console.log (module);


