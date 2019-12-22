const express = require("express");
const router = express.Router();
const MyFanficController = require("../controllers/MyFanficController");

router.get('/:email', function(req, res, next){
	var email= req.params.email;

	MyFanficController.loadAllFanfics(email, function(err, result){
	
		if(err){
			console.log(err);
			res.status(500).json({
				success: 0,
				data: result
			});
			return;
		}

		res.status(200).json({
			success: 1,
			data: result
		});
	});
});


module.exports = router;