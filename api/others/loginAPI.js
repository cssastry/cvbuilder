var express =require('express');
var router = express.Router();
const mysql = require('mysql');
var result;


router.post('/', function(req, res, next){
    const logindetails = {
        username: req.body.username,
        password: req.body.password,
       
    };
    console.log(logindetails);
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'SAKETH',
    password: 'Saketh@2002',
    database: 'resume'
  })
  
  connection.connect()

connection.query("SELECT * FROM userdata WHERE username='"+logindetails.username+"' AND password='"+logindetails.password+"'", (err, rows, fields) => {
  if (err) throw err
    result=rows[0];
    console.log(result);
    if(result!=null) {
        res.send(result);
        console.log('login successfull');
    }else{
        res.send('0');
        console.log('No user');
    }
    
})

connection.end()
    
});

module.exports = router;