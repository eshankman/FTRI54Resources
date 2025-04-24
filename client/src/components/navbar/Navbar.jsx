import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function NavBar() {
  //prettier-ignore
  return (
    <nav className={styles.nav}>
  <div className={styles.navLeft}>
    <span className={styles.logo}>FTRI</span>
  </div>
  <div className={styles.navRight}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/vscode-extensions">VS Code Extensions</Link></li>
      <li><Link to="/vscode-shortcuts">VS Code Shortcuts</Link></li>
      <li><Link to="/github">Git/GitHub</Link></li>
      <li><Link to="/documentation">Documentation</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>
</nav>
  )
}
