const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: [true, 'Please provide product_id']
     },
    name: {
        type: String,
        required: [true, 'Please provide name']
     },
    price: {
        type: String,
        required: [true, 'Please provide price']
     },
    image: {
        type: String,
        required: [true, 'Please provide image']
     },
    quantity: {
        type: Number,
        required: [true, 'Please provide quantity']
     },
    created_at: { type: Date, default: Date.now() }
 });

module.exports = mongoose.model('Cart',CartItemSchema);