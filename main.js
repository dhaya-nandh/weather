
async function getWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "f7cff86ae350859a2650e8148bec39df"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weather-result").innerHTML = "Error: " + error.message;
    }
}

function displayWeather(data) {
    const weatherDetails = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather:${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weather-result").innerHTML = weatherDetails;
}
