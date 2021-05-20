const db = require("../models/db");

const ticketController = {};

// x createTicket
// x getTicket
// x updateTicket
// x deleteTicket
// x getCategories -> ticketController
// x getCohortList -> userController
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

/** CREATE TICKET */

// creates a ticket and posts to db
ticketController.createTicket = (req, res, next) => {
  // deconstruct request body from front end
  const {
    UserID,
    description, //categoryID
    ProblemStatement,
    ExpectedBehavior,
    TriedSolution,
    SuspectedIssue,
    ZoomLink,
  } = req.body;

  let values = [];

  // get Category ID
  const getID = `SELECT "CategoryID" from "public"."Categories" WHERE description = '${description}'`;
  // make query string
  const queryStr =
    'INSERT INTO "public"."TicketTable" ("UserID", "CategoryID", "ProblemStatement", "ExpectedBehavior", "TriedSolution", "SuspectedIssue", "ZoomLink", "image_links")' +
    " VALUES($1, $2, $3, $4, $5, $6, $7, $8 )";

  db.query(getID)
    .then((data) => {
      // console.log("data:", data.rows);
      // console.log("data:", typeof data.rows);
      const { CategoryID } = data.rows[0];
      // console.log("CategoryID:", CategoryID);
      return CategoryID;
    })
    .then((id) => {
      values = [
        UserID,
        id,
        ProblemStatement,
        ExpectedBehavior,
        TriedSolution,
        SuspectedIssue,
        ZoomLink,
        "",
      ];

      db.query(queryStr, values)
        // send to res.locals object
        .then((data) => {
          // console.log("Creating ticket: ", id);
          res.locals.createdTicket = data[0];
          return next();
        });
    });
};

/** READ TICKET FCNS */

// gets basic information about a ticket to show on the dashboard
// ticketController.getTicketDashInfo = (req, res, next) => {
// make a query string (SQL query)

// problem statement
// category <--FK. needs some type of JOIN
// created by <-- FK. needs some type of JOIN
// created at
// cohort <-- FK. needs some type of JOIN
// reviewer <-- FK. needs some type of JOIN
// status

// gets detailed information about a ticket to show on the modal
ticketController.getTicketInfo = (req, res, next) => {
  const queryStr =
    'SELECT CAT.description, CO."name" as cohort, U.username, T.*' +
    'FROM "public"."TicketTable" T ' +
    'INNER JOIN "public"."Categories" CAT ON CAT."CategoryID" = T."CategoryID"' +
    'INNER JOIN "public"."UserTable" U ON U."UserID" = T."UserID"' +
    'INNER JOIN "public"."CohortTable" CO ON CO."CohortID" = U."cohortID"';

  // make an async query using db.query and pass in query string
  db.query(queryStr)
    .then((data) => {
      // console.log("Ticket Detail: ", data);
      res.locals.ticketInfo = data.rows;
      return next();
    })
    // calling global eror handler
    .catch((err) =>
      next({
        log: "ticketController.getTickets: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals to be an object.",
        message: {
          err: "ticketController.getTickets: ERROR: Check server logs for details",
        },
      })
    );
};

/** UPDATE TICKET */

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
    ticketId,
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
    ticketId,
  ];

  // make query string
  const queryStr =
    'UPDATE "public"."TicketTable" ' +
    'SET ("problemStatement", "expectedBehavior", "triedSolution", "suspectedIssue", "zoomLink", "status", "responseText", "responderId", "resolvedAt", "imageLinks") = ' +
    "($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) " +
    'WHERE "TicketID" = $14;';

  // create async db.query
  db.query(queryStr, values)
    // send to res.locals object
    .then((data) => {
      console.log("Updating ticket: ", data);
      res.locals.updatedTicket = data[0];
      return next();
    })
    // catch error
    .catch((err) => next(err));
};

/** DELETE TICKET */

// have the option to delete ticket in case something inappropriate gets posted/duplicates get posted
ticketController.deleteTicket = (req, res, next) => {
<<<<<<< HEAD
  const { ticketId } = req.body;
  const queryStr =
    'DELETE FROM "public"."TicketTable" WHERE "TicketID" = $1 RETURNING *;';
=======
  const ticketId = [req.params.ticketId]; 
  const queryStr = `DELETE FROM "public"."TicketTable" WHERE "TicketID" = $1`;
>>>>>>> 7ba882eb74461abe1ed454727f7236af731ef7e4

  // create async db.query
  db.query(queryStr, ticketId)
    // send to res.locals object
    .then((data) => {
      console.log("Creating ticket: ", data);
      res.locals.deletedticket = data[0];
      return next();
    })
    // catch error
    .catch((err) =>
      next({
        log: "ticketController.deleteTicket: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals to be an object.",
        message: {
          err: "ticketController.deleteTicket: ERROR: Check server logs for details",
        },
      })
    );
};

// gets all ticket categories
ticketController.getCategories = (req, res, next) => {
  const queryStr = 'SELECT * FROM "public"."Categories"';
  // make an async query using db.query and pass in query string
  db.query(queryStr)
    .then((data) => {
      res.locals.categories = data.rows;
      return next();
    })
    // calling global eror handler
    .catch((err) =>
      next({
        log: "ticketController.getCategories: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals to be an object.",
        message: {
          err: "ticketController.getCategories: ERROR: Check server logs for details",
        },
      })
    );
};

module.exports = ticketController;
