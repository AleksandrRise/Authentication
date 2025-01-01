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
    let data = `{ "username":"${username}" , "password":"${password}" }`;
    const json = JSON.parse(data);

    console.log(json);

    fetch("/register", {
        method: "post",
        body: json
    })
        .then((res) => {
            return res.text();
        })
        .then((txt) => {
            console.log("Submit Success!");
        })
        .catch((err) => {
            console.log(err);
        });
}