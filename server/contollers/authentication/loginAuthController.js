const Joi = require('joi');
const { loginQuery } = require('../../database/quieres');
const { loginSchema } = require('../../util');

const login = (req, res) => {
  const { username, password } = req.body;

  // server side validation
  loginSchema
    .validateAsync({ username, password })
    .then((result) => {
      console.log(result);
      loginQuery({ username, password })
        .then((data) => {
          console.log(data);
        })
        .catch(console.log);
    })

    .catch((err) => {
      console.log(err);
      res.status(401).json({ msg: 'your credentials does not match our records' });
    });
};

module.exports = login;
