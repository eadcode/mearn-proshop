import express from 'express';

const router = express.Router();
import {
    getProducts,
    getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct,
//     createProductReview,
//     getTopProducts,
} from '../controllers/productController.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);


export default router;
