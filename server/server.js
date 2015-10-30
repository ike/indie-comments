var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var enchilada = require('enchilada');
var app = express();
var root = path.resolve('.');
var ipfsAPI = require('ipfs-api');

// Logging
app.use(function(req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

// Static files
app.use(enchilada(path.join(root, 'client')));
app.use('/', express.static(path.join(root, 'client'), {index: 'index.html'}));

// JSON and Form parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Start the server
app.listen(3000);
console.log('Server listening on http://localhost:3000');
