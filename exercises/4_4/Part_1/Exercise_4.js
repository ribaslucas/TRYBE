let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

for (let key in info) {
    console.log(info[key])
}

// A forma abaixo mostra o par chave - valor
for (let key in info) {
  console.log(key, info[key])
}