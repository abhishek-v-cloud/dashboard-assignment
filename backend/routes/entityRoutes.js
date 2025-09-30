import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { getEntities, createEntity, updateEntity, deleteEntity, getProfile, updateProfile } from '../controllers/entityController.js';

const router = express.Router();
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.get('/', protect, getEntities);
router.post('/', protect, createEntity);
router.put('/:id', protect, updateEntity);
router.delete('/:id', protect, deleteEntity);

export default router;
