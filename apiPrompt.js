
const apiModal = document.getElementById("api-modal");

window.onclick = function(event){
    if (event.target == apiModal){
        apiModal.style.display = "none";
    }
}

function storeApiKey(){
    const apiKey = document.getElementById("api-key")
    console.log("API KEY:", apiKey)
    apiModal.style.display = "none";
}


