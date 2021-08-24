const connection = require('../config/connection');

const loginQuery = (userData) => connection.query(
  'SELECT username, password FROM users WHERE username=$1 AND password=$2',
  [userData.username, userData.password],
);

module.exports = loginQuery;
