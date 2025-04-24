import React from 'react';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.formTemplate}>
      {/*prettier-ignore */}
      <form action = '/contact' method = "POST">
        <div className={styles.formInfo}>
          <label>Name</label>
          <input id="name" name="name" placeholder="Name" required />

          <label>Email Address</label>
          <input id="email" name="email" placeholder="Email Address" type="email" required />

          <label>Message</label>
          <textarea className={styles.message} name="message" required></textarea>

         <div className={styles.radiobtn}>
           <label><input type="radio" name="contentRec" value="YouTube" /> YouTube Req.</label>
           <label><input type="radio" name="contentRec" value="Tutorial" /> Tutorial Req.</label>
           <label><input type="radio" name="contentRec" value="Shortcut" /> Shortcut Req.</label>
          <label><input type="radio" name="contentRec" value="Resource" /> Resource Req.</label>
        </div>

        <div className="btnContainer">
        <button className={styles.btn} type="submit">Send</button>
        </div>
        </div>
      </form>
    </div>
  );
}
