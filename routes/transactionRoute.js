const express = require("express");
const transactionRoute = express.Router();
const { getTransactions } = require("../controllers/transaction.controller");
const authMiddleware = require("../middlewares/authMiddleware");

// Get all transactions for a user
transactionRoute.get("/get-all-transactions-by-user", authMiddleware, getTransactions);

module.exports = transactionRoute;