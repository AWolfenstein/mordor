const User = require("../models/User");
const Fanfic = require("../models/Fanfic");

module.exports = { 
getFanfic:function(id ,callback){
    Fanfic.find({_id:id},  function(err, fanfics ) {
      let resultFanfic = [];
      User.find(  function(err,users) {
        fanfics.forEach(fanfic => {
          var currentUser = {};
           currentUser = users.find(user => { return user.email == fanfic.email });
          if(currentUser  != undefined){
              let fanficNEw = { ...fanfic._doc, author: currentUser.lname + " " + currentUser.fname };
              resultFanfic.push(fanficNEw);
          }
        })
      if (err) {
          callback(err, null);
          return;
        }
      console.log('fanficload');
      callback(null, resultFanfic );
      })
        if (err) {
          callback(err, null);
          return;
        }
        
      }); 
    }


}