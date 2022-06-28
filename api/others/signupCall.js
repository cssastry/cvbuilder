var express =require('express');
var router = express.Router();
const mysql = require('mysql');



router.post('/', function(req, res, next){
    const signupdetails = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
       
    };
    console.log(signupdetails);
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'nikhil',
    password: 'nikhil',
    database: 'details'
  })
  
  connection.connect()

connection.query("INSERT INTO signup (username,firstname,lastname,password) VALUES('"+signupdetails.username+"','"+signupdetails.firstname+"','"+signupdetails.lastname+"','"+signupdetails.password+"')", (err, rows, fields) => {
  if (err) throw err
  console.log('User Signed Up Successfully ');
  res.send('1');
  
})

connection.end()
    
});

module.exports = router;