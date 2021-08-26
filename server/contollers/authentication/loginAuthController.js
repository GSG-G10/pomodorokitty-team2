const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginQuery } = require('../../database/quieres');
const { loginSchema } = require('../../util');

const login = (req, res) => {
  const { username, password } = req.body;

  const { error, value } = loginSchema.validate({ username, password });

  loginQuery({ username })
    .then((data) => {
      console.log(data);
      const dataInf = data.rows[0];
      bcrypt.compare(password, dataInf.password).then((data) => {
        jwt.sign({ id: dataInf.id, email: dataInf.email, username: dataInf.username },
          process.env.SECRET, (err, token) => {
            if (err) {
              res.status(401).json('sth error');
            } else {
              res.cookie('accessToken', token).redirect('/main');
            }
          });
      });
    });
};

module.exports = login;
