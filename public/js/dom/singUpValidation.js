formSignUp.addEventListener('submit', (e) => {
    usernameValidate();
    paswordValidate();
    validateConfirmPassword();
    if (messageError.length > 0) {
        e.preventDefault();
    }
});