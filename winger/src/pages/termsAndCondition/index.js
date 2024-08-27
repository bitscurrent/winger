import React from 'react';
import styles from './termsAndCondition.module.css'; // Create this CSS file for styling
import Header from '../header';
import Footer from '../footer';

const TermsAndConditions = () => {
  return (
    <>
    <Header />
    <div className={styles.container}>
      <h1 className={styles.title}>Terms & Conditions</h1>
      <ol className={styles.list}>
        <li>Travellers are requested to maintain decorum.</li>
        <li>Ticket is not refundable.</li>
        <li>25% cancellation charge will be levied for cancellation of the ticket before reporting time on special ground only.</li>
        <li>No cancellation after reporting time.</li>
        <li>Company is not responsible for luggage lost or damaged.</li>
         <li>Any objectionable articles are not allowed to be carried in the cab.</li>
        <li>In the event of cancellation of journey due to technical defects, passengers will get back their fare.</li>
      </ol>
    </div>
    <Footer />
    </>
  );
};

export default TermsAndConditions;

