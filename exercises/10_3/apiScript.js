// Aqui eu acho que vai ser Pika
const jokeContainer = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (data) => {
  jokeContainer.innerHTML = `${data.joke}`
};

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => fetchJoke(data));


window.onload = () => fetchJoke();
        
