const { getTasksQuery, insertTaskQuery, taskDoneQuery } = require('../database/quieres');

const getTasks = (req, res) => {
  const userId = 1; // get from cookie

  getTasksQuery(userId).then(console.log).catch(console.log);
};

const insertTask = (req, res) => {
  const userId = 1; // get from cookie

  const { name, duration } = req.body;

  insertTaskQuery({ name, duration, userId }).then(console.log).catch(console.log);
};

const taskDone = (req, res) => {
  const { taskId } = req.params;

  taskDoneQuery(taskId).then(console.log).catch(console.log);
};

module.exports = {
  getTasks,
  insertTask,
  taskDone,
};
