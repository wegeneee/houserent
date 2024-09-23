const express = require("express");
const transactionRoute = express.Router();
const { getTransactions,getUserBalance } = require("../controllers/transaction.controller");
const authMiddleware = require("../middlewares/authMiddleware");

// Get all transactions for a user
transactionRoute.get("/get-all-transactions-by-user", authMiddleware, getTransactions);

// Route to get user balance
transactionRoute.get('/balance', authMiddleware, getUserBalance);

module.exports = transactionRoute;