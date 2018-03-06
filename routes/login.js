//Set up
let express = require("express");
let router = express.Router();

let staffModel = require("../schemas/staffSchema");


const { trim } = require('express-validator').validator;

router.post("/login", function(req, res){ 
	req.body.username = trim(req.body.username);
	staffModel.find({"login.username": req.body.username},
		{"login.username":1,"login.password":1,"admin":1})
		.then(data=> {
			if (data.length == 0){
				res.send({"error": "There's no staff with this username"})
			} else{
				// Get the individual values
				let uname = data[0].login.username.toString();
				let pwd = data[0].login.password.toString();
				let adm = data[0].admin.toString();
				// If user and password is correct
				if((req.body.username == uname) && (req.body.password == pwd)){
					//Login information is correct
					//Check the privilege of who is loggin in
					if(adm == "yes"){
						console.log("inside yes");
						res.send({"username": uname, "password": pwd, "admin": true});
					} 
					else if(adm == "no"){
						console.log("admin is: " + adm);
						res.send({"username": uname, "password": pwd, "admin": false});
					}
				} 
				else if((req.body.username != uname) || (req.body.password != pwd)){
					//Username and/or password is wrong
					res.send({"error": "Your Username and/or Password is wrong."});
				}
			}
		})
		.catch(err=> res.send({"error": "There's an issue with the server."}))
});

module.exports = router;