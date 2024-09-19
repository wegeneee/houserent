const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const express = require('express');
const Allusers = require('../model/userModel.js');
const { performTransaction } = require('../controllers/transaction.controller.js'); // Assuming transfermoney is exported from this module

dotenv.config();
const app = express();
const addRoomFee = 100; // Set the add room fee

// middleware to validate the token
module.exports = async (req, res, next) => {
    try {
        // Access the user ID from the request object
        const userId = req.user.userId;

        // receiver receiver id by check isadmin and auditor column
        const receiver = await Allusers.findOne({ isAdmin: true, Auditor: true });
        if (!receiver) {
            return res.status(400).json({
                message: "The receiver does not exist",
                success: false,
                data: null
            });
        }
        // get receiver id from receiver
        const receiverId = receiver._id;

        // Prepare the transaction data
        const transactionData = {
            sender: userId,
            receiver: receiverId,
            amount: addRoomFee,
            type: "local Transfer from person who add the room"
            // Add other necessary fields...
        };

        // Call the transfermoney function to perform the transaction
        const response = await performTransaction(transactionData);

        // Check if response is undefined
        if (!response) {
            res.status(500).json({
                message: "transfermoney function returned undefined",
                success: false,
                data: null,
            });
            // throw new Error("transfermoney function returned undefined");
        }

        // Proceed to the next middleware function or the route handler
        next();

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
            data: error.message,
        });
    }
};