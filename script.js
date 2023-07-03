console.log("Start");

const submitButton = document.querySelector("#submit-button");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordMatchMessage = document.querySelector("#password-match");

passwordConfirm.addEventListener("input", checkPassword);
submitButton.addEventListener("click", checkPassword);

function checkPassword(e) {
    if(password.value === passwordConfirm.value) {    
        password.classList.add("valid-password");
        passwordConfirm.classList.add("valid-password");

        passwordMatchMessage.style.opacity = 0;

        return true;
    } else {
        password.classList.remove("valid-password");
        passwordConfirm.classList.remove("valid-password");
        
        password.classList.add("invalid-password");
        passwordConfirm.classList.add("invalid-password");

        passwordMatchMessage.style.opacity = 1;

        e.preventDefault();
        return false;
    }
}