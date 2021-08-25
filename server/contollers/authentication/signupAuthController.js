const Joi = require('joi');
const { signUpQuery } = require('../../database/quieres');
const { signupSchema } = require('../../util/loginSchema');

const signUp = (req, res) => {
  const {
    username, email, password, confirmdPassword,
  } = req.body;

  // server side validation
  signupSchema
    .validateAsync({
      username,
      password,
      confirmdPassword,
      email,
    })
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
      res.json('your credentials does not match our records');
    });
  signUpQuery({
    username,
    email,
    password,
    confirmdPassword,
  })
    .then(console.log)
    .catch(console.log);
};
module.exports = signUp;
