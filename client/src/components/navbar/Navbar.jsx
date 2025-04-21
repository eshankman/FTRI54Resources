import React from 'react';
import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    //prettier-ignore
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <ul>
          <li><a href="/index.html">Home</a></li>
          {/* <li><a href="/JavaScript/javascript.html">JavaScript</a></li>
          <li><a href="/HTML/html.html">HTML</a></li>
          <li><a href="/CSS/css.html">CSS</a></li> */}
          <li><a href="/src/pages/vscode_ext/vscodeext.jsx">VS Code Extensions</a></li>
          <li><a href="/src/pages/shortcuts/vscodeshortcuts.jsx">VS Code Shortcuts</a></li>
          <li><a href="/src/pages/github/github.jsx">Git/GitHub</a></li>
          <li><a href="/src/pages/documentation/documentation.jsx">Documentation</a></li>
        </ul>
      </div>
      <div className={styles.navRight}>
      </div>
    </nav>
  );
}
