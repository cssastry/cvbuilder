var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var formidable = require('formidable');
var fs = require('fs');
var path =require('path');
var {join}=require('path');



/* GET users listing. */
router.post('/', function(req, res) {
    const isFileValid = (file) => {
        const type = file.mimetype.split("/").pop();
        const validTypes = ["jpg", "jpeg", "png", "pdf"];
        if (validTypes.indexOf(type) === -1) {
          return false;
        }
        return true;
      };
    var form = new formidable.IncomingForm();
    const uploadFolder = path.join("C:/Users/ameet/OneDrive/Desktop/temp/uploaded_files");
    form.uploadDir = uploadFolder;
    var newpath;
    var userid;
    form.parse(req, async (err, fields, files) => {
        userid=fields.userid
        const file = files.image;
        const fileName = encodeURIComponent(file.originalFilename);
        const isValid = isFileValid(file);
        if (!isValid) {
            // throes error if file isn't valid
            return res.status(400).json({
              status: "Fail",
              message: "The file type is not a valid type",
            });
          }
        try {
            // renames the file in the directory
                     fs.renameSync(file.filepath, join(uploadFolder, fileName));
                     newpath=join(uploadFolder, fileName);
                     newpath = newpath.split("\\").join('/');
                     console.log(newpath);
                   } catch (error) {
                      console.log(error);
                    }
                    const connection = mysql.createConnection({
                        host: 'localhost',
                        user: 'SAKETHRAO',
                        password: 'SAKETHRAO',
                        database: 'myresume'
                      })
                      connection.connect()
                      
                       
                        connection.query("UPDATE user_details p SET p.imagepath ='"+newpath+"' WHERE p.userId='"+userid+"'", (err, rows, fields) => {
                            if (err) throw err
                            console.log('user_details_image updated ');
                          })
                  
                  
                  
                  
                  connection.end()  ;
                    
                              
        if (err) {
          console.log("Error parsing the files");
          return res.status(400).json({
            status: "Fail",
            message: "There was an error parsing the files",
            error: err,
          });
        }
      });
       

    
    });
    
    module.exports = router;
    