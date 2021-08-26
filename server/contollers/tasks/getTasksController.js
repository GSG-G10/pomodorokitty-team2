const { getTasksQuery } = require('../../database/quieres');

const getTasks = (req, res) => {
  const userId = 1; // get from cookie

  getTasksQuery(userId).then((data) => { res.json(data.rows); }).catch((err) => res.json(err));
};

module.exports = getTasks;
