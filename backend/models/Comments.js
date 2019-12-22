const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
    fanficid:String,
    email:String,
    comment:String

}, {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  });


  module.exports = mongoose.model('Comments', CommentsSchema );