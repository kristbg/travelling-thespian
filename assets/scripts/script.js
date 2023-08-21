// Declare API Key as constant
const apiKey = "a7a720181a7de2e5dae1fec13acc6175";

// Declare search button element as variable
// TODO: Do history button elements need to be declared beforehand?
var searchButton = document.getElementById("search-button");

var cityName = "";
var fetchLatitude = 0;
var fetchLongitude = 0;
var firstQuery = false;

function getWeatherData() {
  // TODO: Parse city name and replace " " with "_"
  var geoRequestUrl = "";
  var weatherRequestUrl = "";
  if (firstQuery) {
    cityName = document.getElementById("city-search-form").value;
  } else {
    cityName = "Toronto";
    firstQuery = true;
  }
  geoRequestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey;
  fetch(geoRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      fetchLatitude = data[0].lat;
      fetchLongitude = data[0].lon;
      cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
      weatherRequestUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + fetchLatitude + "&lon=" + fetchLongitude + "&appid=" + apiKey + "&units=imperial";
      return fetch(weatherRequestUrl);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("city-name").innerHTML = cityName + " (" + dayjs().format('M/D/YYYY') + ")";
      document.getElementById("city-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png");
      document.getElementById("city-temp").innerHTML = "Temp: " + data.list[0].main.temp + " °F";
      document.getElementById("city-wind").innerHTML = "Wind: " + data.list[0].wind.speed + " MPH";
      document.getElementById("city-humi").innerHTML = "Humidity: " + data.list[0].main.humidity + "%";
      document.getElementById("day1-date").innerHTML = dayjs().add(1, 'day').format('M/D/YYYY');
      document.getElementById("day1-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + "@2x.png");
      document.getElementById("day1-temp").innerHTML = "Temp: " + data.list[8].main.temp + " °F";
      document.getElementById("day1-wind").innerHTML = "Wind: " + data.list[8].wind.speed + " MPH";
      document.getElementById("day1-humi").innerHTML = "Humidity: " + data.list[8].main.humidity + "%";
      document.getElementById("day2-date").innerHTML = dayjs().add(2, 'day').format('M/D/YYYY');
      document.getElementById("day2-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[16].weather[0].icon + "@2x.png");
      document.getElementById("day2-temp").innerHTML = "Temp: " + data.list[16].main.temp + " °F";
      document.getElementById("day2-wind").innerHTML = "Wind: " + data.list[16].wind.speed + " MPH";
      document.getElementById("day2-humi").innerHTML = "Humidity: " + data.list[16].main.humidity + "%";
      document.getElementById("day3-date").innerHTML = dayjs().add(3, 'day').format('M/D/YYYY');
      document.getElementById("day3-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + "@2x.png");
      document.getElementById("day3-temp").innerHTML = "Temp: " + data.list[24].main.temp + " °F";
      document.getElementById("day3-wind").innerHTML = "Wind: " + data.list[24].wind.speed + " MPH";
      document.getElementById("day3-humi").innerHTML = "Humidity: " + data.list[24].main.humidity + "%";
      document.getElementById("day4-date").innerHTML = dayjs().add(4, 'day').format('M/D/YYYY');
      document.getElementById("day4-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + "@2x.png");
      document.getElementById("day4-temp").innerHTML = "Temp: " + data.list[32].main.temp + " °F";
      document.getElementById("day4-wind").innerHTML = "Wind: " + data.list[32].wind.speed + " MPH";
      document.getElementById("day4-humi").innerHTML = "Humidity: " + data.list[32].main.humidity + "%";
      document.getElementById("day5-date").innerHTML = dayjs().add(5, 'day').format('M/D/YYYY');
      document.getElementById("day5-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png");
      document.getElementById("day5-temp").innerHTML = "Temp: " + data.list[39].main.temp + " °F";
      document.getElementById("day5-wind").innerHTML = "Wind: " + data.list[39].wind.speed + " MPH";
      document.getElementById("day5-humi").innerHTML = "Humidity: " + data.list[39].main.humidity + "%";
    })
}

// TODO: Get localStorage to pull previous searches and add corresponding button elements
getWeatherData();

// Add event listener to search button
// TODO: Do listeners to history button elements need to be added beforehand?
searchButton.addEventListener("click", getWeatherData);