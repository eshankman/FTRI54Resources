import React, { useState } from 'react';
import styles from './login.module.css';

export default function LoginSignup() {
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = action === 'Sign Up' ? 'http://localhost:3000/api/auth/signup' : 'http://localhost:3000/api/auth/login';

    const body = { username, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        // window.alert(`${action} successful!`);
        console.log(`${action} successful`, data);

        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/quotes';
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        // window.alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      // window.alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={styles.login}>
      <h1>
        Welcome to the FTRI Resources <br />
        {action}
      </h1>
      {/*prettier-ignore*/}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
        <input
          className={styles.user}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <input className={styles.pass} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className={styles.btn}> {action} </button>

        <div className={styles.toggle}>
  {action === 'Sign Up' ? (
    <p>
      Already have an account?{' '}
      <button type="button" onClick={() => setAction('Log In')} className={styles.toggleBtn}>
        Log In</button></p>
  ) : (
    <p>
      New here?{' '}
      <button type="button" onClick={() => setAction('Sign Up')} className={styles.toggleBtn}>
        Sign Up
      </button>
    </p>
  )}
</div>


        <div className={styles.forgotpassword}>
          <a href={`mailto:${import.meta.env.VITE_EMAILFORGOTPASSWORD}`}>
            Forgot Password? <span>Click Here!</span></a>
        </div>
      </form>
    </div>
  );
}
