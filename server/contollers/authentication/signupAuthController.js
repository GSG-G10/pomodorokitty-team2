const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { signUpQuery } = require('../../database/quieres');
const { signupSchema } = require('../../util');

const signUp = (req, res) => {
  const {
    username, email, password, confirmdPassword,
  } = req.body;

  const { error, value } = signupSchema.validate({
    username,
    password,
    confirmdPassword,
    email,
  });

  bcrypt.hash(password, 10).then((hash) => {
    signUpQuery({ username, email, password: hash }).then((data) => {
      jwt.sign(data.rows[0], process.env.SECRET, (err, token) => {
        if (err) {
          res.status(401).json('sth error');
        } else {
          res.cookie('accessToken', token).redirect('/main');
        }
      });
    });
  });
};
module.exports = signUp;
