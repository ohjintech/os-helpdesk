const express = require('express');
const router = express.Router();
const ticketController = require('./controllers/ticketController');

router.get('/', ticketController.gettickets, (req, res) => {
  res.status(200).json(res.locals.alltickets);
});

router.post('/', ticketController.postticket,(req, res) => {
  res.status(200).json(res.locals.addedticket);
});

router.delete('/:itemText',  ticketController.deleteticket,(req, res) => {
  res.status(200).json(res.locals.deletedticket);
});

