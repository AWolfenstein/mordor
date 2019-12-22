const Fanfic = require("../models/Fanfic");

module.exports = { 

    loadAllFanfics: function(uemail,callback){
        Fanfic.find({email: uemail},  function(err, result ) {
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