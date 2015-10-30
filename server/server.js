var express = require('express');
var path = require('path');
var enchilada = require('enchilada');
var app = express();
var root = path.resolve('.');

// Logging
app.use(function(req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

// Static files
app.use(enchilada(path.join(root, 'client')));
app.use('/', express.static(path.join(root, 'client'), {index: 'index.html'}));

// Start the server
app.listen(3000);
console.log('Server listening on http://localhost:3000');
