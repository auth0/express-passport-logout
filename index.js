module.exports = function (req, res, next) {
  var returnTo = req.query.returnTo;
  if(!req.user) return redir(res, returnTo);

  req.logout();
  delete req.session;
  return redir(res, returnTo);

  function redir(res, returnTo) {
    if (returnTo) 
      return res.redirect(returnTo);
    else if (next) {
      return next();
    } else {
      return res.send('bye');
    }
  }
};
  