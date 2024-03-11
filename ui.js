
function getWeather() {
    const apiKey = document.getElementById("apiKeyInput").value;
    const citySearch = document.getElementById("city-search").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`)
    .then (weatherResult => {
        if (!weatherResult.ok) {
            console.error(error)
        }
        return weatherResult.json()
    })
    .then(weatherData => {

        const weatherDescription = weatherData.weather[0].description;
        var weatherTemp = weatherData.main.temp;
        var weatherFehrenheit = (weatherTemp * (9/5) + 32 );
        const weatherHumidity = weatherData.main.humidity;

        document.getElementById("weather-container").innerHTML = `
            <h2>Weather in ${citySearch}</h2>
            <p>Description: ${weatherDescription}</p>
            <p>Temperature: ${weatherFehrenheit}</p>
            <p>Humidity: ${weatherHumidity}</p>

            `;
    })
    .catch(error => {
        document.getElementById("weather-container").innerHTML = `<p>ERROR, Unable to find city!</p>`
        console.error(error)
    });


}