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
	let city = document.querySelector(".city");
	let description = document.querySelector("#description");
	let humidity = document.querySelector("#humidity");
	let wind = document.querySelector("#wind");
	let date = document.querySelector("#date");

	city.innerHTML = response.data.name;
	temperature.innerHTML = Math.round(response.data.main.temp);
	description.innerHTML = response.data.weather[0].description;
	humidity.innerHTML = response.data.main.humidity;
	wind.innerHTML = Math.round(response.data.wind.speed);
	date.innerHTML = formatDate(response.data.dt * 1000);
	console.log(response.data);
}

let apiKey = "5423fee45fccae4c3cd5d7b43daf88ad";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(showTemperature);
