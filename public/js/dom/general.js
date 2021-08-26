const userNamError = getElement('nameerror');
const passwordError = getElement('passworderror');
const formLogin = getElement('form-log-in');
const formSignUp = getElement('form-sign-up');
const usernameInput = getElement('usernaame-input');
const password = getElement('password');
const confirmPassword = getElement('re-password');
const passworConfirmedderror = getElement('passworConfirmedderror');
const messageError = [];
const pas = new RegExp(
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
);
const usernameValidate = () => {
  if (usernameInput.value.length < 4) {
    messageError.push('your username have to be more that 4 character');
    userNamError.textContent = 'your username have to be more that 4 character';
  }
};
const paswordValidate = () => {
  console.log(pas.test(password.value));
  if ((pas.test(password.value)) === false) {
    messageError.push(
      ' your password should be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number and one charchter',
    );
    passwordError.textContent = 'your password should be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number and one charchter';
  }
};

const validateConfirmPassword = () => {
  if (confirmPassword.value !== password.value) {
    messageError.push('your confirm password does not match');
    passworConfirmedderror.textContent = 'your confirm password does not match';
  }
};

function getElement(nameId) {
  return document.getElementById(nameId);
}
