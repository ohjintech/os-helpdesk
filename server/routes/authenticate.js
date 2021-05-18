
const express = require('express');

const authController = require('./controllers/authController');

const router = express.Router();

// endpoints
// /signin ->  validateUser, startSession, setCookie
// /getCohortList
// /signup -> createUser, startSession, setCookie
// /ticket -> getTickets,  
// /getCategories
// /ticket/create -> createTicket, 
// 

// check if user exists
// validate user -> validateUser

// submit ticket -> createTicket 
// get all tickets -> getTickets
// get tickets by category

// submit comment on ticket

router.get(  '/secret',  authController.verifyCookie,  (req, res) => {
   if (res.locals.isCookieValid) res.sendFile(path.join(__dirname, '../views/secret.html'));
    else res.status(200).send('You must be signed in to view this page');
});

router.post( '/signin', authController.verifyUser, authController.setCookie, (req, res) => {
    if (res.locals.isLoggedIn) res.redirect('/secret');
    else res.status(200).send('unsuccessful login attempt');
});


