function soma(N){
  let somatorio = 0;

  for (let i=1; i<=N; i++){
    somatorio += i;
  }
  return somatorio
}

console.log(soma(5));