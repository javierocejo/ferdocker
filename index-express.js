var express = require('express');
var app = express();
var count = 1

app.get('/', function (req, res) {
  count = count + 1
  res.send('Hello World!: ' + count);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
