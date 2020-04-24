// Implemantando o calendário com jQuery
$(document).ready(function () {
  // Popup para selecionar a data
  $('.datepicker').datepicker({
    i18n: {
    selectMonths: true,//Creates a dropdown to control month
    selectYears: 15,//Creates a dropdown of 15 years to control year
    //The title label to use for the month nav buttons
    labelMonthNext: 'Proximo Mês',
    labelMonthPrev: 'Mês Anterior',
    //The title label to use for the dropdown selectors
    labelMonthSelect: 'Selecionar Mês',
    labelYearSelect: 'Selecionar Ano',
    //Months and weekdays
    monthsFull: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
    monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
    weekdaysFull: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
    weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
    //Materialize modified
    weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
    //Today and clear
    today: 'Hoje',
    cancel: 'Cancelar',
    clear: 'Limpar',
    close: 'Fechar',
    //The format to show on the `input` element
    format: 'dd/mm/yyyy'
  }});
  // Selecionar os estados
  $('.formSelect').formSelect();
});


// submit button
const submitButton = document.getElementById('submit');

// submit form
function submitForm(event) {
  event.preventDefault();
  const infos = event.target.elements;
  const resultsDiv = document.createElement('div');
  resultsDiv.classList.add('container');
  for (let i = 0; i < infos.length; i += 1) {
    if (infos[i].id !== '') {
      let resultChild = document.createElement('p');
      resultChild.innerHTML = `${infos[i].name}: ${infos[i].value} <br>`;
      resultsDiv.appendChild(resultChild);
    }
  }
  document.body.appendChild(resultsDiv);
}



// window.onload = () => {
//   createStatesOptions();
//   submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//   }
// }
