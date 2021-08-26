const connection = require('../config/connection');

const signUpQuery = (dataUser) => connection.query(
  'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING username, email, id',
  [dataUser.username, dataUser.email, dataUser.password],
);

module.exports = signUpQuery;
