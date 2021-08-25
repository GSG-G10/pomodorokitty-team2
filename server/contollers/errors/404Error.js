const { join } = require('path');

const notFound = (req, res, next) => {
  res.send(join(__dirname, '..', '..', '..', 'public', '404.html'));
};

module.exports = notFound;
