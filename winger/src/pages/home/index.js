// src/pages/index.js

import React from 'react';
import styles from "./home.module.css";

const HomeComponent = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Winger seat booking in Likabali and Itanagar</h1>
      <p className={styles.subtitle}>Winger seat tickets online, check time table, ticket prices, & Volvo AC Sleeper bus services and avail bus ticket offers.</p>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Leaving from" className={styles.input} />
        <span className={styles.icon}>🚌</span>
        <input type="text" placeholder="Going to" className={styles.input} />
        <span className={styles.icon}>📅</span>
        <input type="text" placeholder="Date of Journey" className={styles.input} />
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default HomeComponent;
