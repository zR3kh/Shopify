const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String
  },
  isBought: {
    type: Boolean
  }
})
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;