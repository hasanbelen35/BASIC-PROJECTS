const form = document.getElementById("form");
const input = document.getElementById("inputbox");
const button = document.querySelectorAll(".button");
const result = document.querySelector(".resultbox");

const APIKey = '2e4b113fa8768e7c9973483fd0e37261';

eventListener();

function eventListener() {
    form.addEventListener("submit", submitFunction);
}

function submitFunction(e) {
    e.preventDefault();
    const city = input.value;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;


    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = `
                    <h5>${data.name} WEATHER </h5>
                    <p> DESCRİPTION ${data.weather[0].description}</p>
                    <p> WİND : ${data.wind.speed} </p>
                    <p> TEMPRATURE : ${data.main.temp}°C</p>
                `;
                result.innerHTML = weather;
            } else {
                result.innerHTML = `<p style="color:red;">CİTY COULD NOT FOUND</p>`;
            }
        })
        .catch(error => {
            result.innerHTML = `<p style="color:red;">OOPSS! THERE İS A PROBLEM!</p>`;
        });

}
