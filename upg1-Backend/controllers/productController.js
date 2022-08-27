const router = require('express').Router();
const productModel  = require('../models/productModel');

// skapa en produkt
router.post('/', productModel.createProduct);

// hämtar alla produkter
// router.get('/',)

//  hämtar en produkt med hjälp av ID
// router.get('/:id')

// ändrar en produkt
// router.put('/:id')

// tar bort en produkt
// router.delete('/:id')



module.exports = router;