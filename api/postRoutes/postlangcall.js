

var express = require('express');
var router = express.Router();
const mysql = require('mysql')



/* GET users listing. */
router.post('/', function(req, res) {
  console.log('languageInfo called '+req.body.language);
    const editLanguageInfo = {
      language: req.body.language,
      id:req.body.id,
    };
    console.log(editLanguageInfo.id)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'SAKETHRAO',
        password: 'SAKETHRAO',
        database: 'myresume'
      })
    connection.connect()
    if (editLanguageInfo.id=="-1"){
      connection.query("INSERT INTO languages (language,userId)VALUES('"+editLanguageInfo.language+"',1)", (err, rows, fields) => {
        if (err) throw err
        console.log('languageInfo added ');
      })
    }else{
      connection.query("UPDATE languages g SET g.language ='"+editLanguageInfo.language+"' WHERE g.languageid='"+editLanguageInfo.id+"'", (err, rows, fields) => {
        if (err) throw err
        console.log('languageInfo updated ');
      })

    }



connection.end()
  
    console.log(editIntro);
  });

module.exports = router;