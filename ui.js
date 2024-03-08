

function getWeather() {
    const apiKey = document.getElementById("apiKeyInput").value
    const citySearch = document.getElementById("city-search").value;
    const spinner = document.getElementById("spinner");
    const weatherContainer = document.getElementById("weather-container");
    
    spinner.style.display = "block";
    weatherContainer.innerHTML = "";

    setTimeout(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`)
        .then (result => {
            if (!result.ok) {
                alert("ERROR! Unable to connect to API")
                
            }
            return result.json()
        })
        .then (weatherData => {

            const weatherDescription = weatherData.weather[0].description;
            const weatherTemp = weatherData.main.temp;
            const weatherHumudity = weatherData.main.humidity

            spinner.style

            document.getElementById("weather-container").innerHTML = `
                <h2>Current weather in ${citySearch}</h2>
                <p>Description: ${weatherDescription}</p>
                <p>Temperature: ${weatherTemp}<p>
                Humidity: ${weatherHumudity}<p>
                    
                `;

                spinner.style.display = "none";
        })
        .catch (error => {
            console.error("ERROR Finding weather!", error)
            document.getElementById('weather-container').innerHTML = `<p> ERROR: Unable to fund weather<p>`
            alert("ERROR: Unable to find weather for city")
        })
    
    }, 2000);
}