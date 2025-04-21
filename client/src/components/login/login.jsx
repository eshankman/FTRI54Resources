import React from 'react';
import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.login}>
      <h1>
        Welcome to the FTRI Resources <br />
        Login Page
      </h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
        <input className={styles.user} placeholder="username" />
        <input className={styles.pass} placeholder="password" />
        <button className={styles.btn}>Log In</button>
      </form>
    </div>
  );
}
