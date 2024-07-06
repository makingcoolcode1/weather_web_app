const apiModal = document.getElementById("api-nodal")

window.onclick = function(event){
    if (event.target == apiModal) {
        apiModal.style.display = "none";
        
    }
}

function validateApiKey(apiKey){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=${apiKey}&units=metric`)
    .then(response => {
        if (response.status == 200) {
            return true
        } else {
            return false
        }
    })
    .catch(error => {
        console.error("ERROR! Failed to connect to API", error)
        alert("ERROR! Failed to connect to API!")
    })
}

async function storeApiKey(){
    const apiKeyElement = document.getElementById("api-key")
    const apiKey = apiKeyElement.value;

    const isValid = await validateApiKey(apiKey)

    if (isValid) {
        console.log("API KEY", apiKey)
        localStorage.setItem("API KEY", apiKey)
        window.location.href=`weatherSearch.html`
        
    } else {
        console.error("ERROR! API Key is not valid.")
        alert("ERROR! API Key is not valid, please enter a vlid API key. ")
    }

}