const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const SECRET_KEY = "78889666";

module.exports = {
  login: function(email, password, callback) {
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        callback(err, null);
        return;
      }

      if (!user) {
        //User not found
        console.log("not found");
        callback(err, null);
      } else {
        user.comparePassword(password, function(err, isMatch) {
          if (err) {
            callback(err, null);
            return;
          }

          if (isMatch) {
            const payload = {
              email: user.email,
              _id: user._id
            };
            var authToken = jwt.sign(payload, SECRET_KEY);
            console.log("User:");
            console.log(authToken);
            console.log("--------------------");
            callback(null, authToken);
          } else {
            callback(err, null);
          }
        });
      }
    });
  },
  register: function(email, fname, lname, password, callback) {
    var newUser = new User({ email, fname, lname, password });

    newUser.save(function(err, user) {
      if (err) {
        callback(err, null);
        return;
      }
      const payload = {
        email: user.email,
        _id: user._id
      };
      var authToken = jwt.sign(payload, SECRET_KEY);
      callback(null, authToken);
    });
  },

  updatePassword: function(email, oldPass, newPass, retrynewPass, callback) {
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        callback(err, null);
        return;
      }
      if (!user) {
        //User not found
        console.log("not found");
        callback(err, null);
      } else {
        user.comparePassword(oldPass, function(err, isMatch) {
          if (err) {
			console.log("error 1");
            callback(err, null);
            return;
          }

          if (isMatch) {
            if (newPass === retrynewPass &&newPass != null && retrynewPass != null) {
              User.update({ email: email },{ password: newPass },function(err, user) {
                  if (err) throw err;
                  const payload = {
                    email: user.email,
                    _id: user._id
                  };
                  var authToken = jwt.sign(payload, SECRET_KEY);
                  console.log("User Udated:");
                  console.log(authToken);
                  console.log("--------------------");
                  callback(null, authToken);
                }
              );
            } else {
				console.log("error 2");
              callback(err, null);
            }
          } else {
			console.log("error 3");
            callback(err, null);
          }
        });
      }
    });
  }
};
