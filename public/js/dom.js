const form = document.getElementById("form");

const validate = () => {
    const usernameInput = document.getElementById("usernaame-input");
    const password = document.getElementById("password");
    let messageError = [];
    const regExp = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
    if (usernameInput.value === null) {
        messageError.push("you should enter your name");
    }
    if (usernameInput.value.length < 4) {
        messageError.push("you should enter name longer than 4 charcter");
    }
    if (password.value === null) {
        messageError.push("you should enter your password");
    }
    if (!(regExp.test(password.value))) {
        messageError.push(" your pass should be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:");
    }
    return messageError;

}
form.addEventListener("submit", (e) => {
    const messageError = validate();

    if (messageError.length > 0) {

        e.preventDefault();
        console.log(messageError);

    }


})