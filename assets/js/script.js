const apiKey = '24911910bacb8ce7dbbf8928a170d9c6';
let city = 'manchester';
let country = 'gb';

// TODO: This returns the temperatue in Kelvin, need to convert it into Celsius
let weatherDataURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`


// ! Start of Search for City Section

function getWeatherData() {
    $.ajax({
        url: weatherDataURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
      });
};
getWeatherData();

// ! End of Search for City Section