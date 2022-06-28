var express =require('express');
var router = express.Router();
const mysql = require('mysql');
var fs = require('fs');



router.post('/', function(req, res, next){
    const logindetails = {
        id: req.body.id,
       
    };
    function base64_encode(file) {
      return "data:image/png;base64,"+fs.readFileSync(file, 'base64');
    }
    console.log(logindetails);
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'SAKETHRAO',
    password: 'SAKETHRAO',
    database: 'myresume'
  })
  
  connection.connect()

connection.query("SELECT imagepath FROM user_details WHERE userId='"+logindetails.id+"'", (err, rows, fields) => {
  if (err) throw err
    var result=rows[0].imagepath;
    var base64str=base64_encode(result);
    console.log(result);
        res.send(base64str);
        console.log('image sent successfully');
  
        
   
    
})

connection.end()
    
});

module.exports = router;