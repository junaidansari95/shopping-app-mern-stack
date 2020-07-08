const  express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'})

connectDB();

const products = require('./routes/products');
const cart = require('./routes/cart');
const comments = require('./routes/comments');

const app = express();
app.use(express.json());
app.use('/api/v1/products',products);
app.use('/api/v1/cart',cart);
app.use('/api/v1/comments',comments);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));