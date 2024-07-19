const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const {PORT} = process.env;
const app = express();

//Connect to MongoDB Atlas
connectDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server is runnin at ${PORT}`);
  })
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1);
});


app.use(
  cors(
    {
      origin:["http://localhost:3000"],
      methods:["GET","POST","PUT","DELETE"],
      credentials:true,
    }
  )
);

app.use(cookieParser());

app.use(express.json());

app.use("/",authRoute);
