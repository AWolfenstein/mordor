const User = require("../models/User");

module.exports = { 

    loadAllUsers: function(callback){
        User.find(function(err, result ) {
            if (err) {
              callback(err, null);
              return;
            }
            
            callback(null, result );
          }); 
        },

removeUser: function(id,callback){
    User.remove({_id: id},  function(err, result ){
            if (err) {
              callback(err, null);
              return;
            }
            callback(null, result );
          }); 
        } ,
        banUser: function(id,callback){
            User.updateOne({_id: id},{banstatus:true},  function(err, result ){
                if (err) {
                  callback(err, null);
                  return;
                }
                callback(null, result );
              }); 
            } ,
               unbanUser: function(id,callback){
                User.updateOne({_id: id},{banstatus: false},   function(err, result ){
                    if (err) {
                      callback(err, null);
                      return;
                    }
                    callback(null, result );
                  }); 
                } ,
                adminUser: function(id,callback){
                    User.updateOne({_id: id},{admin: true}, {upsert: false},  function(err, result ){
                        if (err) {
                          callback(err, null);
                          return;
                        }
                        callback(null, result );
                      }); 
                    } , 
                    unadminUser: function(id,callback){
                        User.updateOne({_id: id},{admin: false},   function(err, result ){
                            if (err) {
                              callback(err, null);
                              return;
                            }
                            callback(null, result );
                          }); 
                        } 
    

}