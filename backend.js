const isAuthenticated = (req, res, next) => {
  if (req.session.userId) return next();
  return res.status(401).send("Unauthorized");
};

const isAdmin = (req, res, next) => {
  if (req.session.role === 'admin') return next();
  return res.status(403).send("Forbidden - Admin only");
};

module.exports = { isAuthenticated, isAdmin };
