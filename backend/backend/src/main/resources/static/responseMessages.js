function successMessage() {
    let message = document.getElementById("successMessage");
    showMessage(message);
}

function failMessage() {
    let message = document.getElementById("failMessage");
    showMessage(message);
}

// Reload page besides messages
function reload() {
    let container = document.querySelector(".menuBlock");
    let content = container.innerHTML;

    let form1 = document.querySelector(".menuBlock__form1");
    let form2 = document.querySelector(".menuBlock__form2");

    container.innerHTML = content;
}

// Show either fail or success message
async function showMessage(message) {
    const delay = ms => new Promise(res => setTimeout(res, ms))

    message.style.top = "50px";
    await delay(3000);
    message.style.top = "-100px";
}