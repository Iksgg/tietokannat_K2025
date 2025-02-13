var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

//Midleware
app.use(function(req,res,next) {
    console.log('The common middleware called')
    next()
});

//Get
app.get('/test', function(request,response){
    response.send('This is a get test');
    console.log('This is a get test');
});

//Get one parameter
app.get('/test/:name', function(request, response) {
    response.send('Hello ' + request.params.name)
});

//Get two parameter
app.get('/test/:fname/:lname', function(request, response) {
    response.send('Hello ' + request.params.fname +" "+ request.params.lname)
});

//Post
app.post('/', function(request,response) {
    response.send(request.body)
    console.log(request.body)
});