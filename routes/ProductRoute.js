const express = require('express')
const router = express.Router();
const { getAllProducts, createProduct } = require('../controllers/ProductController')

router.route('/').get(getAllProducts).post(createProduct);

module.exports = router;