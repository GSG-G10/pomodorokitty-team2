const { taskDoneQuery } = require('../../database/quieres');

const taskDone = (req, res) => {
  const { taskId } = req.params;

  taskDoneQuery(taskId).then(console.log).catch(console.log);
};

module.exports = taskDone;
