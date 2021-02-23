import express from 'express';

const router = express.Router();

import {
    getAppointments,
    createAppointment,
    decideAppointment,
} from '../controllers/appointment.js';
import { clientAuth, sellerAuth } from '../middleware/auth.js';

router.post('/', clientAuth, createAppointment);
router.get('/:sellerId', sellerAuth, getAppointments);
router.put('/:appointmentId', sellerAuth, decideAppointment);

export default router;
