const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const {MONGO_URL} = process.env;

const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URL,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Me successfully connected to MongoDB!");
    }catch(error){
       console.log("Error while connecting to DB",error);
    }
}


module.exports=connectDB;