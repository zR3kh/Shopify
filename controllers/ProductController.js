const { getAllProductsFromDB, createProductOnDB } = require('../model/ProductService');
const asyncWrapper = require('../middleware/async');

const getAllProducts = asyncWrapper(async (req, res) => {
  const allProducts = await getAllProductsFromDB();
  res.status(200).json({allProducts});
})

const createProduct = asyncWrapper(async (req, res) => {
  const product = await createProductOnDB(req.body);
  res.status(200).json({product});
})

module.exports = { getAllProducts, createProduct }