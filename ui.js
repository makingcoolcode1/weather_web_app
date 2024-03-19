
function getWeather(){
    const apiKey = document.getElementById("api-key").value;
    const citySearch = document.getElementById("city-search").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`)
    .then(weatherResult => {
        if (!weatherResult.ok) {
            console.error()
            alert("ERROR: Unable to connect to API!")
        }

        return weatherResult.json()

    })
    .then(weatherData => {
        
        const weatherDescription = weatherData.weather[0].description;
        const weatherTemp = weatherData.main.temp;
        const weatherHumdity = weatherData.main.humidity;

        document.getElementById("weather-output").innerHTML = `
        <h2>Weather in ${citySearch}</h2>
        <p>Description: ${weatherDescription}</p>
        <p>Temperature: ${weatherTemp}</p>
        <p>Humidity: ${weatherHumdity}</p>
        `;
    })
    .catch(error => {
        document.getElementById("weather-output").innerHTML = `<p>ERROR: Unable to find city....Please enter another city.<p>`
        console.error(error)
        alert("ERROR: City not found")
    })

}