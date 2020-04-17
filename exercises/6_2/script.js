// Selecionar Estados (Daniel Pantalena)
const states = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Destrito Federal',
  ES: 'Espirito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  SC: 'Santa Catrina',
  SP: 'São Paulo',
};
function createStatesOptions() {
  const parentSelect = document.getElementById('state');
  for (let i = 0; i < Object.keys(states).length; i += 1) {
    const stateOption = document.createElement('option');
    stateOption.value = Object.keys(states)[i];
    stateOption.innerHTML = states[Object.keys(states)[i]];
    parentSelect.appendChild(stateOption);
  }
}

// // Validar a data (falta colocar em português)
// const dateInput = document.getElementById("datepicker");
//   const splittedDate = dateInput.value.split("/");
//   for (let index = 0; index < splittedDate.length; index += 1) {
//     if (splittedDate[0] < 1 || splittedDate > 31) {
//       alert("Invalid date!");
//       break;
//     } else if (splittedDate[1] < 1 || splittedDate > 12) {
//       alert("Invalid date!");
//       break;
//     } else if (splittedDate[2] < 0) {
//       alert("Invalid date!");
//       break;
//     }
//   }

// submit button
const submitButton = document.getElementById('submit');

// Validar se todos inputs foram inseridos
function allData() {
  const allDataDiv = document.createElement('div');
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    const title = document.createElement('span');
    const text = document.createElement('span');
    title.innerHTML = `${inputs[i].name}: `;
    text.innerHTML = `${inputs[i].value} <br><br>`;
    allDataDiv.appendChild(title);
    allDataDiv.appendChild(text);
  }
  document.body.appendChild(allDataDiv);
}


window.onload = () => {
  createStatesOptions();
  // validateEmail();
  // validateDate();
  // submitButton.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   allData();
  // });
};

let picker = new Pikaday({ field: document.getElementById('datepicker') });