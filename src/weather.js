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
	fahrenheitTemperature = response.data.main.temp;
	temperature.innerHTML = Math.round(fahrenheitTemperature);

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

	let icon = document.querySelector("#icon");
	icon.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
	);
	icon.setAttribute("alt", response.data.weather[0].description);

	console.log(response.data);
}

function search(city) {
	let apiKey = "5423fee45fccae4c3cd5d7b43daf88ad";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
	axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
	event.preventDefault();
	let cityInput = document.querySelector("#city-input");
	search(cityInput.value);
}

function showCelsiusTemperature(event) {
	event.preventDefault();
	let celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
	fahrenheitLink.classList.remove("active");
	celsiusLink.classList.add("active");
	let temperature = document.querySelector("#temperature");
	temperature.innerHTML = Math.round(celsiusTemperature);
}

function showFahrenheitTemperature(event) {
	event.preventDefault();
	let temperature = document.querySelector("#temperature");
	fahrenheitLink.classList.add("active");
	celsiusLink.classList.remove("active");
	temperature.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemperature);

let fahrenheitLink = document.querySelector("#fahr-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

search("New York");
