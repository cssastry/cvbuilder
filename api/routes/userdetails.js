var express = require("express");
var router = express.Router();
const mysql = require('mysql')

router.get("/", function(req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'SAKETHRAO',
    password: 'SAKETHRAO',
    database: 'myresume'
  })
  
  connection.connect()
  
  connection.query('SELECT u.userid,u.firstname,u.lastname,ud.mothername,ud.fathername,ud.nationality,ud.dateofbirth,ud.gender FROM userdata u LEFT JOIN user_details ud on u.userid=ud.userId where u.userid=1', (err, rows, fields) => {
    if (err) throw err
  result= rows;
  res.send(result);
  console.log('user details fetched');
  })
  
  connection.end()
   

});

module.exports = router;