import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//! Connection to MongoDb via mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('👌 MongoDB connected');
  } catch (error) {
    console.log('👎🏻 Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

connectDB();

import youtubeRoutes from './routes/youtubeRoutes.js';
app.use('/api/youtube', youtubeRoutes);

import userRoutes from './routes/userRoutes.js';
app.use('/api/auth', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
