const { getAllProductsFromDB, getProductFromDB } = require('../model/ProductService');

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await getAllProductsFromDB();
    res.status(200).json({allProducts});
  } catch(e) {
    console.log(e)
  }

}
const getProduct = (req, res) => {
  const product = getProductFromDB(req.body);
  res.status(200).json({product});
}

module.exports = { getAllProducts, getProduct }