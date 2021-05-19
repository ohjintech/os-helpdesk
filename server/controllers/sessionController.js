// startSession

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



sessionController.startSession = (req, res, next) => {
  // create session based on t :
}