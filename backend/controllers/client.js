import asyncHandler from 'express-async-handler';

import Client from '../models/client.js';
import generateToken from '../utils/generateToken.js';

export const createClient = asyncHandler(async (req, res) => {
    const clientExists = await Client.findOne({ email: req.body.email });
    if (clientExists) {
        res.status(400);
        throw new Error('Client already exists');
    }
    const client = await Client.create(req.body);
    if (client) {
        res.status(201);
        res.json({
            _id: client._id,
            name: client.name,
            email: client.email,
            token: generateToken(client._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid client data');
    }
});

export const loginClient = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const client = await Client.findOne({ email });
    if (client && (await client.matchPassword(password))) {
        res.json({
            _id: client._id,
            name: client.name,
            email: client.email,
            token: generateToken(client._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});
