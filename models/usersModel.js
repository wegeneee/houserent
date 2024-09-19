const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true  
    },
    phone:{
        type:Number,
        required:true
    },
    role: {
        type: String,
        enum: ['landlord', 'tenant'],
        required: true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true
}
);
module.exports = mongoose.model('users',userSchema);