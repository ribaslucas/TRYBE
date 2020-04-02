function maiorNome(array){
    let test = array[0];
    let indice = 0;
  
    for (let i = 1; i < array.length; i++){
      if(array[i].length > test.length){
        test = array[i];
        indice = i;
      }
    }
    
    return array[indice];
  }
  
  console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));