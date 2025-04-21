import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    //prettier-ignore
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vscode-extensions">VS Code Extensions</Link></li>
          <li><Link to="/vscode-shortcuts">VS Code Shortcuts</Link></li>
          <li><Link to="/github">Git/GitHub</Link></li>
          <li><Link to="/youtube">YouTube Playlists</Link></li>
          <li><Link to="/documentation">Documentation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className={styles.navRight}>
        {/* Any right-side content here */}
      </div>
    </nav>
  );
}
