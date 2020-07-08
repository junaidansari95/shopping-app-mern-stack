const CartItem = require('../models/CartItem')

// @desc Get All Cart Items
// @route GET /api/v1/cart
// @access public
exports.getCart = async (req, res, next) => {
    try {
        const cart = await CartItem.find();
        return res.status(200).json({
            success: true,
            count: cart.length,
            data: cart
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc Add CartItem
// @route POST /api/v1/cart
// @access public
exports.addCartItem = async (req, res, next) => {
    try {
        const { product_id, quantity } = req.body;
        const cartItem = await CartItem.create(req.body);
        return res.status(201).json({
            success: true,
            data: cartItem
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map( val => val.message);
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

// @desc Delete CartItem
// @route DELETE /api/v1/cart/:id
// @access public
exports.deleteCartItem = async (req, res, next) => {
    try {
        const cartItem = await CartItem.findById(req.params.id);
        if (!cartItem) {
            return res.status(404).json({
                success: false,
                error: 'Cart item not found'
            });
        }
        await cartItem.remove();
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
