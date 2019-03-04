var express = require('express');
var app = express();
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/', express.static(__dirname + '/public'));
app.get('/test', function(req, res) {
  res.send('Hello World');
});

app.listen(8080);
