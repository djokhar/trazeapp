// Set up

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

//Configuration
mongoose.connect("mongodb://localhost/trazeapp");

app.use(bodyParser.urlencoded({extended: false})); //Parses urlencoded bodies
app.use(bodyParser.json()); //Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());

 


let database = require("./database");
let staffModel = require("./schema");



app.get("/staffs", function(req, res){
		res.send({"hello" :"Trying to get Users..."});
});

app.listen(8080);
console.log("Trazeapp Started, listening on port 8080");