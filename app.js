var express = require('express'),
		app = express()
		morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('welcome /');
});

app.get('/news', function (req, res) {
  res.send('welcome news');
});

app.listen(3000);