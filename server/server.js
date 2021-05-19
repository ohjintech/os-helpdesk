const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// const authRouter = require('./routes/authenticate');
const PORT = 3333;
const app = express();


const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const ticketRouter = require('./routes/ticketRouter');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static('client'));


/**
 * define route handlers
 */
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/ticket', ticketRouter);

app.get('/secret',  sessionController.verifyCookie,  (req, res) => {
  if (res.locals.isCookieValid) res.sendFile(path.join(__dirname, '../views/secret.html'));
   else res.status(200).send('You must be signed in to view this page');
});
// endpoints
// /login ->  validateUser, startSession, setCookie
// ticket/getCohortList
// /signup -> createUser, startSession, setCookie
// /ticket -> getTickets,  
// /ticket/getCategories
// /ticket/create -> createTicket, 
// 

// history:
// /getTicketsByUserID

// everyone: can see tickets
// students: can submit tickets (action buttons disabled)
// fellows: can close tickets (action buttons enabled)
// admins: can close tickets, change usertype, add users, add/delete cohorts


/** Error Handling */

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Error 404'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


/**
 * start server
 */
 app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;

