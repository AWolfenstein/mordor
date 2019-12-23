const User = require("../models/User");
const Fanfic = require("../models/Fanfic");
const Category = require("../models/Category");


module.exports = { 
addFanfic: function(email,title,category,tags,description,fantext, callback){
var newFanfic = new Fanfic({email,title,category,tags,description,fantext}); 
newFanfic.save(function(err, fanfic) {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, fanfic);
  });
},
newtag: function(tags, callback){
    Category.updateOne({ids:"CategoryBase"}, {$addToSet: {tags:{$each:tags}}}, function(err, tag ) {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null,tag );
      }); 

},
loadtags: function(callback){
  Category.find({ids:"CategoryBase"},  function(err, result ) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result );
    }); 
  },
  loadFanficToEdit: function(id,callback){
    Fanfic.findOne({_id:id},  function(err, result ) {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, result );
      }); 
    },
    updateFanfic:function(id,title,category,tags,description,fantext, callback){
      Fanfic.updateOne({_id:id},{title:title,category:category,$addToSet:{tags:tags},description:description,fantext:fantext},{upsert: false},  function(err, result ) {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, result );
      }); 



    }



}