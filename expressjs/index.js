var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
/* returns hello world */
/* Retreived from: https://www.tutorialspoint.com/expressjs/expressjs_hello_world.htm */
