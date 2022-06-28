var express = require('express');
var router = express.Router();

const mysql = require('mysql');



/* GET users listing. */
router.post('/', function(req, res) {
    
    const editUserInfo = {
        userid:req.body.userid,
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      mothername:req.body.mothername,
      fathername:req.body.fathername,
      gender:req.body.gender,
      nationality:req.body.nation,
      dob:req.body.dob,
    };
    
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'SAKETHRAO',
        password: 'SAKETHRAO',
        database: 'myresume'
      })
      connection.connect()
      
        connection.query("UPDATE userdata p SET p.firstname ='"+editUserInfo.firstname+"',p.lastname ='"+editUserInfo.lastname+"' WHERE p.userid='"+editUserInfo.userid+"'", (err, rows, fields) => {
          if (err) throw err
          console.log('userdata updated ');
        })
        connection.query("UPDATE user_details p SET p.mothername ='"+editUserInfo.mothername+"',p.fathername ='"+editUserInfo.fathername+"',p.gender ='"+editUserInfo.gender+"',p.dateofbirth ='"+editUserInfo.dob+"',p.nationality ='"+editUserInfo.nationality+"' WHERE p.userId='"+editUserInfo.userid+"'", (err, rows, fields) => {
            if (err) throw err
            console.log('user_details updated ');
          })
  
  
  
  
  connection.end()
    
    });
    module.exports = router;
    