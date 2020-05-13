let a = 50;
let b = 700;
let c = 30
let result = null;

if (a > b && a > c) {
    console.log("O primeiro número é maior ->  " + a)
}
else if (b >a && b > c) {
    console.log("O segundo número é maior ->  " + b)
}
else {
    console.log("O terceiro número é maior ->  " + c)
}

// Fazendo o exercício como uma função... não pode se esquecer de chamar a função no final! 
function maiorNumero (a, b, c) {
if (a > b && a > c) {
        console.log("O primeiro número é maior ->  " + a)
    } else if (b > a && b > c) {
        console.log("O segundo número é maior ->  " + b)
    } else {
        console.log("O terceiro número é maior ->  " + c)
}};

console.log(maiorNumero(5, 7, 9));
