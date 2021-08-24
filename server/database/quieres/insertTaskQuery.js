const connection = require('../config/connection');

const insertTaskQuery = (taskData) => {
  connection.query(
    'INSERT INTO tasks (name, duration, user_id) VALUES ($1, $2, $3)',
    [taskData.name, taskData.duration, taskData.userId],
  );
};

module.exports = insertTaskQuery;
