import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  thumbnail: String,
  playlistId: String,
});

export default mongoose.model('Video', videoSchema);
