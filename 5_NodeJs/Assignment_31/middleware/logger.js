const log = (req, res, next) => {
  console.log("Login Middleware");
  next();
};
module.exports = log;
