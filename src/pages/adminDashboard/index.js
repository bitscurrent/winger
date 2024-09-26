
"use client";
import React, { useState } from 'react';
import styles from './adminDashboard.module.css';
import AdminUnavailableDates from "../adminDateUnavailable"
import AdminBooking from '../adminBooking';
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('unavailableDates');

  const renderContent = () => {
    switch (activeTab) {
      case 'unavailableDates':
        return <AdminUnavailableDates />;
      case 'manageUsers':
        return(
          <>
          <h2 className={styles.placeholder}>Admin Booking</h2>
          <AdminBooking />
          </>

        ) 
      case 'viewStats':
        return <h2 className={styles.placeholder}>View Stats (Coming Soon)</h2>;
      default:
        return <h2 className={styles.placeholder}>Welcome to Admin Dashboard</h2>;
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarHeading}>Admin Dashboard</h2>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li
              className={`${styles.navItem} ${activeTab === 'unavailableDates' ? styles.active : ''}`}
              onClick={() => setActiveTab('unavailableDates')}
            >
              Mark Unavailable Dates
            </li>
            <li
              className={`${styles.navItem} ${activeTab === 'manageUsers' ? styles.active : ''}`}
              onClick={() => setActiveTab('manageUsers')}
            >
              Admin Booking
            </li>
            <li
              className={`${styles.navItem} ${activeTab === 'viewStats' ? styles.active : ''}`}
              onClick={() => setActiveTab('viewStats')}
            >
              View Stats
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className={styles.content}>{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;
