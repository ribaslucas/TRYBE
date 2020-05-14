// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(listaDeNomes){
    let test = listaDeNomes[0];
    let indice = 0;
  
    for (let i = 1; i < listaDeNomes.length; i++){
      if(listaDeNomes[i].length > test.length){
        test = listaDeNomes[i];
        // indice = i;
      }
    }
    return listaDeNomes[indice];
  }
  
  console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Minha função - Não funcionou como eu queria, peguei a resposta no gabarito.


  function maiorNome(nome) {
    let maiorNome = nome[0];
    for (let i in nome) {
      if (maiorNome.length < nome[i].length) {
      maiorNome = nome[i];
      }
    }
    return maiorNome;
  }

  console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));