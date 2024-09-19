
const Schema= mongoose.Schema

const HomeSchema = new Schema({
   roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms',
        required: true
    },

      
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Allusers', // Reference to the User model
    }],
    likeNumber: {
        type: Number,
        default: 0
    },


    
    ratings:[{
        time:{type:Date,default:now},
        star:{type:Number,max:5,min:1
        },
        postedBy:{type: mongoose.Schema.Types.ObjectId,
            ref: 'Allusers', // Reference to the User model
        }
    }],
    totalRating:{
        type:Number,
        default:0
    },


} ,{timestamps:true})



const Feedbacks = mongoose.model('Feedbacks' , HomeSchema)

export default Feedbacks;




