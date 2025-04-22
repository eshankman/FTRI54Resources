import React, { useState } from 'react';
import styles from './login.module.css';

export default function LoginSignup() {
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login/signup logic
    console.log(`${action} with username: ${username} and password: ${password}`);
  };

  return (
    //prettier-ignore
    <div className={styles.login}>
      <h1>
        Welcome to the FTRI Resources <br />
        {action} Page
      </h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
        <input 
          className={styles.user} 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          className={styles.pass} 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <div className={styles.btnContainer}>
          <button type="button" className={styles.btn} onClick={() => setAction('Sign Up')}>Sign Up</button>
          <button type="button" className={styles.btn} onClick={() => setAction('Log In')}>Log In</button>
        </div>
        <div className="forgotpassword">
          <a href="mailto:ershankman@gmail.com">
            Forgot Password<span> Click Here!</span>
          </a>
        </div>
        <button type="submit" className={styles.btn}>
          {action}
        </button>
      </form>
    </div>
  );
}
