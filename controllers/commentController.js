const Comment = require('../models/Comment');
const Product = require('../models/Product');

// @desc Get Products
// @route GET /api/v1/products
// @access public
exports.getComment = async (req, res, next) => {
    try {
        const comment = await Comment.find();
        return res.status(200).json({
            success: true,
            data: comment
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc Add Comment
// @route POST /api/v1/comment
// @access public
exports.addComment = async (req, res, next) => {
    try {
        const { name, text, product_id } = req.body;
        const comment = await Comment.create(req.body);
        const commentIndex = { name: name, text: text, product_id: product_id, comment_id: comment.id };
        await Product.findByIdAndUpdate(product_id, { $push: { comments: commentIndex } }, { safe: true, upsert: true });
        return res.status(200).json({
            success: true,
            data: commentIndex
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

// @desc Delete Comment
// @route DELETE /api/v1/comment/:id
// @access public
exports.deleteComment = async (req, res, next) => {
    try {
        const commentIndex = await Comment.findById(req.params.id);
        if (!commentIndex) {
            return res.status(404).json({
                success: false,
                error: 'Comment not found'
            });
        }
        else{
            const commentToBeDeleted = { name: commentIndex.name, text: commentIndex.text, product_id: commentIndex.product_id, comment_id: req.params.id }
            await Product.findByIdAndUpdate(commentIndex.product_id,
                {$pull: {comments: commentToBeDeleted}},
                {safe: true, upsert: true},
                function(err, doc) {
                    if(err){
                    console.log(err);
                    }else{
                        return res.status(200).json({
                            success: true,
                            message: commentToBeDeleted
                        })
                    }
                }
            );
            await commentIndex.remove();
        }

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
// exports.updateProduct = async (req, res, next) => {
//     res.send('PUT PRODUCT')
// }