const connection = require('../config/connection');

const taskDone = (taskId) => connection.query('UPDATE tasks SET is_done=true WHERE id=$1', [taskId]);

module.exports = taskDone;
