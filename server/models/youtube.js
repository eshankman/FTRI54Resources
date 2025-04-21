const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  thumbnail: String,
  playlistId: String,
});

module.exports = mongoose.model('Video', videoSchema);
