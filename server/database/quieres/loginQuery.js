const connection = require('../config/connection');

const loginQuery = (userData) => connection.query(
  'SELECT username, password, id, email FROM users WHERE username=$1',
  [userData.username],
);

module.exports = loginQuery;
