const express = require('express')
const router = express.Router();
const { getAllProducts, createProduct, getSingleProduct, deleteSingleProduct, updateSingleProduct } = require('../controllers/ProductController')

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getSingleProduct).delete(deleteSingleProduct).patch(updateSingleProduct);

module.exports = router;