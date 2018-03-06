let mongoose = require("mongoose");
let validator = require("validator");

let deployedSchema = new mongoose.Schema({
		name : {
			type: String,
			unique: true,
			trim: true
		}
})



module.exports = mongoose.model("deployed", deployedSchema)