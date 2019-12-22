const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SECRET_KEY = "78889666";

module.exports = (req, res, next) => {

	if (!req.headers.authorization) {
		return res.status(401).end();
	}
	
	const token = req.headers.authorization.split(' ')[1];
	return jwt.verify(token, SECRET_KEY, (err, decoded) => {

		if (err) { 
			return res.status(401).end(); 
		}

		req.userData = {};
		req.userData.tokenID  = token;
		req.userData.userid = decoded._id;
		req.userData.email = decoded.email;

	  	return next();


	});

};