import React from 'react';
import styles from './seatReservation.module.css';

const SeatReservation = () => {
  return (
    <section className={styles.carReservation}>
      <div className={styles.header}>
        <h2>Reserve Your Seat</h2>
        <div className={styles.options}>
          <a href="#">Advanced Search</a>
          <a href="#">Search by Location</a>
          <span className={styles.available}>12 640 Available</span>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>Picking Up locations</label>
            <input type="text" placeholder="Airport or address" />
          </div>
          <div className={styles.column}>
            <label>Picking Up Date</label>
            <input type="date" />
          </div>
          <div className={styles.column}>
            <label>Picking Up Time</label>
            <input type="time" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>Dropping off locations</label>
            <input type="text" placeholder="Airport or address" />
          </div>
          <div className={styles.column}>
            <label>Dropping off Date</label>
            <input type="date" />
          </div>
          <div className={styles.column}>
            <label>Dropping off Time</label>
            <input type="time" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.checkbox}>
            <input type="checkbox" id="return" />
            <label htmlFor="return">Return to the same location</label>
          </div>
          <button className={styles.findButton} type="submit">
            Find a Car
          </button>
        </div>
      </form>
    </section>
  );
};

export default SeatReservation;
