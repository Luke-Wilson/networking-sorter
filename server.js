var express = require('express');

var app = express();
app.listen(3003)


app.get('/', function(req, res) {
  console.log('got something');
  res.send();
})