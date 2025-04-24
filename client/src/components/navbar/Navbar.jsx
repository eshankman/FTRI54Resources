import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <span className={styles.logo}>FTRI</span>
      </div>

      <div className={styles.navRight}>
        {/*prettier-ignore*/}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/VSCodeExt">VS Code Extensions</Link></li>
          <li><Link to="/VSCodeSnip">VS Code Shortcuts</Link></li>
          <li><Link to="/github">Git/GitHub</Link></li>
          <li><Link to="/Documentation">Documentation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
