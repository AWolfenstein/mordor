const mongoose = require('mongoose');

const FanficSchema = new mongoose.Schema({
    email: String,
    img: String,
	title: String,
    category:String,
    likes:Number,
    tags:[String],
    description:String,
    fantext:String
}, {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  });


  module.exports = mongoose.model('Fanfic', FanficSchema);