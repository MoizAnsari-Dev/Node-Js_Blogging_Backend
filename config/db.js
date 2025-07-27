import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';
// This file is responsible for connecting to the MongoDB database using Mongoose.
// It exports a function that establishes the connection and handles errors.

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
