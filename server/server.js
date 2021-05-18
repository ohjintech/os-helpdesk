const express = require('express');
const path = require('path');
// const authController = require('./controllers/authController');
// const ticketController = require('./controllers/ticketController');
const cookieParser = require('cookie-parser');

const PORT = 3333;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static('client'));


// // can we do a router
// app.get(  '/secret',  authController.verifyCookie,  (req, res) => {
//    if (res.locals.isCookieValid) res.sendFile(path.join(__dirname, '../views/secret.html'));
//     else res.status(200).send('You must be signed in to view this page');
// });

// app.post('/ticket', ticketController.postticket,(req, res) => {
//     res.status(200).json(res.locals.addedticket);
// });

// app.delete('/ticket/:itemText',  ticketController.deleteticket,(req, res) => {
//     res.status(200).json(res.locals.deletedticket);
// });

// app.get('/ticket', ticketController.gettickets, (req, res) => {
//     res.status(200).json(res.locals.alltickets);
// });

// app.post( '/signin', authController.verifyUser, authController.setCookie, (req, res) => {
//     if (res.locals.isLoggedIn) res.redirect('/secret');
//     else res.status(200).send('unsuccessful login attempt');
// });

// app.use((req, res) => res.status(404).send('Error 404'));

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

/**
 * start server
 */
 app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// check if user exists
// validate user

// submit ticket
// get all tickets
// get tickets by category

// submit comment on ticket


module.exports = app;

