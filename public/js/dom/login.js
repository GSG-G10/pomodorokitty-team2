const formLogin = document.getElementById('form-log-in');
const formSignUp = document.getElementById('form-sign-up');
const usernameInput = document.getElementById('usernaame-input');
const password = document.getElementById('password');
const email = document.getElementById('email-input');
const confirmPassword = document.getElementById('re-password');
let messageError = [];

const regExp = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');

const validateUserName = () => {
  if (usernameInput.value === null) {
    messageError.push('you should enter your name');
  } else if (!(typeof usernameInput.value === 'string')) {
    messageError.push('username should be string');
  } else if (usernameInput.value.length <= 4) {
    messageError.push('you should enter name longer than 4 charcter');
  }
};

const validatePassword = () => {
  if (password.value === null) {
    messageError.push('you should enter your password');
  }
  if (!regExp.test(password.value)) {
    messageError.push(
      ' your password should be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number and one charchter:',
    );
  }
};

const validateConfirmPassword = () => {
  if (confirmPassword.value !== password.value) {
    messageError.push('your confirm password does not match');
  }
};

const validateEmail = () => {
  if (email.validity.valueMissing) {
    messageError.push('Please Enter Your Email');
  } else if (email.validity.typeMismatch) {
    messageError.push('Please Enter a valid Email');
  }
};
if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    messageError = [];
    validateUserName();
    validatePassword();

    if (messageError.length > 0) {
      e.preventDefault();
      console.log(messageError);
    }
  });
}

if (formSignUp) {
  formSignUp.addEventListener('submit', (e) => {
    messageError = [];
    validateUserName();
    validatePassword();
    validateEmail();
    validateConfirmPassword();

    if (messageError.length > 0) {
      e.preventDefault();
      console.log(messageError);
    }
  });
}
