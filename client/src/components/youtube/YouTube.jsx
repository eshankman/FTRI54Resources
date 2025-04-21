import React, { useEffect, useState } from 'react';
import styles from './YouTube.module.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const YouTube = () => {
  const [groupedPlaylists, setGroupedPlaylists] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/api/youtube/playlists`)
      .then((res) => res.json())
      .then((data) => {
        // Group playlists by channel title
        const grouped = data.reduce((acc, playlist) => {
          const channel = playlist.snippet.channelTitle || 'Unknown';
          if (!acc[channel]) acc[channel] = [];
          acc[channel].push(playlist);
          return acc;
        }, {});
        setGroupedPlaylists(grouped);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      {Object.entries(groupedPlaylists).map(([channelTitle, playlists]) => (
        <div key={channelTitle} className={styles.playlistSection}>
          <h2>{channelTitle} Playlists</h2>
          <div className={styles.playlistRow}>
            {playlists.map((playlist) => (
              <div key={playlist.id} className={styles.playlistCard}>
                <a
                  href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={playlist.snippet.thumbnails.medium.url} alt={playlist.snippet.title} />
                  <p>{playlist.snippet.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTube;
