const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    ids:String,
    category:[String],
    tags:[String]

}, {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  });
  
  module.exports = mongoose.model('Category', CategorySchema);
  
