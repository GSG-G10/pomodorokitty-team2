const { join } = require('path');

const NotFound = (req, res, next) => {
  res.send(join(__dirname, '..', '..', 'public', '404.html'));
};

const ServerError = (err, req, res, next) => {
  res.send(join(__dirname, '..', '..', 'public', '500.html'));
};

module.exports = {
  NotFound,
  ServerError,
};
