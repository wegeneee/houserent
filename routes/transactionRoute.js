const express = require("express")
const transactionRoute=express.Router();
const {getTransactions} =require('../controllers/transaction.controller');
const authMiddleware = require("../middlewares/authMiddleware");

// get all transaction for a user
transactionRoute.post("/get-all-transaction-by-user",authMiddleware, getTransactions);