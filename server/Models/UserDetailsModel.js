const mongoose = require("mongoose");
const User = require("../Models/UserModel");
const UserDetailsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    email:{
        type:String
    },
    lastName:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        street:String,
        city:String,
        state:String,
        zip:String,
    },
    phoneNumber:{
        type:String,
        match:[/^\d{10}$/,'Phone number must be 10 digits'],
    },
    profilePicture:{
        type:String,
    },
    updatedAt:{
        type:Date,
        default: new Date(),
    },
    
});

module.exports = mongoose.model("UserDetails",UserDetailsSchema);