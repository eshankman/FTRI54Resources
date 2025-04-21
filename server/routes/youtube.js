import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const channelIds = [
  'UCAU_6P-M2VHKePIpu5736ag', // codesmith
  'UCFbNIlppjAuEX4znoulh0Cw', // Web Dev Simplified
  'UCsBjURrPoezykLs9EqgamOA', //fireship
  'UCrqAGUPPMOdo0jfQ6grikZw', //colt steele
  'UCJZv4d5rbIKd4QHMPkcABCw', //Kevin Powell
  'UC4SVo0Ue36XCfOyb5Lh1viQ', //bro code
];

router.get('/playlists', async (req, res) => {
  console.log('✅ Hit /api/youtube/playlists route');

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key is missing. Check .env file.' });
  }

  try {
    // Map over channel IDs and fetch playlists in parallel
    const playlistPromises = channelIds.map((channelId) => {
      const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=50&key=${apiKey}`;
      return fetch(url).then((res) => res.json());
    });

    // Wait for all fetches to complete
    const results = await Promise.all(playlistPromises);

    // Combine all the playlist arrays
    const allPlaylists = results.flatMap((result) => result.items || []);

    res.json(allPlaylists);
  } catch (err) {
    console.error('❌ Error fetching playlists:', err);
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
});

export default router;
