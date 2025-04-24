import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import youtubeRoutes from './routes/youtubeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//! MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('👌 MongoDB connected');
  } catch (error) {
    console.log('👎🏻 MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

//! Mount routes = This is where the api call comes from the frontend
app.use('/api/youtube', youtubeRoutes);
app.use('/api/auth', userRoutes);
app.use('/quotes', quoteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
