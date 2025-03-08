const mongoose = require('mongoose');
require("dotenv").config();

const mongoURI = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB Connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
