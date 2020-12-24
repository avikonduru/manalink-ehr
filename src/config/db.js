const dynamoose = require('dynamoose');
const config = require('../config/config');

const connectDB = async () => {
	try {
		await dynamoose.aws.sdk.config.update(config.aws_remote_config);

		console.log('DynamoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
