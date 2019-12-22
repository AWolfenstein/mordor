const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/", function(req, res, next) {
	HomeController.getHomeFanfic(function(
	  err,
	  result
	) {
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
              data:result,
			});
         }
      
		console.log("Fanfics loaded");
	  } else {
		res.status(400).json({
		  success: 0,
		  data: result
		});
	  }
    });
  });

  
  module.exports = router;