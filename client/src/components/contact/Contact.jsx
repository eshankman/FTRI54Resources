import React from 'react';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div>
      <form>
        <div className={styles.formInfo}>
          <label>Name</label>
          <input id="name" name="name" placeholder="Name" required />

          <label>Email Address</label>
          <input id="email" name="email" placeholder="Email Address" type="email" required />

          <label>Message</label>
          <textarea className={styles.message}></textarea>
        </div>
        <div className="radiobtn">
          <label>
            <input type="radio" name="content-rec" />
            YouTube Req.
          </label>
          <label>
            <input type="radio" name="content-rec" />
            Tutorial Req.
          </label>
          <label>
            <input type="radio" name="content-rec" />
            Update Content Req.
          </label>
        </div>
        <button className={styles.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
