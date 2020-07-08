const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please provide name']
    },
    price: {
        type: Number,
        required: [true, 'Please provide price']
    },
    quantity: {
        type: Number,
        required: [true, 'Please provide quantity']
    },
    image: {
        type: [String]
    },
    address: {
        type: String,
        required: [true, 'Please provide address']
    },
    description: {
        type: String,
        required: [true, 'Please provide description']
    },
    comments: {
        type: [Object]
    },
    created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Product',ProductSchema);