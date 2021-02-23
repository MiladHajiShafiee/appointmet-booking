import express from 'express';
const router = express.Router();

import { loginClient, createClient } from '../controllers/client.js';

router.post('/', createClient);
router.post('/login', loginClient);

export default router;
