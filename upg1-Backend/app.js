const express = require('express');
const app = express();
const productController = require('./controllers/productController')

// 

// MIDDLEWARE

// CONTROLLERS
app.use('/api/products', productController);




module.exports = app;