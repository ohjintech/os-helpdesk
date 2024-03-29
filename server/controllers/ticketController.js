const db = require('../models/db');

const ticketController = {};


// x createTicket
// x getTicket
// x updateTicket
// x deleteTicket
// getCategories -> ticketController
// getCohortList -> userController
// createUser
// updateuser
// deleteuser
// validateUser
// startSession
// setCookie


// endpoints
// /signin ->  validateUser, startSession, setCookie
// /getCohortList
// /signup -> createUser, startSession, setCookie
// /ticket -> getTickets,  
// /getCategories
// /ticket/create -> createTicket, 
// 




// creates a ticket and posts to db
ticketController.createTicket = (req, res, next) => {

// deconstruct request body from front end 
 const {
   userId, 
   categoryId, 
   problemStatement, 
   expectedBehavior, 
   triedSolution, 
   suspectedIssue, 
   zoomLink, 
   status, 
   responseText, 
   responderId, 
   createdAt, 
   resolvedAt, 
   imageLinks
  } = req.body;

 const values = [
  userId, 
  categoryId, 
  problemStatement, 
  expectedBehavior,
  triedSolution, 
  suspectedIssue, 
  zoomLink, 
  status,
  responseText, 
  responderId,
  createdAt,
  resolvedAt,
  imageLinks
  ];
 
 // make query string
 const queryStr = 'INSERT INTO "public"."TicketTable"("UserID","CategoryID", "ProblemStatement",'+ 
 '"ExpectedBehavior", "TriedSolution", "SuspectedIssue", "ZoomLink", "status", "response",' + 
 '"responderID", "created_at", "resolved_at", "image_links") ' + 
 'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *;';
  
 // create async db.query
 db.query(queryStr, values) 
    // send to res.locals object
    .then(data => {
      console.log('Creating ticket: ', data);
      res.locals.createdTicket = data[0];
      return next();
    })
    // catch error
    .catch(err => next(err));
};


// gets all tickets and loads them as an array of objects into res.locals object
ticketController.getTickets = (req, res, next) => {
  // make a query string (SQL query)
  const queryStr = 'SELECT * FROM "public"."TicketTable" LIMIT 100'

  // make an async query using db.query and pass in query string
  db.query(queryStr)
  .then(data => { // data from the database
      // console.log('DATA', data.rows);
      // return next
      console.log('retrieved data: ', data)
      res.locals.allTickets = data.rows;
      return next();
    })
  // calling global eror handler
  .catch(err => next({
      log: 'ticketController.getTickets: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals to be an object.',
      message: {err: 'ticketController.getTickets: ERROR: Check server logs for details'}
  }))
};



// allow residents to update text as well as fellows updating the resolved status
ticketController.updateTicket = (req, res, next) => {
  // deconstruct request body from front end 
 const {
  userId, 
  categoryId, 
  problemStatement, 
  expectedBehavior, 
  triedSolution, 
  suspectedIssue, 
  zoomLink, 
  status, 
  responseText, 
  responderId, 
  resolvedAt, 
  imageLinks,
  ticketId
 } = req.body;

const values = [
 userId, 
 categoryId, 
 problemStatement, 
 expectedBehavior,
 triedSolution, 
 suspectedIssue, 
 zoomLink, 
 status,
 responseText, 
 responderId,
 resolvedAt,
 imageLinks,
 ticketId
 ];

// make query string
const queryStr = 'UPDATE "public"."TicketTable" ' + 
'SET ("problemStatement", "expectedBehavior", "triedSolution", "suspectedIssue", "zoomLink", "status", "responseText", "responderId", "resolvedAt", "imageLinks") = ' +
'($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) '+
'WHERE "TicketID" = $14;';
 
// create async db.query
db.query(queryStr, values) 
   // send to res.locals object
   .then(data => {
     console.log('Updating ticket: ', data);
     res.locals.updatedTicket = data[0];
     return next();
   })
   // catch error
   .catch(err => next(err));
}

// have the option to delete ticket in case something inappropriate gets posted/duplicates get posted
ticketController.deleteTicket = (req, res, next) => {

const {ticketId} = req.body
const queryStr = 'DELETE FROM "public"."TicketTable" WHERE "TicketID" = $1;';  

// create async db.query
db.query(queryStr, ticketId) 
// send to res.locals object
.then(data => {
  console.log('Creating ticket: ', data);
  res.locals.deletedticket = data[0];
  return next();
})
// catch error
.catch(err => next(err));
}
 

ticketController.getCategories = (req, res, next) => {

    // make a query string (SQL query)
    const queryStr = 'SELECT * FROM "public"."TicketTable" LIMIT 100'

    // make an async query using db.query and pass in query string
    db.query(queryStr)
    .then(data => { // data from the database
        // console.log('DATA', data.rows);
        // return next
        console.log('retrieved data: ', data)
        res.locals.allTickets = data.rows;
        return next();
      })
    // calling global eror handler
    .catch(err => next({
        log: 'ticketController.getTickets: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals to be an object.',
        message: {err: 'ticketController.getTickets: ERROR: Check server logs for details'}
    }))


}


module.exports = ticketController;