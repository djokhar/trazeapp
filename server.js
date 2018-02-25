//Set up
let express = require("express");
let app = express();
let logger = require("morgan");
let bodyParser = require("body-parser")
let cors = require("cors");

let database = require("./database");
let staffModel = require("./schema");


app.use(bodyParser.urlencoded({extended: false})); //Parses urlencoded bodies
app.use(bodyParser.json()); //Send JSON responses
app.use(cors());
app.use(logger('dev')); // Log requests to API using morgan



 
// Endpoint for the login function
app.post("/login", function(req, res){
	staffModel.find({"login.username": req.body.username},
		{"login.username":1,"login.password":1,"admin":1})
		.then(data=> {
			if (data.length == 0){
				console.log("Empty");
				res.send({"message": "There's no staff with this username"})
			} else{
				res.send(data);
				console.log(data);
			}
		})
		.catch(err=> res.send({"message": "There's an issue with the server."}))
})


app.listen(8080);
console.log("Trazeapp Started, listening on port 8080");