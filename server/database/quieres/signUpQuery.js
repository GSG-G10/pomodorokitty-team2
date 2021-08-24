const connection = require('../config/connection');

const signUpQuery = (dataUser) => connection.query(
  'INSERT INTO users (username, email, password, birth_date) VALUES ($1, $2, $3, $4)',
  [dataUser.username, dataUser.email, dataUser.password, dataUser.birthDate],
);

module.exports = signUpQuery;
