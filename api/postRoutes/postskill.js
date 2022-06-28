

var express = require('express');
var router = express.Router();
const mysql = require('mysql')



/* GET users listing. */
router.post('/', function(req, res) {
  console.log('skillInfo called '+req.body.skillname);
    const editSkillInfo = {
      skillname: req.body.skillname,
      percent:req.body.percent,
      id:req.body.id,
    };
    console.log(editSkillInfo.id)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'SAKETHRAO',
        password: 'SAKETHRAO',
        database: 'myresume'
      })
    connection.connect()
    if (editSkillInfo.id=="-1"){
      connection.query("INSERT INTO skills (skillname,percent,userId)VALUES('"+editSkillInfo.skillname+"','"+editSkillInfo.percent+"',1)", (err, rows, fields) => {
        if (err) throw err
        console.log('skillInfo added ');
      })
    }else{
      connection.query("UPDATE skills s SET s.skillname ='"+editSkillInfo.skillname+"',s.percent='"+editSkillInfo.percent+"' WHERE s.skillID='"+editSkillInfo.id+"'", (err, rows, fields) => {
        if (err) throw err
        console.log('skillInfo updated ');
      })

    }



connection.end()
  
    console.log(editIntro);
  });

module.exports = router;