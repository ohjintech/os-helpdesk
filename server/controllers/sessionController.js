const CORRECT_USER = 'admin';
const CORRECT_PASS = 'fizz';
const COOKIE_KEY = 'token';
const COOKIE_VAL = 'admin';

// const authController = {};

const verifyUser = (req, res, next) => {
  if (
    req.body.user === CORRECT_USER &&
    req.body.pass === CORRECT_PASS
  ) res.locals.isLoggedIn = true;

  next();
};

const setCookie = (req, res, next) => {
  res.cookie('token', 'admin');
  next();
};

const verifyCookie = (req, res, next) => {
  if (req.cookies[COOKIE_KEY] === COOKIE_VAL) res.locals.isCookieValid = true;
  next();
};

module.exports = {
  verifyUser,
  setCookie,
  verifyCookie
};