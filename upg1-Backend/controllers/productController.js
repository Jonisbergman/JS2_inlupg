const router = require('express').Router();
const productModel  = require('../models/productModel');

// skapar en produkt
router.post('/', productModel.createProduct);

// hämtar alla produkter
router.get('/', productModel.getProducts);

//  hämtar en produkt med hjälp av ID
router.get('/:id', productModel.getProductById);

// ändrar en produkt
router.put('/:id', productModel.updateProduct);

// tar bort en produkt
router.delete('/:id', productModel.deleteProduct);



module.exports = router;