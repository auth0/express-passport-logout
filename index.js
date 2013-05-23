module.exports = function() {
  return function (req, res) {
    var returnTo = req.query.returnTo;
    if(!req.user) return redir(res, returnTo);

    req.logout();
    delete req.session;
    return redir(res, returnTo);

    function redir(res, returnTo) {
      if (returnTo) {
        return res.redirect(returnTo);
      } else {
        return res.send('bye');
      }
    }
  };
};
  