import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  videoId: String,
  title: String,
  thumbnail: String,
  playlistId: String,
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
