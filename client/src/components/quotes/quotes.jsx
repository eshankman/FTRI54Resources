import React, { useState } from 'react';
import styles from './quotes.module.css';

export default function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuote = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/quotes`);

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();

      if (data && data[0]) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } else {
        setQuote('No quote could be found');
        setAuthor('No Author available');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Error fetching quote.');
      setAuthor('Please try again later.');
    }
  };

  return (
    <div className={styles.quotePage}>
      <h1>Welcome to your Future</h1>
      <img src="/bravo-xd.gif" alt="bravo clap" />
      <p>
        You have done so much to get to this point.
        <br />
        Don’t forget to stop and celebrate your progress and success!
      </p>
      <p>However, you can always return here for some random wisdom on those tough days.</p>

      <div className={styles.quoteBox}>
        {quote && (
          <blockquote className={styles.quoteText}>
            “{quote}”{author && <footer>— {author}</footer>}
          </blockquote>
        )}
        <button className={styles.generate} onClick={getQuote}>
          Generate Quote
        </button>
      </div>
    </div>
  );
}
