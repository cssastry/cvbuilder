var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var userscallRouter = require("./routes/userscall");
var usercalleducationRouter = require("./routes/usercalleducation");
var editIntro = require('./postRoutes/postusercall');
var editSkillInfo = require('./postRoutes/postskill');
var editContactInfo = require('./postRoutes/postcontact');
var editEXPInfo = require('./postRoutes/postexp');
var editEDUCATIONInfo = require('./postRoutes/posteducation');
var editLanguageInfo = require('./postRoutes/postlangcall');
var contactcallRouter = require('./routes/contactcall');
var skillcallRouter = require('./routes/skillcall');
var experiencecallRouter = require('./routes/experiencecall');
var langcallRouter = require('./routes/langcall');
var personalcallRouter = require('./routes/personalcall');
var deleteLanguage = require('./postRoutes/deleteLanguage');
var signupCall = require('./routes/signupCall');
var logincall = require('./routes/logincall');
var UserDetails = require('./routes/userdetails');
var postuserdetails = require('./postRoutes/postUserDetails');
var uploadImage=require('./postRoutes/uploadimage');
var getImage= require('./routes/getuserImage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
  origin:['http://localhost:3000'],
  methods:['GET','POST'],
  credentials: true 
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use("/userscall", userscallRouter);
app.use("/usercalleducation", usercalleducationRouter);
app.use("/contactcall", contactcallRouter);
app.use('/skillcall', skillcallRouter);
app.use('/experiencecall',experiencecallRouter);
app.use('/langcall', langcallRouter);
app.use('/personalcall' , personalcallRouter);
app.use('/editIntro', editIntro);
app.use('/editContactInfo', editContactInfo);
app.use('/editSkillInfo', editSkillInfo);
app.use('/editEXPInfo', editEXPInfo);
app.use('/editLanguageInfo', editLanguageInfo);
app.use('/editEDUCATIONInfo', editEDUCATIONInfo);
app.use('/deleteLanguage',deleteLanguage);
app.use('/signup',signupCall);
app.use('/login',logincall);
app.use('/userdetails', UserDetails);
app.use('/postuserdetails',postuserdetails);
app.use('/uploadImage',uploadImage);
app.use('/getuserImage',getImage);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
