
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
    // Handle form submission logic here
    
  };

  return (
    <>
      <div className={styles.titleContact} id='contact'>
        Have Questions? We're Here to Help!
        <p>Reach out to us for any inquiries or assistance. We're just a message away.</p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <input
            type="text"
            className={styles.inputField}
            value={name}
            placeholder='Your Name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <input
            type="text"
            className={styles.inputField}
            value={subject}
            placeholder='Subject'
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <input
            type="email"
            className={styles.inputField}
            value={email}
            placeholder='Your Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <input
            type="tel"
            className={styles.inputField}
            value={phone}
            placeholder='Phone Number'
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <textarea
            className={styles.messageArea}
            value={message}
            placeholder='Your Message...'
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        
        <button type="submit" className={styles.submitButton}>SEND MESSAGE</button>
      </form>
    </>
  );
};

export default ContactForm;
