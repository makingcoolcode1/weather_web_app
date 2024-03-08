
const apiModal = document.getElementById("api-modal");

window.onload = function(){
    apiModal.style.display = "block";
}

function closeModal(){
    apiModal.style.display = "none";
}

function storeApiKey() {
    const apiKey = document.getElementById("apiKeyInput")
    console.log("API KEY; ", apiKey)
    apiModal.style.display = "none"
}