import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import slots from './data/slots.js';
import sellers from './data/sellers.js';
import clients from './data/clients.js';

import Slot from './models/slot.js';
import Seller from './models/seller.js';
import Client from './models/client.js';
import Appointmet from './models/appointment.js';

import connectDB from './config/database.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Slot.deleteMany();
        await Seller.deleteMany();
        await Client.deleteMany();
        await Appointmet.deleteMany();

        await Client.insertMany(clients);

        const createdSellers = await Seller.insertMany(sellers);
        const firstSellerId = createdSellers[0]._id;
        const sampleSlots = slots.map((slot) => ({
            ...slot,
            seller: firstSellerId,
        }));

        await Slot.insertMany(sampleSlots);

        console.log('Data Imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Slot.deleteMany();
        await Seller.deleteMany();
        await Client.deleteMany();
        await Appointmet.deleteMany();

        console.log('Data Destroyed'.red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
