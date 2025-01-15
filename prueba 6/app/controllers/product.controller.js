const db = require("../models");

const Product = db.product;

// Retrieve all Products from the database
const findAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();

        if (!products) {
            return res.status(404).send({ message: "Products not found" });
        }

        return res.status(200).send(products);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error retrieving products" });
    }
};

// Find a single Product with an id
const findOneProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }

        return res.status(200).send(product);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error retrieving product" });
    }
};

// Create and Save a new Product
const createProduct = async (req, res) => {
    try {
        const product = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price
        };

        const newProduct = await Product.create(product);

        return res.status(201).send(newProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error creating product" });
    }
};

// Update a Product by the id in the request
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.update(req.body, {
            where: { id: id }
        });

        if (!product) {
            return res.status(404).send({ message: `Product with id ${id} not found` });
        }

        return res.status(200).send({ message: "Product was updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error updating product" });
    }
};

// Delete a Product with the specified id in the request
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.destroy({
            where: { id: id }
        });

        if (!product) {
            return res.status(404).send({ message: `Product with id ${id} not found` });
        }

        return res.status(200).send({ message: "Product was deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error deleting product" });
    }
}

// Delete all Products from the database
const deleteAllProducts = async (req, res) => {
    try {
        const products = await Product.destroy({
            where: {},
            truncate: false
        });

        if (!products) {
            return res.status(404).send({ message: "Products not found" });
        }

        return res.status(200).send({ message: "All products were deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error deleting products" });
    }
};

module.exports = {
    findAllProducts,
    findOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts
};