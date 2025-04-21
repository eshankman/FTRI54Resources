const fetch = require('node-fetch');
const Video = require('../models/Video');

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

exports.getPlaylistVideos = async (req, res, next) => {
  const { playlistId } = req.params;

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    const videos = data.items.map((item) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    // Optional: Save to DB
    // await Video.insertMany(videos.map(video => ({ ...video, playlistId })));

    return res.status(200).json(videos);
  } catch (err) {
    return next({
      log: `youtubeController.getPlaylistVideos: ERROR ${err.message}`,
      status: 500,
      message: { err: 'Error fetching YouTube playlist videos' },
    });
  }
};
