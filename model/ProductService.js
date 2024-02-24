const Product = require('./Product')

const getAllProductsFromDB = async () => {
  try {
    const allProducts = await Product.find({});
    console.log(allProducts)
    return allProducts;
  } catch(e) {
    console.log(e)
  }
}
const getProductFromDB = async (productId) => {
  const product = await Product.findOne({_id: productId});
  return product;
}

module.exports = { getAllProductsFromDB, getProductFromDB };