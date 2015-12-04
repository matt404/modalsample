var express = require('express');
//var bodyParser = require('body-parser');
//var methodOverride = require('method-override');

var app = express();

app.get('/', function(req, res) {res.sendfile('index.html');});
app.get('/modal-start.html', function(req, res) {res.sendfile('modal-start.html');});
app.get('/modal-end.html', function(req, res) {res.sendfile('modal-end.html');});
app.get('/styles.css', function(req, res) {res.sendfile('styles.css');});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

//app.use(bodyParser());
//app.use(methodOverride());
//app.use(app.router);
//app.use(function(err, req, res, next){
//  // logic
//});
