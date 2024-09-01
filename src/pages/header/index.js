import React from 'react';
import styles from './header.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span>The Guide</span>
        <span>/ Our Crew</span>
        <span>/ Become a Partner</span>
        <span>/ +8 800 12 34 567</span>
        <span>/ mail@letsdrive.com</span>
        <div className={styles.socialLinks}>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-vk"></i>
        </div>
        <div className={styles.language}>
          <select>
            <option value="en">EN</option>
            <option value="other">Other</option>
          </select>
        </div>
        <a href="/admin" className={styles.login}>Admin Login</a>
      </div>

      <div className={styles.navBar}>
        <div className={styles.logo}>
          <h1>Karko <span>Tours and Travels</span></h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="/">HOME</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">VEHICLES</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#">COMING-SOON</a></li>
            <li><a href="#">404</a></li>
          </ul>
        </nav>


        <div className="userIcon">
          <Link href='/login'>
          <i className="fa-solid fa-user"></i>

          </Link>
        </div>

    



        <div className={styles.searchIcon}>
          <i className="fas fa-search"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
