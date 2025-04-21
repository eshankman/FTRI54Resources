import React from 'react';
import styles from './MainPage.module.css';
import logo from '../../assets/FTRI54-transparent.png';

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <section className={styles.main}>
        <h1 id="welcome">Welcome Cohort 55!</h1>
        <h3 id="subText">A Compilation of Resources and Guides from your friends at:</h3>
      </section>

      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="FTRI 54" />
      </div>

      <section>
        <p className={styles.intro}>
          This page is going to serve as an all-in-one place to get access to some resources that made our lives easier
          at the start of the program.
          <br />
          We wanted to provide you a place to visit to review any specific topics or make sure to have a place to find
          references and guides to help. <br />
          These are resources we have found and collected or created.
        </p>
      </section>
    </div>
  );
}
