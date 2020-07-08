const Product = require('../models/Product')

// @desc Get Products
// @route GET /api/v1/products
// @access public
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            success: true,
            count: products.length,
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc Add Product
// @route POST /api/v1/products
// @access public
exports.addProduct = async (req, res, next) => {
    try {
        const { name, price, quantity, image, address, description } = req.body;
        const product = await Product.create(req.body);
        return res.status(201).json({
            success: true,
            data: product
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}

// @desc Delete Product
// @route DELETE /api/v1/products/:id
// @access public
exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'Product not found'
            });
        }
        await product.remove();
        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc Update Product
// @route PUT /api/v1/products/:id
// @access public
exports.updateProduct = async (req, res, next) => {
    try {
        const { name, text, product_id, comment_id } = req.body;
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'Product not found'
            });
        }
        const commentIndex = { name: name, text: text, product_id: product_id, comment_id: comment_id };
        const updated_product = await Product.findByIdAndUpdate(req.params.id, { $push: { comments: commentIndex } }, { safe: true, upsert: true });
        return res.status(200).json({
            success: true,
            data: updated_product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        })
    }
}