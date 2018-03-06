//Set up
let express = require("express");
let router = express.Router();

let staffModel = require("../schemas/staffSchema");


const { trim } = require('express-validator').validator;

router.get("/profile", function(req, res){ 
	//let check = req.params();
	staffModel.find({})
		.then(data=> {
			res.send(data);
		})
		.catch(err=> res.send({"error": "There's an issue with the server."}))
});

router.get("/profile/:user", function(req, res){ 
	//let check = req.params();
	staffModel.find({"login.username": req.param("user")})
		.then(data=> {
			res.send(data);
		})
		.catch(err=> res.send({"error": "There's an issue with the server."}))
});

module.exports = router;