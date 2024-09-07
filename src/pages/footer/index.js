

import React from 'react';
import styles from './footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
       <a href="/termsAndCondition">Terms and Conditions</a> {/* Added Terms and Conditions Link */}
      </div>
      <div className={styles.socialMediaIcons}>
        <a href="mailto:contact@yourdomain.com"><i className="fa fa-envelope"></i></a>
        <a href="https://www.facebook.com" target="_blank" ><i class="fa-brands fa-facebook"> </i></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a>
      </div>
      <div className={styles.copyright}>
        &copy; 2024 Karko Tours and Travels. All rights reserved.
      
      </div>
      <div className={styles.adminContainer}>
      
        <Link href="/admin-login">

        Admin
      {" "}
      <i className="fa-solid fa-user-tie"></i>
        </Link>
   
      </div>

    </footer>
  );
}

export default Footer;
