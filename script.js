const apiKey = '279ff21aaa307c983a0e54b69ab83cba';

async function getWeather() {
    const location = document.getElementById('location-input').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    if (data.cod === 200) {
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        weatherInfo.innerHTML = `<p>Location not found</p>`;
    }
}
