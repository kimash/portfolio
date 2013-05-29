var express = require('express');
var ejs = require('ejs'); //embedded javascript template engine
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello world!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});