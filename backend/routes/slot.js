import express from 'express';

const router = express.Router();

import { sellerAuth, clientAuth } from '../middleware/auth.js';
import { deleteSlot, createSlot, getSellerSlots } from '../controllers/slot.js';

router.post('/', sellerAuth, createSlot);
router.delete('/:id', sellerAuth, deleteSlot);
router.get('/seller/:sellerId', clientAuth, getSellerSlots);

export default router;
