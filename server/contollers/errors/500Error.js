const { join } = require('path');

const serverError = (err, req, res, next) => {
  console.log(err);
  res.sendFile(join(__dirname, '..', '..', '..', 'public', '500.html'));
};

module.exports = serverError;
