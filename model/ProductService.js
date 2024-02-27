const Product = require('./Product')

/**
 * Retrieve all products DB
 * @returns Product
 */
const getAllProductsDB = () => {
  return Product.find({});
}

/**
 * Create a product DB
 * @param {Object} data 
 * @returns Product
 */
const createProductDB = (data) => {
  return Product.create(data);
}

/**
 * Retrieve single product DB
 * @param {Number} id 
 * @returns Product
 */
const getSingleProductDB = (id) => {
  return Product.findById(id);
}

/**
 * Delete single product DB
 * @param {Number} id 
 * @returns Product
 */
const deleteSingleProductDB = (id) => {
  return Product.findByIdAndDelete(id);
}

/**
 * Update single product DB
 * @param {Number} id 
 * @param {Object} data 
 * @returns Product
 */
const updateSingleProductDB = (id, data) => {
  return Product.findByIdAndUpdate(id, data, {returnDocument: 'after'});
}

module.exports = { getAllProductsDB, createProductDB, getSingleProductDB, deleteSingleProductDB, updateSingleProductDB };