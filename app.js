var express = require('express');
var app = express();

var nunjucks  = require('nunjucks');

var newsRoute = require('./routes/newsRoute');

nunjucks.configure('./view/', {
  autoescape: true,
  express   : app
});

app.engine('html',nunjucks.render);
app.set('view engine','html');

app.use('/static',express.static('public'))

app.use('/',newsRoute);

var server = app.listen('8080',function(){
	console.log("server started at port 8080");
})