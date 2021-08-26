const { insertTaskQuery } = require('../../database/quieres');

const insertTask = (req, res) => {
  const userId = 1; // get from cookie

  const { name, duration } = req.body;

  insertTaskQuery({ name, duration, userId })
    .then(console.log)
    .catch(console.log);
};

module.exports = insertTask;
