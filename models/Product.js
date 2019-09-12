const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Product = new Schema({
  ProductName: {
    type: String
  },
  ProductDescription: {
    type: String
  },
  ProductPrice: {
    type: Number
  }
},{
    collection: 'Product'
});

Product.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
  });

module.exports = mongoose.model('Product', Product);