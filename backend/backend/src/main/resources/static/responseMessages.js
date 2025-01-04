async function successMessage() {
    let message = document.getElementById("successMessage");
    const delay = ms => new Promise(res => setTimeout(res, ms))

    message.style.top = "50px";
    await delay(3000);
    message.style.top = "-100px";
}

function failMessage() {
    let message = document.getElementById("failMessage");


}

// Reload page besides messages
function reload() {
    let container = document.querySelector(".menuBlock");
    let content = container.innerHTML;

    let form1 = document.querySelector(".menuBlock__form1");
    let form2 = document.querySelector(".menuBlock__form2");

    container.innerHTML = content;
}