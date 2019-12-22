const User = require("../models/User");
const Fanfic = require("../models/Fanfic");
const Comment = require("../models/Comments");

module.exports = { 
    newComment:function(id ,email,newcoment,callback){
       
                var newComment = new Comment();
						newComment.fanficid = id;
                        newComment.email = email;
						newComment.comment = newcoment;
                                  
                        newComment.save(function(err,savecomment) {
                            if (err){
                                console.log('Error add comment: '+err);  
                                throw err;  
                            }
                            console.log('comment succesful');    
                            callback(null, savecomment );
                        });
         
        },
 getComments: function(id ,callback){
    Comment.find({fanficid:id},  function(err, comments ) {
              let resultComments = [];
              User.find(  function(err,users) {
                comments.forEach(comment => {
                  var currentUser = {};
                   currentUser = users.find(user => { return user.email == comment.email });
                  if(currentUser  != undefined){
                      let commentNew = { ...comment._doc, author: currentUser.lname + " " + currentUser.fname };
                      resultComments.push(commentNew);
                  }
                })
              if (err) {
                  callback(err, null);
                  return;
                }resultComments
              console.log('Commentload', resultComments);
              callback(null, resultComments );
              })
                if (err) {
                  callback(err, null);
                  return;
                }
                
              }); 
            }
    
    }