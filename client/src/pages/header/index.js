// src/components/Header.js

import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>abhibus</div>
      <nav className={styles.nav}>
        <a href="/" className={`${styles.navItem} ${styles.navItemActive}`}>Bus</a>
        <a href="/trains" className={styles.navItem}>Trains</a>
        <a href="/hotels" className={styles.navItem}>Hotels</a>
        <a href="/offers" className={styles.navItem}>Offers</a>
        <a href="/refer" className={styles.navItem}>Refer A Friend</a>
      </nav>
    </header>
  );
};

export default Header;
