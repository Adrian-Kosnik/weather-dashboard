const apiKey = '24911910bacb8ce7dbbf8928a170d9c6';
let city = 'manchester';
let country = 'gb';
let dateToday = moment().format('DD/MM/YYYY');
let date = dateToday + 1;
let weatherIcon = '';
let temperatue = '';
let humidity = 0;
let windSpeed = 0;

console.log(`This is todays date: ${dateToday}`);


// TODO: This returns the temperatue in Kelvin, need to convert it into Celsius - 0°C = 273.15K
let weatherDataURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`


// ! Start of Search for City Section

function getWeatherData() {
    $.ajax({
        url: weatherDataURL,
        method: "GET"
      }).then(function(response) {
        temperatue = Math.floor(response.main.temp - 273.15)
        console.log(`${temperatue}°C`)
        // response.main.temp
      });
};
getWeatherData();

// ! End of Search for City Section