import React from 'react';
import styles from './Marquee.module.css';

const Marquee=() => {
  return (
    <div className={styles.marqueeContainer}>
      <span className={styles.marqueeText}>
      NOTE: The Winger service requires at least 5 passengers to run. If fewer than 5 passengers are booked, the trip will be canceled for the day, and a full refund will be processed on the same day.
       
      </span>
    </div>
  );
}

export default Marquee;
