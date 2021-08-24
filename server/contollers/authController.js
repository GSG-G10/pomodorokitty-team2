const { loginQuery, signUpQuery } = require('../database/quieres');

const login = (req, res) => {
  const { username, password } = req.body;

  // server side validation

  loginQuery({ username, password })
    .then((data) => {
      console.log(data);
    })
    .catch(console.log);
};

const signUp = (req, res) => {
  const {
    username, email, password, confirmdPassword,
  } = req.body;

  // server side validation

  signUpQuery({
    username, email, password, confirmdPassword,
  })
    .then(console.log)
    .catch(console.log);
};

module.exports = {
  login,
  signUp,
};
