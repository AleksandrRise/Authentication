function validateForm() {
    let username = document.querySelector(".name2").value;
    let password = document.querySelector(".pass2").value;
    let confPassword = document.querySelector(".confPass2").value;

    if (password === confPassword) {
        doPost(username, password);
    } else {
        alert("You typed two different passwords.");
    }
}


function doPost(username, password) {
    let data = {
        username: username,
        password: password
    }

    let xmlhttp = new XMLHttpRequest();
    let theUrl = "/users/register";

    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
}