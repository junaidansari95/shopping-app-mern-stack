const express = require('express');
const router = express.Router();
const { getCart, addCartItem, deleteCartItem } = require('../controllers/cartController');
router
    .route('/')
    .get(getCart)
    .post(addCartItem);

router
    .route('/:id')
    .delete(deleteCartItem)

module.exports = router;