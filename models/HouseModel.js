const Schema= mongoose.Schema
const HomeSchema = new Schema({

  ownerUser: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      photos: [{ type: String }],
      description: {
        type: String,
      },
      perks: [{ type: String }],
      extraInfo: {
        type: String,
      },
      maxGuests: {
        type: Number,
      },
      price:{
        type:Number,
        required:true,

    },
    
     AdminPrice: {
        type: Number,
        default: 0 // Initial value set to 0
    },
     allowed:{         /// managed by the system admin
        type:Boolean,
        default:false
    },
    freeToRent:{      // managed by the landlord 
        type:Boolean,
        default:true
    },
     



}  ,{timestamps:true})


const Rooms = mongoose.model('Rooms', HomeSchema);

export default Rooms;