const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// dotenv config 
dotenv.config();

//mongodb connection 

connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/user',require('./routes/userRoutes'));
app.use('/api/v1/admin',require('./routes/adminRoutes')); 
app.use("/api/v1/doctor",require("./routes/doctorRoutes"));


// port
const port = process.env.PORT || 8080;

// listen on port
app.listen(port, () => {
  console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${port}`.cyan.bgWhite);
});
