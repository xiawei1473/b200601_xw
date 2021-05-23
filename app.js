var express = require('express');
var path = require('path'); 
var createError =require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs =require('ejs');
var fs =require('fs');
var session=require('express-session');


var dengluRouter =require('./routes/denglu');
var registerRouter =require('./routes/register');
var petRouter=require('./routes/pet')
var petinfoRouter=require('./routes/petinfo');
var app = express();

app.set('views',path.join(__dirname,'views'));
app.engine(".html",ejs.__express);
app.set('view engine','html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123"));
app.use(session({
    secret:"123",
    cookie:{maxAge:60000}
}))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/denglu',dengluRouter);
app.use('/register',registerRouter);
app.use('/pet',petRouter);
app.use('/petinfo',petinfoRouter);
module.exports = app;
