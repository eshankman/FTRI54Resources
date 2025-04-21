import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const channelId = 'UCFbNIlppjAuEX4znoulh0Cw'; // Web Dev Simplified

router.get('/playlists', async (req, res) => {
  console.log('✅ Hit /api/youtube/playlists route');

  const apiKey = process.env.YOUTUBE_API_KEY;
  console.log('🔑 API Key from .env:', apiKey); // should not be undefined

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is missing. Check .env file.' });
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=50&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log('📺 YouTube API raw response:', JSON.stringify(data, null, 2));

    if (data.error) {
      return res.status(400).json({ error: data.error });
    }

    return res.json(data.items); // ✅ this is what your frontend will use
  } catch (err) {
    console.error('❌ Error fetching YouTube playlists:', err);
    return res.status(500).json({ error: 'Failed to fetch playlists' });
  }
});

export default router;
