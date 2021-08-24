<<<<<<< HEAD
const Joi = require('joi');
const { loginQuery, signUpQuery } = require('../database/quieres');
const { loginSchema, signupSchema } = require('../util/schema');
=======
const Joi = require("joi");
const { loginQuery, signUpQuery } = require("../database/quieres");
const schema = require("../util/schema");
>>>>>>> 353ab04e590e13e20b5fb4601b1604380f3b888e

const login = (req, res) => {
  const { username, password } = req.body;

  // server side validation
<<<<<<< HEAD
  loginSchema.validateAsync({ username, password })
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
      res.json('your credentials does not match our records');
=======
  Joi.validateAsync({ username, password }, schema)
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
      res.json("your credentials does not match our records");
>>>>>>> 353ab04e590e13e20b5fb4601b1604380f3b888e
    });

  loginQuery({ username, password })
    .then((data) => {
      console.log(data);
    })
    .catch(console.log);
};

const signUp = (req, res) => {
<<<<<<< HEAD
  const {
    username, email, password, confirmdPassword,
  } = req.body;

  // server side validation
  signupSchema.validateAsync(
    {
      username, password, confirmdPassword, email,
    }
  )
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
      res.json('your credentials does not match our records');
    });
=======
  const { username, email, password, confirmdPassword } = req.body;

  // server side validation

>>>>>>> 353ab04e590e13e20b5fb4601b1604380f3b888e
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
