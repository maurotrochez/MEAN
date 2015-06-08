var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

process.env.NODE_ENV = 'development';
console.log(process.env.NODE_ENV);

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();

app.listen(server_port, server_ip_address);

module.exports = app;

console.log('Server running at localhost:3000');
