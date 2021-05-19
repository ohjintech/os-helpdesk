
// getCohorts -> userController
// createUser
// updateuser
// deleteuser
// verifyUser


// creates a User and posts to db
userController.createUser = (req, res, next) => {

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
   const queryStr = 'INSERT INTO "public"."UserTable"("UserID", "username", "password","cohortID", "usertypeID") ' + 
   'VALUES ($1, $2, $3, $4, $5) RETURNING *;';
    
   // create async db.query
   db.query(queryStr, values) 
      // send to res.locals object
      .then(data => {
        console.log('Creating user: ', data);
        res.locals.createdUser = data[0];
        return next();
      })
      // catch error
      .catch(err => next(err));
  };

  // gets all cohorts
userController.getCohorts = (req, res, next) => {

  // make a query string (SQL query)
  const queryStr = 'SELECT * FROM "public"."TicketTable" LIMIT 100'

  // make an async query using db.query and pass in query string
  db.query(queryStr)
  .then(data => { // data from the database
      // console.log('DATA', data.rows);
      // return next
      console.log('Gettin cohorts: ', data)
      res.locals.allCohorts = data.rows;
      return next();
    })
  // calling global eror handler
  .catch(err => next({
      log: 'userController.getCohorts: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals to be an object.',
      message: {err: 'userController.getChorts: ERROR: Check server logs for details'}
  }))
}// Type JavaScript here and click "Run Code" or press Ctrl + s


userController.verifyUser = (req, res, next) => {
  const values = [req.body.user, req.body.pass];
  const statement = 'SELECT * FROM users WHERE username = $1 AND password = $2';
  db.query(statement, values, (err, result) => {
    if (err) return next(err);
    if (result.rows.length) {
      res.locals.user = result.rows[0];
      return next();
    } else {
      return res.json('Invalid username/password!');
    }
  });
};

userController.updateUser = (req, res, next) => {
  const queryStr = '';
  db.query(queryStr, values, (err, result) => {
    if (err) return next(err);
    if (result.rows.length) {
      res.locals.user = result.rows[0];
      return next();
    } else {
      return res.json('Invalid username/password!');
    }
  });
};

userController.deleteUser = (req, res, next) => {
  const queryStr = '';
  db.query(queryStr, values, (err, result) => {
    if (err) return next(err);
    if (result.rows.length) {
      res.locals.user = result.rows[0];
      return next();
    } else {
      return res.json('Invalid username/password!');
    }
  });
};