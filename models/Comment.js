const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please provide name']
    },
    text: {
        type: String,
        required: [true, 'Please provide text']
    },
    product_id: {
        type: String,
        required: [true, 'Please provide product_id']
    },
    created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Comment',CommentSchema);