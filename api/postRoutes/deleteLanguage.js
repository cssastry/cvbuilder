var express = require('express');
var router = express.Router();
const mysql = require('mysql')



/* GET users listing. */
router.post('/', function(req, res) {
  console.log('languageInfo called '+req.body.language);
    const editLanguageInfo = {
      id:req.body.lid,
    };
    console.log(editLanguageInfo.id)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'SAKETHRAO',
        password: 'SAKETHRAO',
        database: 'myresume'
      })
    connection.connect()
   
      connection.query("DELETE FROM languages WHERE languageid='"+editLanguageInfo.id+"'", (err, rows, fields) => {
        if (err) throw err
        console.log('languageInfo added ');
     })
connection.end()
  
    console.log('language deleted');
  });

module.exports = router;