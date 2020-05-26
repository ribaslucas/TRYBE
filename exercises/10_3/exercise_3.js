const getRandom = (min, max) => {
  return Math.floor((Math.random() * ((max - min + 1)) + min) **2 );
}

const dividindoArray = (numero) => new Promise((resolve, reject) => {
  const result = [2, 3, 5, 10].map(elem => numero / elem);
  resolve(result);
});

const totalArray = array => array.reduce((total, arrayNumeros) => total + arrayNumeros, 0);

const numAleatorio = new Promise((resolve, reject) => {
    const array = [];
    for (let i = 0 ; i < 10 ; i++){
      array.push(getRandom(1, 50));
    } 
    const arraySomado = totalArray
    arraySomado < 8000 ? resolve (arraySomado) : reject ();
  });

const onError = () => console.log('É mais de oito mil! Essa promise deve estar quebrada!”');

// numAleatorio
//   .then(dividindoArray)
//   .then((result) => console.log(totalArray(result)))
//   .catch(onError);

  async function asyncFunc() {
    try {
      const arraySomado = await numAleatorio;
      const totalDividido = await divided(arraySomado);
      await console.log(totalArray(totalDividido));
    } catch (error) {
      onError();
    }
  }
  asyncFunc();
