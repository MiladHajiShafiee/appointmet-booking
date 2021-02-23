import asyncHandler from 'express-async-handler';

import Slot from '../models/slot.js';
import Appointment from '../models/appointment.js';

export const getAppointments = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({
        sellerId: req.params.sellerId,
    });
    res.json(appointments);
});

export const createAppointment = asyncHandler(async (req, res) => {
    const preAppointment = await Appointment.find({
        slotId: req.body.slotId,
        clientId: req.body.clientId,
    });
    if (preAppointment.length !== 0) {
        res.status(400);
        throw new Error("This appointment's already been requested");
    } else {
        const createdAppointment = await Appointment.create(req.body);
        res.status(201).send(createdAppointment);
    }
});

export const decideAppointment = asyncHandler(async (req, res) => {
    const acceptedAppointment = await Appointment.findByIdAndUpdate(
        req.params.appointmentId,
        { status: req.body.status }
    );
    if (req.body.status === 'accepted') {
        const me = await Slot.findByIdAndUpdate(req.body.slotId, {
            isReserved: true,
        });
    }
    res.status(200).send(acceptedAppointment);
});
