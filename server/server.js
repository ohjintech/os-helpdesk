const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// const authRouter = require('./routes/authenticate');
const PORT = 3333;
const app = express();

const ticketRouter = require('./routes/ticket');
const ticketModel = require('./models/db');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static('client'));


/**
 * define route handlers
 */
//  app.use('/auth', authRouter);
app.use('/ticket', ticketRouter);

// endpoints
// /signin ->  validateUser, startSession, setCookie
// /getCohortList
// /signup -> createUser, startSession, setCookie
// /ticket -> getTickets,  
// /getCategories
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

