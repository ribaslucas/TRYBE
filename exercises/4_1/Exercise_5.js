let a = 90;
let b = 90;
let c = 60;
let somaAngulos = a + b + c;
let triangulo = false;

if ( a <= 0 || b <= 0 || c <= 0 ) {
    console.log ("Não é possível formar um triângulo com esses ângulos -> " +a + " " +b + " " +c)
}
else if (somaAngulos === 180) {
    triangulo = true;
    console.log ("É possível formar um triângulo com os ângulos ->  " +a + " " +b + " " +c)
}
else {
    console.log (triangulo)
}

