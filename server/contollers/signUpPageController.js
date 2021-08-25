const { join } = require('path');

const signUpPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'sign.html'));
};

module.exports = signUpPage;
