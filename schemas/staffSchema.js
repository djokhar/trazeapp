let mongoose = require("mongoose");
let validator = require("validator");

let staffsSchema = new mongoose.Schema({
	 name : {
                firstName : String,
                lastName : String
        },
        login : {
                username: String,
                password : String
        },
        sex : String,
		address: String,
		status: String,
        coverageArea : String,
        email : String,
        admin : String,
		position: String,
		location : {
			latitude: Number,
			longitude: Number
		}
})



module.exports = mongoose.model("workers", staffsSchema) 