"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for managing cookies
import styles from './Login.module.css'; // Import the CSS module
import Header from '../header';
import Link from 'next/link'; 
import { URL } from '../../../config.js';

const Adminlogin = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setError('');

    try {
      const response = await axios.post(`${URL}/api/admin/auth/login`, { email, password });
      const { token } = response.data;

      // Save the token in a cookie
      Cookies.set('authtoken', token, {
        secure: true,
        sameSite: 'Strict',
        expires: 1,
      });

      // Set login status to true
      setIsLoggedIn(true);
      
      // Redirect to the bus layout page
      router.push('/busLayout');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.header}>Welcome to Admin Login Page</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button className={styles.submitButton} type="submit">Login</button>
        </form>

        <div className={styles.signupPrompt}>
          <p>Don't have an account? <Link href="/signup" className={styles.link}>Sign up here</Link></p>
        </div>

        {/* Conditionally render the Reserve Seat button if logged in */}
        {isLoggedIn && (
          <div className={styles.reserveButton}>
            <Link href="/reserve-seat">
              <button>Reserve Seat</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Adminlogin;
