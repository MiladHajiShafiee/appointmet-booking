import mongoose from 'mongoose';

const appointmentSchema = mongoose.Schema(
    {
        sellerName: {
            type: String,
            required: true,
        },
        clientName: {
            type: String,
            required: true,
        },
        slotTime: {
            start: { type: String, required: true },
            end: { type: String, required: true },
        },
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Seller',
        },
        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Client',
        },
        slotId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Slot',
        },
        status: {
            type: String,
            default: 'pending',
        },
    },
    { timestamps: true }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
