const Fanfic = require("../models/Fanfic");

module.exports = { 

    loadAllFanfics: function(email,callback){
        Fanfic.find({email: email},  function(err, result ) {
            if (err) {
              callback(err, null);
              return;
            }
            
            callback(null, result );
          }); 
        },

removeFanfic: function(id,callback){
        Fanfic.remove({_id: id},  function(err, result ){
            if (err) {
              callback(err, null);
              return;
            }
            callback(null, result );
          }); 
        } 

}