
const apiModal = document.getElementById("api-modal");

window.onclick = function(event){
    if (event.target == apiModal) {
        apiModal.style.display = "none"
        
    }
}

function validateApiKey(apiKey){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=${apiKey}&units=metric`)
    .then(response=>{
        if (response.status == 200) {
            return true
        } else {
            return false
        }
    })
    .catch(error =>
        console.error("ERROR! Failed to validate API Key", error)
        
    )
    
}

async function storeApiKey(){
    const apiKeyElement = document.getElementById("api-key")
    const apiKey = apiKeyElement.value
    console.log("API KEY", apiKey)

    const isValid = await validateApiKey(apiKey)
    if (isValid) {
        localStorage.setItem("API KEY", apiModal)
        window.location.href = `weatherSearch.html`
    } else {
        alert("ERROR! API KEY NOT VALID")
    }
}