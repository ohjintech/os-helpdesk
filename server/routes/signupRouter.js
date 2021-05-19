
const express = require('express');

const sessionController = require('./controllers/sessionController');
const userController = require('./controllers/userController');
const router = express.Router();

// endpoints
// /signin ->  validateUser, startSession, setCookie
// /getCohortList
// /signup -> createUser, startSession, setCookie
// /ticket -> getTickets,  
// /getCategories
// /ticket/create -> createTicket, 
// 

router.get('/', (req, res) => {
    res.status(200).send('index.html', {error: null})
})


router.post('/', userController.verifyUser, sessionController.startSession, sessionController.setSSIDCookie, (req, res) => {
    if (res.locals.isLoggedIn) res.redirect('/secret');
    else res.status(200).send('unsuccessful login attempt');
});


