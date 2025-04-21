import React, { useEffect, useState } from 'react';
import styles from './YouTube.module.css';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/youtube/playlists')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched playlists:', data);
        setPlaylists(data.items || data);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h2>Web Dev Simplified Playlists</h2>
      <div className={styles.playlistRow}>
        {playlists.map((playlist) => (
          <div key={playlist.id} className={styles.playlistCard}>
            <a href={`https://www.youtube.com/playlist?list=${playlist.id}`} target="_blank" rel="noopener noreferrer">
              <img src={playlist.snippet.thumbnails.medium.url} alt={playlist.snippet.title} />
              <p>{playlist.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
