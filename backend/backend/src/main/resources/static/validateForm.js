let xhr = new XMLHttpRequest();

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
    let theUrl = "/users/register";


    xhr.open("POST", theUrl);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Handle the response
    xhr.onload = () => {
        if (xhr.status === 201) {
            console.log("Success!!!");
        } else if (xhr.status === 400) {
            console.error("Bad request!")
        } else {
            console.error("Request failed. Returned status of " + xhr.status);
        }
    };

    xhr.send(JSON.stringify(data));
}