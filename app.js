


//Program State
const weather_API = "https://api.openweathermap.org/data/2.5/weather";
const weather_KEY = "c6596f4f8689d864fa991963c3ef9a64";
let hardCode = "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=c6596f4f8689d864fa991963c3ef9a64&units=imperial";

let city_name = "";

let fahrenheit = "imperial";
let celsius = "metric";
let radioSubmit;
// let response = "The weather in "


//Select Elements
let form = document.querySelector("#form");
let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let fDegree = document.querySelector("#fahrenheit");
let cdegree = document.querySelector("#celsius");
let responseP = document.querySelector("#response");
const radioButtons = document.querySelectorAll('input[name="degrees"]');

//Event Handler
searchBtn.addEventListener("click", () => {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioSubmit = radioButton.value;
            console.log(radioSubmit);
            break;
        }
    }
});
responseP.textContent = "Hello";
// console.log(radioButtons);
// searchBtn.addEventListener("submit", getWeatherData);
form.addEventListener("submit", getWeatherData);

function getWeatherData(searchTerm) {
    fetch(`${weather_API}?q=${searchInput}&units=${radioSubmit}`)
    .then((res) => res.json())
    .then((body) => {
        const temperature = body.main.temp;
        const min = body.main.temp_min;
        const max = body.main.temp_max;
        responseP.textContent = `The weather of ${searchTerm} is ${temperature} with a high of ${max} and a low of ${min}`;
    })
    .catch(() => {
        feedbackEle.textContent = "Oh no! Something went wrong, please try again.";
    })
}

