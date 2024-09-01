
"use client";

import React, { useState } from 'react';
import styles from './contact.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
      <div className={styles.titleContact} id='contact'> 
        Contact Us
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            className={styles.inputField}
            value={name}
            placeholder='enter your name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.label}>Subject</label>
          <input
            type="text"
            placeholder='enter your subject'
            className={styles.inputField}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
              placeholder='enter your email'
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.label}>Phone</label>
          <input
            type="number"
              placeholder='enter your 10 digit phone number'
            className={styles.inputField}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.label}>Message</label>
          <textarea
            className={styles.messageArea}
              placeholder='type your message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        
        <button type="submit" className={styles.submitButton}>SEND A MESSAGE</button>
      </form>
    </>
  );
}

export default ContactForm;
