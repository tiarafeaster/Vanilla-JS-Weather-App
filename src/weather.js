function formatDate(timestamp) {
	// calculate the date

	let date = new Date(timestamp);
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[date.getDay()];
	return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
	let temperature = document.querySelector("#temperature");
	temperature.innerHTML = Math.round(response.data.main.temp);

	let city = document.querySelector(".city");
	city.innerHTML = response.data.name;

	let description = document.querySelector("#description");
	description.innerHTML = response.data.weather[0].description;

	let humidity = document.querySelector("#humidity");
	humidity.innerHTML = response.data.main.humidity;

	let wind = document.querySelector("#wind");
	wind.innerHTML = Math.round(response.data.wind.speed);

	let date = document.querySelector("#date");
	date.innerHTML = formatDate(response.data.dt * 1000);

	console.log(response.data);
}

let apiKey = "5423fee45fccae4c3cd5d7b43daf88ad";
let city = "Orlando";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(showTemperature);
