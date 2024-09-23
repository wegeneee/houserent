const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const express = require('express');
const Allusers = require('../models/usersModel');
const { performTransaction } = require('../controllers/transaction.controller'); // Update the path as needed

dotenv.config();
const app = express();
const addRoomFee = 100; // Set the add room fee

// Middleware to validate the token and perform the transaction
module.exports = async (req, res, next) => {
    try {
        // Access the user ID from the request object
        const userId = req.user.userId;
        console.log('User ID:', userId);

        // Find the landlord user
        const landlord = await Allusers.findById(userId);
        if (!landlord) {
            console.log('Landlord does not exist');
            return res.status(400).json({
                message: "Landlord does not exist",
                success: false,
                data: null
            });
        }

        // Check if the landlord has sufficient balance
        if (landlord.balance < addRoomFee) {
            console.log('Insufficient balance');
            return res.status(400).json({
                message: "Insufficient balance",
                success: false,
                data: null
            });
        }

        // Find the receiver (admin/auditor)
        const receiver = await Allusers.findOne({ isAdmin: true, Auditor: true });
        if (!receiver) {
            console.log('The receiver does not exist');
            return res.status(400).json({
                message: "The receiver does not exist",
                success: false,
                data: null
            });
        }
        const receiverId = receiver._id;
        console.log('Receiver ID:', receiverId);

        // Prepare the transaction data
        const transactionData = {
            sender: userId,
            receiver: receiverId,
            amount: addRoomFee,
            type: "local Transfer from person who add the room"
        };
        console.log('Transaction Data:', transactionData);

        // Perform the transaction
        const response = await performTransaction(transactionData);
        console.log('Transaction Response:', response);

        // Check if the transaction was successful
        if (!response || !response.success) {
            console.log('Transaction failed');
            return res.status(500).json({
                message: "Transaction failed",
                success: false,
                data: response ? response.message : null,
            });
        }

        // Proceed to the next middleware function or the route handler
        next();

    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: error.message,
            success: false,
            data: error.message,
        });
    }
};