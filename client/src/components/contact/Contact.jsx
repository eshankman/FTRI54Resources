import React from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const handleSubmit = async (e) => {
    //* default would be to reload on submit => we want redirect so will preventDefault
    e.preventDefault();

    //* Gets all the information from the form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      //!sends request to the backend
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        //redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error', err);
      alert('An error occurred. Please try again later');
    }
  };

  return (
    <div className={styles.formTemplate}>
      {/*prettier-ignore */}
      <form onSubmit={handleSubmit}>
        <div className={styles.formInfo}>
        <label>Name</label>
        <input id="name" name="name" type="text" placeholder="Name" required />


        <label>Email Address</label>
        <input id="email" name="email" placeholder="Email Address" type="email" required />


          <label>Message</label>
          <textarea className={styles.message} name="message" required></textarea>

         <div className={styles.radiobtn}>
         <div className={styles.radioGroup}>
          <label><input type="radio" name="content-rec" /> YouTube Req.</label>
          <label><input type="radio" name="content-rec" /> Tutorial Req.</label>
          <label><input type="radio" name="content-rec" /> Shortcut Req.</label>
          <label><input type="radio" name="content-rec" /> Resource Req.</label>
        </div>



        <div className="btnContainer">
        <button className={styles.btn} type="submit">Send</button>
        </div>
        </div>
      </div>
      </form>
    </div>
  );
}
