const express = require("express")
const houseRouter=express.Router();
const {addRoom} =require('../controllers/propert.controller');
const authMiddleware = require("../middlewares/authMiddleware");


// add house route
houseRouter.post('/addroom',authMiddleware, addRoom);

module.exports=houseRouter;