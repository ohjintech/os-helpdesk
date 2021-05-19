// startSession
// isloggedin
// setCookie
// setSSIDcookie

const CORRECT_USER = 'admin';
const CORRECT_PASS = 'fizz';
const COOKIE_KEY = 'token';
const COOKIE_VAL = 'admin';

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {

  // verify if user has ssid cookie
    // if none found, redirect to signup
    // else find the previous session to continue
      // if session is not found redirect to login page
      // otherwise move to next middleware


  if (
    req.body.user === CORRECT_USER &&
    req.body.pass === CORRECT_PASS
  ) res.locals.isLoggedIn = true;

  next();
};



sessionController.startSession = (req, res, next) {
  // create session based on cookie ID


}

/**
* setCookie - set a cookie with a random number
*/
sessionController.setCookie = (req, res, next) => {
  // write code here
  // create cookie and set in as a response 
  res.cookie('codesmith', 'hi', {
    maxAge: 1000000
  });
  // console.log(Math.floor(Math.random()*99));
  // make the secret cookie
  res.cookie('secret', Math.floor(Math.random()*99), {
    httpOnly: true,
    maxAge: 1000000000
  });

  // res.send('have a goo')
  return next();
}


/**
* setSSIDCookie - store the user id in a cookie
*/
sessionController.setSSIDCookie = (req, res, next) => {
  // write code here
  
  // get mongoDB user ID from the local object
  const userId = res.locals.id;

  res.cookie('ssid', userId, {
    maxAge: 1000000000,
    httpOnly: true
  });

  return next();
}







// sessionController.setCookie = (req, res, next) => {
//   res.cookie('token', 'admin');
//   return next();
// };

// sessionController.checkCookie = (req, res, next) => {
//   if (req.cookies.token === 'admin') {
//     return next();
//   } else {
//     return res.json('You must be signed in to view this page');
//   }
// };

module.exports = sessionController;