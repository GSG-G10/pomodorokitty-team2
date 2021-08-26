const jwt = require('jsonwebtoken');
const { getTasksQuery } = require('../../database/quieres');

const getTasks = (req, res) => {
  const token = (req.cookies.accessToken);
  const decoded = jwt.decode(token);
  getTasksQuery(decoded.id).then((data) => { res.json(data.rows); }).catch((err) => res.json(err));
};

module.exports = getTasks;
