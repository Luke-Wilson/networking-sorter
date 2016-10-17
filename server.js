var express = require('express');
var db = require('./app/config');

var app = express();
app.listen(3003)

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  console.log('got something');
  res.send();
})