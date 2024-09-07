
"use client"; // This marks the component as a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import
import axios from 'axios';
import styles from './Signup.module.css'; // Import the CSS module
import Header from '../header';
import Link from 'next/link'; // Import Link for navigation
import { URL } from '../../../config.js';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    setError('');

    try {
      // Send fullName, email, phone, and password to the backend
      const response = await axios.post(`${URL}/api/auth/signup`, {
        fullName,
        email,
        phone,
        password
      });

      const { token } = response.data;

      // Save the token (Consider using cookies for security reasons in production)
      localStorage.setItem('token', token);

      // Redirect to the home page after signup
      router.push('/login');
    } catch (err) {
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.header}>Sign Up</h1>
        <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name" // Placeholder text
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" // Placeholder text
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number" // Placeholder text
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
          <button className={styles.submitButton} type="submit">Sign Up</button>
        </form>

        <div className={styles.loginPrompt}>
          <p>Already have an account? <Link href="/login" className={styles.link}>Login here</Link></p>
        </div>
      </div>
    </>
  );
};

export default Signup;
