var express = require('express');

// Constants
var DEFAULT_PORT = 3000;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hi\n');
});

app.get('/test', function (req, res) {
  res.send('Awesome!\n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
