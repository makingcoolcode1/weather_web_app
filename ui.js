
function getWeather() {
    const apiKey = "df9f6adc7d89e0757fdee3c72ae7b5eb"
    const citySearch = document.getElementById("city-input").value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`)
    .then (result=> {
        if (!result.ok) {
            alert("ERROR! Cannot connect to API")
            throw new error("ERROR")
            
        }

        return result.json()
    })
    .then(data => {

        const getDescription = data.weather[0].description;
        const getTemp = data.main.temp;
        const getHumidity = data.main.humidity;

        document.getElementById("weather-container").innerHTML = `
            <h2>Weather in ${citySearch}</h2>
            <p>Description: ${getDescription}</p>
            <p>Temperature: ${getTemp}</p>
            <p>Humidity: ${getHumidity}</p
            
        `;
    })

    .catch(error => {
        console.error("Error fetching weather data", error)
        document.getElementById("weather-constainer").innerHTML = `<p> Eerror fetching weather data</p>`
    });


}