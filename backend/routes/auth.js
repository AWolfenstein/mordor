const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController");
const User = require("../models/User");

router.post("/:email", function(req, res, next) {
  authController.login(req.body.email, req.body.password, function(
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
      var llname;
      var ffname;
      User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
          console.log(err);
        } else {
          llname = user.lname;
          ffname = user.fname;
          var admin = user.admin;
          var  banstatus =user.banstatus;
          res.status(200).json({
            success: 1,
            data: {
              tokenID: result,
              email: req.body.email,
              fname: ffname,
              lname: llname,
              admin: admin,
              banstatus: banstatus
            }
          });
        }
      });

      console.log("User login");
    } else {
      res.status(401).json({
        success: 0,
        data: result
      });
    }
  });
});

router.post("/", function(req, res, next) {
  authController.register(
    req.body.email,
    req.body.lname,
    req.body.fname,
    req.body.password,
    function(err, result) {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: 0,
          error: err
        });
        return;
      }
      if (result) {
        res.status(200).json({
          success: 1,
          data: {
            tokenID: result,
            email: req.body.email,
            fname: req.body.fname,
            lname: req.body.lname
          }
        });
      } else {
        res.status(401).json({
          success: 0,
          data: result
        });
      }
    }
  );
});

router.post("/:email/updateuserinfo", function(req, res, next) {
	authController.updatePassword(req.body.email,req.body.oldPass, req.body.newPass,req.body.retrynewPass ,function(
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
		User.findOne({ email: req.body.email }, function(err, user) {
		  if (err) {
			console.log(err);
		  } else {
			res.status(200).json({
			  success: 1,
			  data: {
				tokenID: result,
				email: req.body.email
			  }
			});
		  }
		});
  
		console.log("User Updated");
	  } else {
		res.status(401).json({
		  success: 0,
		  data: result
		});
	  }
	});
  });

module.exports = router;
