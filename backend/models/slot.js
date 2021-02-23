import mongoose from 'mongoose';

const slotSchema = mongoose.Schema(
    {
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Seller',
        },
        start: {
            type: String,
            required: true,
        },
        end: {
            type: String,
            required: true,
        },
        isReserved: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Slot = mongoose.model('Slot', slotSchema);

export default Slot;
