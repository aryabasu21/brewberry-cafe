const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit with failure code (non-zero) to indicate an error occurred during execution of the Node.js process.
  }
};

module.exports = connectDB;
