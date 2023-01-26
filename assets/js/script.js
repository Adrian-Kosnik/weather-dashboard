const apiKey = '24911910bacb8ce7dbbf8928a170d9c6';
let city;
let country = '';
let dateToday = moment().format('DD/MM/YYYY');
let weatherIcon;
let temperatue;
let humidity;
let windSpeed;

let searchBtnElm = $('#search-button');
let searchInputElm = $('#search-input');
let historyElm = $('#history');

console.log(`This is todays date: ${dateToday}`);
// http://api.openweathermap.org/data/2.5/weather?q=manchester,gb&APPID=24911910bacb8ce7dbbf8928a170d9c6

// TODO: This returns the temperatue in Kelvin, need to convert it into Celsius - 0°C = 273.15K
let weatherDataURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`


// ! Start of Search for City Section

// TODO: when I click search I want:
// TODO: 1 - Take user input (the city) and store it in a variable
// TODO: 2 - Store the users last search in browsers memory
// TODO: 2.5 - Generate buttons for last 6 serches below the search button
// TODO: 3 - Use that variable in the endpoin to grab weather data

function getWeatherData() {
    $.ajax({
        url: weatherDataURL,
        method: "GET"
      }).then(function(response) {
        // this converts temp from kelvin to celsius and saves it.
        temperatue = Math.floor(response.main.temp - 273.15)
        windSpeed = response.wind.speed
        humidity = response.main.humidity
        console.log(`Temperature: ${temperatue}°C`)
        console.log(`Wind Speed: ${windSpeed}mps`)
        console.log(`Humidity: ${humidity}%`)
      });
};

let prevSearch = [];

 // Function for displaying previous search data
 function renderButtons() {
  // Deletes the search history prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();
  // Loops through the array of movies
  for (var i = 0; i < prevSearch.length; i++) {
    // Then dynamicaly generates buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adds a class of movie to our button
    a.addClass("prev-search btn btn-secondary");
    // Added a data-attribute
    a.attr("data-name", prevSearch[i]);
    // Provided the initial button text
    a.text(prevSearch[i]);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);
  };
}

// This event listener checks if the search button has been clicked
// and populates the endpoint url with necessery data after which it
// calls the getWeatherData() to grab all data that is needed.
searchBtnElm.on('click', function(event) {

  // TODO: This event needs to build the current weather
  // TODO: This needs to build the next 5 days of forcast
  // TODO: This needs to save the last search into an array
  // TODO: which is stored in browser memory.

    event.preventDefault()
    city = searchInputElm.val();


    prevSearch.push(city);
    console.log(prevSearch);
    renderButtons();


    console.log(`This is city variable within the event: ${city}`)
    weatherDataURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`

    getWeatherData();
});


// ! End of Search for City Section