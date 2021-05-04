function showTemperature(response) {
    console.log(response.data.main.temp);
}

let apiKey = "5423fee45fccae4c3cd5d7b43daf88ad";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(showTemperature);