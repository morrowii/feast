
// require node modules
var mysql = require('mysql');

// create and store mysql connection object
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'feastDB',
  multipleStatements: true
});

// connect to mysql database
con.connect( function(err) {
  if (err) throw err;
  console.log("Connected to database.");
});

module.exports = con;