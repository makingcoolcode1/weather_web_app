const modal = document.getElementById("myModal");

const span = document.getElementById("close")[0]

modal.style.display = "block";

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target = modal) {
        modal.style.display = "none";
        
    }
}

function saveApiKey() {
    const apiKey = document.getElementById("apiKeyInput").value;
    console.log("API Key:", apiKey);
    modal.style.display = "none";
}

