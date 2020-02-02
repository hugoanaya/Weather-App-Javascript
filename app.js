// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.queryCommandValue(".temperature-value p");
const descElement = document.querySelector(".temperature-descrition p");
const locationElement = document.querySelector(".location p");

// App Data
const weather = {};

weather.temperature = {
    unit : "celcius"
}

// App consts and vars
const KELVIN = 273;
// API Key
const key = "82005d27a116c2880c8f0fcb866998a0";

// Check if browser supports geolocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition( setPosition, showError);
} else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Broowser DOesn't Support Geolocation.</p>"
}

// Set user's position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// Show error when there is an issue with geolocation service
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// Celsius to fahrenheit conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// When the user clicks on the temperature element 
tempElement.addEventListener("click", function() {
    if(weather.temperature.value === undefined) return;
    if(weather.temperature.unit === "celcius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}° <span>F</span>` ;
        weather.temperature.unit = "fahrenheit";
    } else {
        tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;
        weather.temperature.unit = "celsius";
    }
});
