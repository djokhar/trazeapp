//Set up
let express = require("express");
let router = express.Router();

let deployedModel = require("../schemas/deployedSchema");
const { trim } = require('express-validator').validator;

router.get("/deployed", function(req, res){ 
	deployedModel.find({})
		.then(data=> {
			console.log("Inside of get");
			console.log(data);
			res.send(data);
		})
		.catch(err=> res.send({"error": "There's an issue with the server."}))
});

router.post("/deployed", function(req, res){
	let newStaff = new deployedModel({name: req.body.staff});
	console.log("Inside of post: ");
	console.log(req.body.staff);
	newStaff.save(function(err, doc){
		if(err) res.send({"error": "There was an error adding " + req.body.staff + " to the deployed list, please try again."});
		res.send(doc);
	});
})



router.delete("/deployed/:staff", function(req, res){
	console.log("Inside of delete: ");
	let oldStaff = req.params.staff;
	deployedModel.remove({name: oldStaff}, function(err, doc){
		if(err) res.send({"error": "There was an error removing " + req.params.staff + " to the deployed list, please try again."});
		res.send(doc);
	});
})





module.exports = router;