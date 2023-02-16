// Audio module
const audio = document.querySelector('.play player-icon');
function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
function playAudio() {
  audio.src = '../assets/sounds/Aqua Caelestis.mp3';
  audio.currentTime = 0;
  audio.play();
}
// end of audio module

// Time and date module
function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreetings();
    setTimeout(showTime, 1000);
  }
showTime();

function showDate() {
    const date1 = document.querySelector('.date');
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}; 
    const currentDate = date.toLocaleDateString('ru-Ru', options);
    date1.textContent = currentDate;
  }
// End of time and date module

// Weather widget
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const city = document.querySelector('.city');
  
  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=6044fb2e91b8c518b966858ae741ddfe&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
  }
  
  function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
  }
  
  document.addEventListener('DOMContentLoaded', getWeather);
  city.addEventListener('keypress', setCity);
// end of weather widget

   // Greetings
   function showGreetings() {
    const date = new Date();
    const hours = date.getHours();
      function getTimeOfDay() {
        if (18 <= hours && hours < 24) {  return ('Добрый вечер')}  else 
        if (6 <= hours && hours < 12) {  return ('Доброе утро')} else
        if (12 <= hours && hours < 18) {  return ('Добрый день')} else
        if (0 <= hours && hours < 6) {  return ('Доброй ночи')};
      }
    const greeting = document.querySelector('.greeting');
    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `${timeOfDay}`;
    greeting.textContent = greetingText;
   }
 // End of greetings
  
 // Name
 const name = document.querySelector('.name');
 function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)
// End of name

 // quotes
async function getQuotes() {  
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
  const quotes = '../momentum/js/data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  const randomQuote = data[Math.floor(Math.random()*10)];
  quote.textContent = randomQuote.text;
  author.textContent = randomQuote.author;
}
getQuotes();
const quoteChanger = document.querySelector('.change-quote');
quoteChanger.addEventListener('click', getQuotes);
 // end of quotes

 // Background
 async function getLinkToImage() {
  const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=9rEOflQ6x4YP8SzhVIeXPnw2bjnP2td490dLW-7DUsA';
  const res = await fetch(url);
  const data = await res.json();
 document.body.style.backgroundImage = `url(${data.urls.regular})`;
 }
 getLinkToImage();

const bgLeftChanger = document.querySelector('.slide-prev');
bgLeftChanger.addEventListener('click', getLinkToImage);
const bgRightChanger = document.querySelector('.slide-next');
bgRightChanger.addEventListener('click', getLinkToImage);
// End background section 