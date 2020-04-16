const estado = document.getElementById("uf");
const arrayUf = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ]; 
for (i = 0; i < arrayUf.length; i += 1) {
  estado.innerHTML += ` <option value=${arrayUf[i]}>${arrayUf[i]}</option>`
}



// Botão para apagar o formulário
const apagaTudo = document.getElementById("apaga-tudo");
apagaTudo.addEventListener("click", function () {
  const tarefas = document.querySelectorAll("li");
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefaListada.removeChild(tarefas[i]);
  }
});