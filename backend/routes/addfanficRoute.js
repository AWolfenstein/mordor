const express = require("express");
const router = express.Router();
const addfanficController = require("../controllers/AddFanficController");

router.post("/:email/addnewfanfic", function(req, res, next) {
	addfanficController.addFanfic(req.body.email,req.body.title, req.body.category,req.body.tags ,req.body.description,req.body.fantext,function(
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
			res.status(201).json({
              success: 1,
              data: result
			});
		 }
		console.log("Fanfic Added");
	  } else {
		res.status(400).json({
		  success: 0,
		  data: result
		});
	  }
    });
    addfanficController.newtag(req.body.tags ,function(
        err,
        result
      ) {
        if (err) {
          console.log(err);
          return;
        }
    
        if (result) {
            if (err) {
              console.log(err);
            } else {
                console.log("New Tags Added");
           }
          
        } else {
        
            console.log("Tags Erorr Added");
        }
      });
  });

  router.get("/", function(req, res, next) {
	addfanficController.loadtags(function(
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
              data:{
                category: result[0].category,
                tags: result[0].tags
              }
			});
         }
        
		console.log("tag loaded");
	  } else {
		res.status(400).json({
		  success: 0,
		  data: result
		});
	  }
    });
  });
 
  router.get('/:id/loadtoedit', function(req, res, next){
	var id = req.params.id;

	addfanficController.loadFanficToEdit(id,function(err, result){
	
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
router.post('/:id/updatefanfic', function(req, res, next) {
	const id = req.params.id;

	addfanficController.updateFanfic(id,req.body.title,req.body.category,req.body.tags ,req.body.description,req.body.fantext, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		console.log('Updated Fanfic');

		res.json({
			success: 1,
			data: result
		});
	});

});
  module.exports = router;