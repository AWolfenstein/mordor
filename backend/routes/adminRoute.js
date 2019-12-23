const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");


router.get('/loadusers', function(req, res, next){


	AdminController.loadAllUsers(function(err, result){
	
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
router.get('/:id/removeuser', function(req, res, next) {
	const id = req.params.id;

	AdminController.removeUser(id, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		res.json({
			success: 1,
			data: result
		});
	});

});
router.get('/:id/banuser', function(req, res, next) {
	const id = req.params.id;

	AdminController.banUser(id, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		res.json({
			success: 1,
			data: result
		});
	});

});
router.get('/:id/unbanuser', function(req, res, next) {
	const id = req.params.id;

	AdminController.unbanUser(id, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		res.json({
			success: 1,
			data: result
		});
	});

});

router.get('/:id/adminuser', function(req, res, next) {
	const id = req.params.id;
   
	AdminController.adminUser(id, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		res.json({
			success: 1,
			data: result
		});
	});

});
router.get('/:id/unadminuser', function(req, res, next) {
	const id = req.params.id;

	AdminController.unadminUser(id, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		res.json({
			success: 1,
			data: result
		});
	});

});




module.exports = router;