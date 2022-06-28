var express = require('express');
var router = express.Router();
const mysql = require('mysql')



/* GET users listing. */
router.post('/', function(req, res) {
  console.log('ContactInfo called '+req.body.address);
    const editContactInfo = {
      address: req.body.address,
      city:req.body.city,
      state:req.body.state,
      phone: req.body.phone,
      email: req.body.email,
    };
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'SAKETHRAO',
        password: 'SAKETHRAO',
        database: 'myresume'
      })
    connection.connect()

connection.query("UPDATE contact c SET c.address ='"+editContactInfo.address+"',c.city='"+editContactInfo.city+"',c.state='"+editContactInfo.state+"',c.phone='"+editContactInfo.phone+"',c.email='"+editContactInfo.email+"' WHERE c.userId=1", (err, rows, fields) => {
  if (err) throw err
  console.log('ContactInfo updated ');
})

connection.end()
  
    console.log(editIntro);
  });

module.exports = router;