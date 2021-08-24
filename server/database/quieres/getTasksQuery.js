const connection = require('../config/connection');

const getTasks = (userId) => connection.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);

module.exports = getTasks;
