const Product = require('./Product')

const getAllProductsFromDB = () => {
  return Product.find({});
}

const createProductOnDB = (data) => {
  return Product.create(data);
}

module.exports = { getAllProductsFromDB, createProductOnDB };