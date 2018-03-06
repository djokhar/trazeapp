//Set up
let express = require("express");
let app = express();
let logger = require("morgan");
let bodyParser = require("body-parser");
let cors = require("cors");

let database = require("./database");
let staffModel = require("./schema");


const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const { trim } = require('express-validator').validator;

app.use(bodyParser.urlencoded({extended: false})); //Parses urlencoded bodies
app.use(bodyParser.json()); //Send JSON responses
app.use(cors());
app.use(logger('dev')); // Log requests to API using morgan



 
// Endpoint for the login function
const routes = require("./routes");
app.use("/login", routes);


app.listen(8080);
console.log("Trazeapp Started, listening on port 8080");