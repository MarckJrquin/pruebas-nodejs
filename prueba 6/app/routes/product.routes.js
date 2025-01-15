const express = require('express');
const productRouter = express.Router({});

const productController = require('../controllers/product.controller');

// Retrieve all products
productRouter.get(
    '/', 
    productController.findAllProducts
);

// Retrieve a single product with id
productRouter.get(
    '/:id',
    productController.findOneProduct
);

// Create a new product
productRouter.post(
    '/',
    productController.createProduct
);

// Update a product with id
productRouter.put(
    '/:id',
    productController.updateProduct
);

// Delete a product with id
productRouter.delete(
    '/:id',
    productController.deleteProduct
);

// Delete all products
productRouter.delete(
    '/',
    productController.deleteAllProducts
);

module.exports = productRouter;