var express = require('express');
var router = express.Router();
const mysql = require('mysql')



/* GET users listing. */
router.post('/', function(req, res) {
  console.log('EXPInfo called '+req.body.title);
    const editEXPInfo = {
      title:req.body.title,
      company:req.body.company,
      from:req.body.from,
      to:req.body.to,
      description:req.body.description,
    };
    console.log(editEXPInfo.id)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'SAKETHRAO',
        password: 'SAKETHRAO',
        database: 'myresume'
      })
      connection.connect()
      if (editEDUCATIONInfo.id=="-1"){
        connection.query("INSERT INTO experience (title,company,from,to,description,userId)VALUES('"+editEXPInfo.title+"','"+editEXPInfo.company+"','"+editEXPInfo.from+"','"+editEXPInfo.to+"','"+editEXPInfo.description+"',1)", (err, rows, fields) => {
          if (err) throw err
          console.log('expInfo added ');
        })
      }else{
        connection.query("UPDATE experience p SET p.title ='"+editEXPInfo.title+"',p.company ='"+editEXPInfo.company+"',p.from ='"+editEXPInfo.from+"',p.to ='"+editEXPInfo.to+"',p.description ='"+editEXPInfo.description+"' WHERE p.id='"+editEXPInfo.id+"'", (err, rows, fields) => {
          if (err) throw err
          console.log('expInfo updated ');
        })
  
      }
  
  
  
  connection.end()
    
      console.log(editIntro);
    });
    module.exports = router;
    