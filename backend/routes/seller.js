import express from 'express';
const router = express.Router();

import { clientAuth } from '../middleware/auth.js';
import {
    getSellers,
    loginSeller,
    createSeller,
} from '../controllers/seller.js';

router.post('/', createSeller);
router.post('/login', loginSeller);
router.get('/', clientAuth, getSellers);

export default router;
