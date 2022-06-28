var express = require('express');
var router = express.Router();
const mysql = require('mysql')



/* GET users listing. */
router.post('/', function(req, res) {
  console.log('EudInfo called '+req.body.degree);
    const editEDUCATIONInfo = {
      degree:req.body.degree,
      branch:req.body.branch,
      institute:req.body.institute,
      yoj:req.body.yoj,
      yop:req.body.yop,
      grade:req.body.grade,
      id:req.body.id
    };
    console.log(editEDUCATIONInfo.id)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'SAKETHRAO',
        password: 'SAKETHRAO',
        database: 'myresume'
      })
      connection.connect()
      if (editEDUCATIONInfo.id=="-1"){
        connection.query("INSERT INTO education (degree,branch,institute,yoj,yop,grade,userId)VALUES('"+editEDUCATIONInfo.degree+"','"+editEDUCATIONInfo.branch+"','"+editEDUCATIONInfo.institute+"','"+editEDUCATIONInfo.yoj+"','"+editEDUCATIONInfo.yop+"','"+editEDUCATIONInfo.grade+"',1)", (err, rows, fields) => {
          if (err) throw err
          console.log('eudInfo added ');
        })
      }else{
        connection.query("UPDATE education o SET o.degree ='"+editEDUCATIONInfo.degree+"',o.branch ='"+editEDUCATIONInfo.branch+"',o.institute ='"+editEDUCATIONInfo.institute+"',o.yoj ='"+editEDUCATIONInfo.yoj+"',o.yop = '"+editEDUCATIONInfo.yop+"',o.grade ='"+editEDUCATIONInfo.grade+"' WHERE o.id='"+editEDUCATIONInfo.id+"'", (err, rows, fields) => {
          if (err) throw err
          console.log('eudInfo updated ');
        })
  
      }
  
  
  
  connection.end()
    
      console.log(editIntro);
    });
    module.exports = router;