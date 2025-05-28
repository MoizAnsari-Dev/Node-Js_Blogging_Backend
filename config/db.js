import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';
// This file is responsible for connecting to the MongoDB database using Mongoose.
// It exports a function that establishes the connection and handles errors.

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
