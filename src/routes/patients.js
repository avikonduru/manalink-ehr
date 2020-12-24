const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Model
const Patient = require('../models/Patient');

router.post('/add-patient', async (req, res) => {
	const newPatient = new Patient({
		id: uuidv4(),
		age: 6,
	});

	try {
		await newPatient.save();
		console.log('Save operation was successful.');
		res.send({ 'added patient': newPatient });
	} catch (error) {
		res.status(400).send(error);
	}
});

router.get('/get-patient', async (req, res) => {
	try {
		const myPatient = await Patient.get('0e31107e-e185-4bc5-a442-b3b4d64c42c7');
		res.send({ patient: myPatient });
	} catch (error) {
		res.status(400).send(error);
	}
});

router.put('/update-patient', async (req, res) => {
	try {
		const myPatient = await Patient.get('0e31107e-e185-4bc5-a442-b3b4d64c42c7');
		myPatient.age = 23;
		await myPatient.save();
		res.send({ 'updated patient': myPatient });
	} catch (error) {
		res.status(400).send(error);
	}
});

router.delete('/delete-patient', async (req, res) => {
	const myPatient = await Patient.get('0e31107e-e185-4bc5-a442-b3b4d64c42c7');

	try {
		await myPatient.delete();
		console.log('Delete operation was successful.');
		res.send({ 'deleted patient': myPatient });
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
