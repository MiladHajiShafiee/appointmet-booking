import asyncHandler from 'express-async-handler';

import Seller from '../models/seller.js';
import generateToken from '../utils/generateToken.js';

export const createSeller = asyncHandler(async (req, res) => {
    const sellerExists = await Seller.findOne({ email: req.body.email });
    if (sellerExists) {
        res.status(400);
        throw new Error('Seller already exists');
    }
    const seller = await Seller.create(req.body);
    if (seller) {
        res.status(201);
        res.json({
            _id: seller._id,
            name: seller.name,
            email: seller.email,
            storename: seller.storename,
            token: generateToken(seller._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid seller data');
    }
});

export const loginSeller = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const seller = await Seller.findOne({ email });
    if (seller && (await seller.matchPassword(password))) {
        res.json({
            _id: seller._id,
            name: seller.name,
            email: seller.email,
            storename: seller.storename,
            token: generateToken(seller._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// export const getSellerProfile = asyncHandler(async (req, res) => {
//     const seller = await Seller.findById(req.seller._id);
//     if (seller) {
//         res.json({
//             _id: seller._id,
//             name: seller.name,
//             email: seller.email,
//             storename: seller.storename,
//         });
//     } else {
//         res.status(404);
//         throw new Error('User not found');
//     }
// });

export const getSellers = asyncHandler(async (req, res) => {
    const sellers = await Seller.find({});
    if (sellers) {
        res.json(sellers);
    } else {
        res.status(404);
        throw new Error('There is no seller');
    }
});
