const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//Connect to MongoDB Atlas


// Routes 


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


