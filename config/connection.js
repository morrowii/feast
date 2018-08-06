
// require node modules
var mysql = require('mysql');

// create and store mysql connection object
var con = mysql.createConnection({
  host: "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  username: "xc6mgk849k6841hy",
  password: "dphm7576h314vs03",
  port: 3306,
  database: "bopi8w9wr7bkhbph",
  multipleStatements: true
});

// connect to mysql database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database.");
});

module.exports = con;