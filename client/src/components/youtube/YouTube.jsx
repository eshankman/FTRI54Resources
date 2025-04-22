import React, { useEffect, useState } from 'react';
import styles from './YouTube.module.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const YouTube = () => {
  const [groupedPlaylists, setGroupedPlaylists] = useState({});

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await fetch(`${API_URL}/api/youtube/playlists`);
        const data = await res.json();

        const groupByChannel = (playlists) =>
          playlists.reduce((acc, { snippet }) => {
            const channel = snippet?.channelTitle || 'Unknown';
            acc[channel] = [...(acc[channel] || []), { snippet }];
            return acc;
          }, {});

        setGroupedPlaylists(groupByChannel(data));
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input placeholder="Type Topic Here"></input>
          <button className={styles.submitbtn}>Submit</button>
        </div>
      </div>
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
