import express from 'express';

const router = express.Router();
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDeliver,
    getOrders,
} from '../controllers/orderController.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import Order from '../models/orderModel.js';

router.route('/')
      .get(protect, admin, getOrders)
      .post(protect, addOrderItems);
router.route('/mine')
    .get(protect, getMyOrders)
router.route('/:id')
      .get(protect, getOrderById)
router.route('/:id/pay')
      .put(protect, admin, updateOrderToPaid)
router.route('/:id/deliver')
      .put(protect, admin, updateOrderToDeliver)

export default router;
