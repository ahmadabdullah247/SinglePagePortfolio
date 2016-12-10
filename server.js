// require modules ========================================================================================
var express = require('express');
var path = require('path'); // node path module
// initilize variables ========================================================================================
var app = express();
var port = process.env.PORT || 3000;
// app configuration ========================================================================================
app.use("/public", express.static(__dirname + '/public')); // serve static files
app.set('view engine', 'ejs');
// routes ========================================================================================
app.get('/', (req, res) => res.render("index"));

// start listning app  ========================================================================================
app.listen(port); // start application
console.log('server live on port : ', port);