var express = require('express');
var router = express.Router();
const mysql = require('mysql')



/* GET users listing. */
router.post('/', function(req, res) {
    const editIntro = {
      title: req.body.title,
      subtitle: req.body.sub,
      content: req.body.cont,
    };
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'SAKETHRAO',
        password: 'SAKETHRAO',
        database: 'myresume'
      })
    connection.connect()

connection.query("UPDATE about d SET title ='"+editIntro.title+"',subtitle='"+editIntro.subtitle+"',content='"+editIntro.content+"' WHERE d.userId=1", (err, rows, fields) => {
  if (err) throw err
  console.log('intro updated ')
})

connection.end()
  
    console.log(editIntro);
  });

module.exports = router;