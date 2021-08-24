const Joi = require("joi");
const { loginQuery, signUpQuery } = require("../database/quieres");
const schema = require("../util/schema");

const login = (req, res) => {
  const { username, password } = req.body;

  // server side validation
  Joi.validateAsync({ username, password }, schema)
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
      res.json("your credentials does not match our records");
    });

  loginQuery({ username, password })
    .then((data) => {
      console.log(data);
    })
    .catch(console.log);
};

const signUp = (req, res) => {
  const { username, email, password, confirmdPassword } = req.body;

  // server side validation

  signUpQuery({
    username,
    email,
    password,
    confirmdPassword,
  })
    .then(console.log)
    .catch(console.log);
};

module.exports = {
  login,
  signUp,
};
