import asyncHandler from 'express-async-handler';
import Appointment from '../models/appointment.js';
import Slot from '../models/slot.js';

export const createSlot = asyncHandler(async (req, res) => {
    const { seller, start, end } = req.body;
    const slots = await Slot.find({ seller });
    if (slots) {
        slots.forEach((slot) => {
            if ((start <= slot.end) | (end <= slot.start)) {
                throw new Error('This slot overlaps with another one');
            }
        });
    }
    const createdSlot = await Slot.create(req.body);
    res.status(201).json(createdSlot);
});

export const getSellerSlots = asyncHandler(async (req, res) => {
    const slots = await Slot.find({ seller: req.params.sellerId });
    if (slots) {
        res.json(slots);
    } else {
        res.status(404);
        throw new Error('There is no slot');
    }
});

export const deleteSlot = asyncHandler(async (req, res) => {
    const deletedSlot = await Slot.findByIdAndRemove(req.params.id);
    if (!deletedSlot) {
        return res.status(404).send();
    }
    await Appointment.findOneAndRemove({ slotId: req.params.id });
    res.send(deletedSlot);
});
