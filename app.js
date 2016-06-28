/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var fs = require('fs');
// var morgan = require('morgan');
var exec = require('child_process').exec;
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));  //all html in public

console.log("__dirname: "+__dirname);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
