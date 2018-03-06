//Set up
let express = require("express");
let app = express();
let logger = require("morgan");
let bodyParser = require("body-parser");
let cors = require("cors");

let database = require("./database");
// Endpoint for the login function
app.use(cors());

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

app.use(bodyParser.urlencoded({extended: false})); //Parses urlencoded bodies
app.use(bodyParser.json()); //Send JSON responses

app.use(logger('dev')); // Log requests to API using morgan

// Import all routes
let login = require("./routes/login");
let profile = require("./routes/profile");
let deployed = require("./routes/deployed");

//Use the imported routes
app.use("/", login);
app.use("/", profile);
app.use("/", deployed);
 
 
 
app.listen(8080);
console.log("Trazeapp Started, listening on port 8080");