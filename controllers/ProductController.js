const { 
  getAllProductsDB, 
  createProductDB, 
  getSingleProductDB, 
  deleteSingleProductDB, 
  updateSingleProductDB
 } = require('../model/ProductService');
const asyncWrapper = require('../middleware/async');

/**
 * Get all products
 */
const getAllProducts = asyncWrapper(async (req, res) => {
  const allProducts = await getAllProductsDB();
  res.status(200).json({allProducts});
})

/**
 * Create one product
 */
const createProduct = asyncWrapper(async (req, res) => {
  const product = await createProductDB(req.body);
  res.status(200).json({product});
})

/**
 * Get single product
 */
const getSingleProduct = asyncWrapper(async (req, res) => {
  const product = await getSingleProductDB(req.params.id);
  res.status(200).json({product})
})

/**
 * Delete single product
 */
const deleteSingleProduct = asyncWrapper(async (req, res) => {
  const product = await deleteSingleProductDB(req.params.id)
  res.status(200).json({product})
})

/**
 * Update single product
 */
const updateSingleProduct = asyncWrapper(async (req, res) => {
  const product = await updateSingleProductDB(req.params.id, req.body)
  res.status(200).json({product})
})

module.exports = { getAllProducts, createProduct, getSingleProduct, deleteSingleProduct, updateSingleProduct }