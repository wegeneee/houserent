import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bookedRoom = new Schema({

    bookedBy:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Allusers', // Reference to the User model
       required:true
    },

    RoomId:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Rooms', // Reference to the rooms model
       required:true
    },

   avatarImage:{
        type: String,
        required:true
    },

    price:{
        type:Number,
        required:true,

    },
    
     AdminPrice: {
        type: Number,
        default: 0 ,// Initial value set to 0
        required:true
    },

    address:{
        type:String,
        required:true
    },

    blockNumber:{
        type:String,
        required:true

    },

    roomNumber:{
        type:Number,
        required:true
    },

    hasBedNo:{
        type:Number,
        required:true
    },

    hasParking:{
         type:Boolean,
         default:false,
         required:true
    },
     isDiscount:{
        type: Boolean,
        default:false
    },
    timeFrom:{
        type:Date,
        required:true
    },
    timeTo:{
         type:Date,
        required:true
    },


} , {timestamps:true})

const BookedRooms = mongoose.model('BookedRooms' , bookedRoom)
export default BookedRooms;