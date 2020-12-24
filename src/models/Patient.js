const dynamoose = require('dynamoose');

const PatientSchema = new dynamoose.Schema({
	id: String,
	age: {
		type: Number,
		default: 5,
	},
});

module.exports = dynamoose.model('patients', PatientSchema);
