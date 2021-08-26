const logoutPage = (req, res) => {
  req.removeCookie('accessToken');
  res.redirect('/');
};

module.exports = logoutPage;
