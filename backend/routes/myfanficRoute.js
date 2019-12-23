const express = require("express");
const router = express.Router();
const MyFanficController = require("../controllers/MyFanficController");

router.get('/:email', function(req, res, next){
	var email=req.params.email;
    console.log("Fanfics load",email)
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

router.post("/removefanfic", function(req, res, next) {
	MyFanficController.removeFanfic(req.body.id, function( err, result	) {
	  if (err) {
		console.log(err);
		res.status(500).json({
		  success: 0,
		  error: err
		});
		return;
	  }
  
	  if (result) {
		  if (err) {
			console.log(err);
		  } else {
			res.status(200).json({
              success: 1,
              data: result
			});
		 }
		console.log("Fanfic remove");
	  } else {
		res.status(400).json({
		  success: 0,
		  data: result
		});
      }
    
    });
})

module.exports = router;