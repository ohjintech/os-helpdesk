



// creates a User and posts to db
ticketController.createUser = (req, res, next) => {

  // deconstruct request body from front end 
   const {
    UserID,
    username, 
    password,
    cohortID, 
    usertypeID
    } = req.body;
  
   const values = [

    ];
   
   // make query string
   const queryStr = 'INSERT INTO "public"."UserTable"("UserID",
   "username", 
   "password",
   "cohortID", 
   "usertypeID") ' + 
   'VALUES ($1, $2, $3, $4) RETURNING *;';
    
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