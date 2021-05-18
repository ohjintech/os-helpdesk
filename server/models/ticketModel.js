const { Pool } = require('pg');

const PG_URI = 'postgres://glmjvkpi:k_DVCGETzYBg_xn_iybWq61JkJzj-fo6@kashin.db.elephantsql.com/glmjvkpi'

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};