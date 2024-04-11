import express from 'express';

const router = express.Router();
import {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
} from '../controllers/userController.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import User from '../models/userModel.js';

router.route('/')
      .get(protect, admin, getUsers)
      .post(registerUser);

router.route('/profile')
      .get(protect, getUserProfile)
      .put(protect, updateUserProfile);

router.route('/:id')
      .get(protect, admin, getUserById)
      .put(protect, admin, updateUser)
      .delete(protect, admin, deleteUser);

router.post('/login', loginUser);
router.post('/logout', logoutUser);


export default router;
