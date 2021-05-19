const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');



// endpoints
// /signin ->  validateUser, startSession, setCookie
// /getCohortList
// /signup -> createUser, startSession, setCookie
// /ticket -> getTickets,  
// /getCategories
// /ticket/create -> createTicket, 
// 

router.get('/', ticketController.getTickets, (req, res) => {
  res.status(200).json(res.locals.allTickets);
});

router.post('/create', ticketController.createTicket,(req, res) => {
  res.status(200).json(res.locals.createdTicket);
});

router.put('/:ticketId', ticketController.updateTicket,(req, res) => {
  res.status(200).json(res.locals.updatedTicket);
});

router.delete('/:ticketId',  ticketController.deleteTicket,(req, res) => {
  res.status(200).json(res.locals.deletedTicket);
});




module.exports = router;
