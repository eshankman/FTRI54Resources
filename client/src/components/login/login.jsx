import React, { useState } from 'react';
import styles from './login.module.css';

export default function LoginSignup() {
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e, currentAction) => {
    e.preventDefault();
    const url =
      currentAction === 'Sign Up' ? 'http://localhost:3000/api/auth/signup' : 'http://localhost:3000/api/auth/login';

    const body = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json(); //! Parse the JSON response from the server
        window.alert(`${currentAction} successful!`);
        console.log(`${action} successful`, data);

        localStorage.setItem('user', JSON.stringify(data.user));

        // Optionally, navigate to another page
        //todo use React Router => when logged in let's go to a notes page
      } else {
        // Handle unsuccessful responses (e.g., invalid login credentials)
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
          <button 
            type="button" 
            className={styles.btn} 
            onClick={() => setAction('Sign Up')}
          >
            Sign Up
          </button>
          <button 
            type="button" 
            className={styles.btn} 
            onClick={() => setAction('Log In')} 
          >
            Log In
          </button>
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
