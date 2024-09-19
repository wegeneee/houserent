const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware.js');
const roomPostFeeMiddleware = require('../middlewares/roomPostFeeMiddleware.js');

const {
    AddRoom,
    SelectFreeForRentRooms,
    updateRoom,
    makeAllowedRoom,
    publicAllowedRooms,
    makeFreeForRent,
    SelectAllRooms,
    selectMyPostedRoom,
    selectSingleRoom,
    SelectNoneAllowedRooms,
    SelectNoneFreeForRentRooms
} = require('../controllers/propert.controller.js');

const router = express.Router();

router.post('/addRoom', authMiddleware, roomPostFeeMiddleware, AddRoom);  // to add the new room to the database

router.get('/allrooms', SelectAllRooms);  // select all rooms

router.get('/allmypostrooms/id', selectMyPostedRoom);  // select all rooms

router.get('/publicRooms', authMiddleware, publicAllowedRooms);

router.get('/singleroom/:id', authMiddleware, selectSingleRoom);  // to select the single room with its id

router.get('/nonePermittedRooms', authMiddleware, SelectNoneAllowedRooms);  // to select the none permitted room by admin

router.get('/NotFreeForRent', authMiddleware, SelectNoneFreeForRentRooms);  // to select the none permitted room to rent by landlord

router.get('/freeToRent', authMiddleware, SelectFreeForRentRooms);  // to select the none permitted room to rent by landlord

router.patch('/updateroom/:id', authMiddleware, updateRoom);

router.patch('/allowedRoomToAccess/:id', authMiddleware, makeAllowedRoom);  // make the room be visible to the global market (give the permission)

router.patch('/makeFreeForRent/:id', authMiddleware, makeFreeForRent);  // the landlord make the room become free for rent

module.exports = router;