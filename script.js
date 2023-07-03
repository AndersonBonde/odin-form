console.log("Start");

const submitButton = document.querySelector("#submit-button");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");

passwordConfirm.addEventListener("input", checkPassword);

function checkPassword() {
    if(password.value === passwordConfirm.value) console.log("Same");
    else console.log("Not same");
}