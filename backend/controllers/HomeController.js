const User = require("../models/User");
const Fanfic = require("../models/Fanfic");

module.exports = { 
getHomeFanfic:function(callback){
  
    Fanfic.find(  function(err, fanfics ) {
        let resultFanfics = [];
        User.find(  function(err,users) {
        fanfics.forEach(fanfic => {
            var currentUser = {};
             currentUser = users.find(user => { return user.email == fanfic.email });
            if(currentUser  != undefined){
                let fanficNEw = { ...fanfic._doc, author: currentUser.lname + " " + currentUser.fname };
                resultFanfics.push(fanficNEw);
            }
        });
        if (err) {
            callback(err, null);
            return;
          }
       
        callback(null, resultFanfics );
        })
        if (err) {
          callback(err, null);
          return;
        }
       
      }); 
    },
    loadCategory:function(category,callback){
  
      Fanfic.find( {category:category}, function(err, fanfics ) {
          let resultFanfics = [];
          User.find(  function(err,users) {
          fanfics.forEach(fanfic => {
              var currentUser = {};
               currentUser = users.find(user => { return user.email == fanfic.email });
              if(currentUser  != undefined){
                  let fanficNEw = { ...fanfic._doc, author: currentUser.lname + " " + currentUser.fname };
                  resultFanfics.push(fanficNEw);
              }
          });
          if (err) {
              callback(err, null);
              return;
            }
            console.log('fanficNEw', resultFanfics);
          callback(null, resultFanfics );
          })
          if (err) {
            callback(err, null);
            return;
          }
         
        }); 
      }


}