const express = require("express");
const router = express.Router();
const ReadController = require("../controllers/ReadController");
const CommentController = require("../controllers/CommentController");
router.post("/:id", function(req, res, next) {
	ReadController.getFanfic(req.body.id,function(
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
      
		console.log("Fanfic loaded");
	  } else {
		res.status(400).json({
		  success: 0,
		  data: result
		});
	  }
    });
  });

  router.post('/:id/newcomment', function(req, res, next) {
	const id = req.params.id;

	CommentController.newComment(id, req.body.email, req.body.comment, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		console.log('creating comment');

		res.json({
			success: 1,
			data: result
		});
	});

});

router.get('/:id/loadcomments', function(req, res, next){
	var id = req.params.id;

	CommentController.getComments(id, function(err, result){
	
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