function menorNumero(array){
    let test = array[0];
    let indice = 0;
  
    for (let i = 1; i < array.length; i++){
      if(array[i]<test){
        test = array[i];
        indice = i;
      }
    }
    
    return indice;
  }
  
  console.log(menorNumero([2,3,6,7,10,1]));
  console.log(menorNumero([9,19,5]));
  console.log(menorNumero([34567, 1, -10, 25]));
  console.log(menorNumero([6,7,2,10,35]));
  console.log(menorNumero([4, 5, 20, 14, 65, 24]));