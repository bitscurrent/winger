
"use client";
import React from 'react';
import styles from './Timing.module.css';

const Timings = () => {
    const timingsData = [
        { day: 'Monday', morningJourney: '6:00 AM', arrivalItanagar: '9:00 AM', eveningJourney: '2:00 PM', arrivalLikabali: '5:00 PM' },
        { day: 'Tuesday', morningJourney: '6:00 AM', arrivalItanagar: '9:00 AM', eveningJourney: '2:00 PM', arrivalLikabali: '5:00 PM' },
        { day: 'Wednesday', morningJourney: '6:00 AM', arrivalItanagar: '9:00 AM', eveningJourney: '2:00 PM', arrivalLikabali: '5:00 PM' },
        { day: 'Thursday', morningJourney: '6:00 AM', arrivalItanagar: '9:00 AM', eveningJourney: '2:00 PM', arrivalLikabali: '5:00 PM' },
        { day: 'Friday', morningJourney: '6:00 AM', arrivalItanagar: '9:00 AM', eveningJourney: '2:00 PM', arrivalLikabali: '5:00 PM' },
        { day: 'Saturday', morningJourney: '6:00 AM', arrivalItanagar: '9:00 AM', eveningJourney: '2:00 PM', arrivalLikabali: '5:00 PM' },
        { day: 'Sunday', morningJourney: '6:00 AM', arrivalItanagar: '9:00 AM', eveningJourney: '2:00 PM', arrivalLikabali: '5:00 PM' },
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Our Timings</h2>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableCell}>Day</th>
                            <th className={styles.tableCell}>Morning Journey (Likabali to Itanagar)</th>
                            <th className={styles.tableCell}>Arrival (Itanagar)</th>
                            <th className={styles.tableCell}>Evening Journey (Itanagar to Likabali)</th>
                            <th className={styles.tableCell}>Arrival (Likabali)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timingsData.map((row, index) => (
                            <tr key={index} className={styles.tableRow}>
                                <td className={styles.tableCell} data-label="Day">{row.day}</td>
                                <td className={styles.tableCell} data-label="Morning Journey">{row.morningJourney}</td>
                                <td className={styles.tableCell} data-label="Arrival Itanagar">{row.arrivalItanagar}</td>
                                <td className={styles.tableCell} data-label="Evening Journey">{row.eveningJourney}</td>
                                <td className={styles.tableCell} data-label="Arrival Likabali">{row.arrivalLikabali}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Timings;
