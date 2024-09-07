"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for managing cookies
import styles from './Login.module.css'; // Import the CSS module
import Header from '../header';
import Link from 'next/link'; 
import { URL } from '../../../config.js';

const Login = () => {
  const [email, setEmail] = useState(''); // Changed from username to email.
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    setError('');

    try {
      const response = await axios.post(`${URL}/api/auth/login`, { email, password });
      const { token } = response.data;

      // Save the token in a cookie
      Cookies.set('authtoken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        expires: 1,
      });
      
      // Redirect to the home page after login
      router.push('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  }

  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.header}>Login</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" // Updated placeholder text
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" // Placeholder text
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button className={styles.submitButton} type="submit">Login</button>
        </form>

        <div className={styles.signupPrompt}>
          <p>Don't have an account? <Link href="/signup" className={styles.link}>Sign up here</Link></p>
        </div>
      </div>
    </>
  );
};

export default Login;
