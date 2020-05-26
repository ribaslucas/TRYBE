const numAleatorio = () => {
  return new Promise((resolve, reject) => {
    let array = [];
    for (let i = 0 ; i < 10 ; i++){
      array.push(getRandom(1, 50));
    } 
    const totalArray = array.reduce((total, arrayNumeros) => total + arrayNumeros, 0);
    if (totalArray < 8000){
      resolve('Deu bom');
    } else {
      reject('Deu ruim');
    }
  });
}

const getRandom = (min, max) => {
  return Math.floor((Math.random() * ((max - min + 1)) + min) **2 );
}

numAleatorio()
  .then(info => console.log(info))
  .catch(info => console.log(info))
