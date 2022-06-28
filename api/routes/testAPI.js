
var express = require("express");
var router = express.Router();
const mysql = require('mysql')
var result;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'SAKETHRAO',
  password: 'SAKETHRAO',
  database: 'saketh'
})

connection.connect()

connection.query('SELECT m.Education,m.`Year of passing` as yop,m.`Name of Institute` as noi,grade FROM myeducation m', (err, rows, fields) => {
  if (err) throw err
result= rows;
})

connection.end()
router.get("/", function(req, res, next) {
    res.send(result);

});

module.exports = router;