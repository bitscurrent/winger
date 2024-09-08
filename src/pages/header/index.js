

"use client"

import React, { useState } from 'react';
import styles from './header.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };        

  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.inlineContainer}>
          <div className={styles.logo}>
            <h1>Karko <span>Tours and Travels</span></h1>
          </div>

          <i
            className={`fa-solid fa-bars ${styles.menuIcon}`}
            onClick={toggleMenu}
          ></i>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li><a href="/">HOME</a></li>
            <li><a href="#service">SERVICE</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            <li><a href="#">+91-8877XXXXXX</a></li>


<li>


            <div className={styles.userIcon}>
          <Link href='/login'>
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
        </li>

          </ul>


         

        </nav>

      </div>
    </header>
  );
};

export default Header;
