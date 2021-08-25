const { getTasksQuery } = require('../../database/quieres');

const getTasks = (req, res) => {
  const userId = 1; // get from cookie

  getTasksQuery(userId).then(console.log).catch(console.log);
};

module.exports = getTasks;
