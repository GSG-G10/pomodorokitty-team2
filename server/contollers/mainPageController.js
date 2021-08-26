const { join } = require('path');

const mainPage = (req, res) => {
  if (req.cookies.accessToken) {
    res.sendFile(join(__dirname, '..', 'public', 'pamdor.html'));
  } else {
    res.redirect('/login');
  }
};

module.exports = mainPage;
