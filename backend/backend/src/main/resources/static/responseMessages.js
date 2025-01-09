// Messages for registration page
function successMessage() {
    let message = document.getElementById("successMessage");
    showMessage(message);
}

function failMessage() {
    let message = document.getElementById("failMessage");
    showMessage(message);
}

// Messages for log in page
function matchingFailMessage() {
    let message = document.getElementById("matchingFailMessage");
    showMessage(message);
}

function userNotFoundMessage() {
    let message = document.getElementById("userNotFoundMessage");
    showMessage(message);
}


// Reload page without touching status messages
function reload() {
    let container = document.querySelector(".menuBlock");
    let content = container.innerHTML;

    container.innerHTML = content;
}

// Show either fail or success message
async function showMessage(message) {
    const delay = ms => new Promise(res => setTimeout(res, ms))

    message.style.top = "50px";
    await delay(3000);
    message.style.top = "-100px";
}