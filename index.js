var express = require('express');
var app = express();
var count = 0;

app.get('/count', function (req, res) {
  res.send('You have visited this page ' + ++count + ' times.');
});  

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
