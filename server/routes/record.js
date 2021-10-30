const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route('/pickle/get').get((req, res) => {
	let db_connect = dbo.getDb();
	db_connect
		.collection('records')
		.find({})
		.toArray((err, result) => {
			if (err) throw err;
			res.json(result.sort((a, b) => a.id - b.id));
		});
});

// This section will help you get a single record by id
recordRoutes.route('/pickle/get/:id').get((req, res) => {
	let db_connect = dbo.getDb();
	let myquery = { id: Number(req.params.id) };
	db_connect.collection('records').findOne(myquery, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
});

// This section will help you create a new record.
recordRoutes.route('/pickle/add').post((req, response) => {
	let db_connect = dbo.getDb();
	let myobj = {
		id: req.body.id,
		name: req.body.name,
		facts: req.body.facts,
		description: req.body.description,
		filePath: req.body.filePath,
	};
	db_connect.collection('records').insertOne(myobj, (err, res) => {
		if (err) throw err;
		response.json(res);
	});
});

// This section will help you update a record by id.
recordRoutes.route('/pickle/update/:id').post((req, response) => {
	let db_connect = dbo.getDb();
	let myquery = { id: Number(req.params.id) };
	let newvalues = {
		$set: {
			name: req.body.name,
			facts: req.body.facts,
			description: req.body.description,
			filePath: req.body.filePath,
		},
	};
	db_connect.collection('records').updateOne(myquery, newvalues, (err, res) => {
		if (err) throw err;
		console.log('1 document updated');
		response.json(res);
	});
});

// This section will help you delete a record
recordRoutes.route('/pickle/delete/:id').delete((req, response) => {
	let db_connect = dbo.getDb();
	let myquery = { id: Number(req.params.id) };
	db_connect.collection('records').deleteOne(myquery, (err, obj) => {
		if (err) throw err;
		response.status(200).send('Record deleted successfully!');
	});
});

module.exports = recordRoutes;
