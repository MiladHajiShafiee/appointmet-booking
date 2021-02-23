import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import connectDB from './config/database.js';

import slotRoutes from './routes/slot.js';
import sellerRoutes from './routes/seller.js';
import clientRoutes from './routes/client.js';
import appointmentRoutes from './routes/appointment.js';

import { notFound, errorHandler } from './middleware/error.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/slots', slotRoutes);
app.use('/api/sellers', sellerRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/appointments', appointmentRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    5000,
    console.log(
        `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
);
