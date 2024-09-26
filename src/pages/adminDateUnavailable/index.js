
"use client";
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './adminUnavailableDates.module.css';
import { URL } from '../../../config.js';

const AdminUnavailableDates = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [message, setMessage] = useState('');

  const today = new Date();

  // Function to format the date as YYYY-MM-DD in UTC
  const formatDateToUTC = (date) => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    return utcDate.toISOString().split('T')[0]; // Return YYYY-MM-DD format
  };

  // Function to fetch unavailable dates from the backend and format them as UTC
  const fetchUnavailableDates = async () => {
    try {
      const response = await fetch(`${URL}/api/unavailable-date`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Treat all dates as UTC and convert them to YYYY-MM-DD
      const formattedDates = data.unavailableDates.map((date) => {
        const utcDate = new Date(date); // Parse date from backend
        return formatDateToUTC(utcDate); // Format as YYYY-MM-DD in UTC
      });

      setUnavailableDates(formattedDates);
    } catch (error) {
      console.error('Failed to fetch unavailable dates:', error);
    }
  };

  // Function to mark a date as unavailable
  const markDateUnavailable = async () => {
    try {
      const formattedDate = formatDateToUTC(selectedDate); // Format as UTC YYYY-MM-DD
      const response = await fetch(`${URL}/api/admin/unavailable-date`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: formattedDate }),
      });
      if (response.ok) {
        setMessage(`Date ${formattedDate} successfully marked unavailable.`);
        fetchUnavailableDates(); // Refresh the unavailable dates
      } else {
        setMessage('Failed to mark date unavailable.');
      }
    } catch (error) {
      console.error('Failed to mark date unavailable:', error);
    }
  };


// Function to delete an unavailable date using POST
const deleteDate = async (date) => {
  try {
    const response = await fetch(`${URL}/api/admin/delete-date`, {
      method: 'POST', // Change method to POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date }), // Send the date in the body
    });

    if (response.ok) {
      const result = await response.json(); // Get the response from the backend
      setMessage(`Date ${date} ${result.message}`); // Success message from backend
      fetchUnavailableDates(); // Refresh the unavailable dates
    } else {
      const errorResult = await response.json(); // Get error response from backend
      setMessage(`Failed to remove date. Error: ${errorResult.message}`);
    }
  } catch (error) {
    console.error('Failed to remove date:', error);
    setMessage('An error occurred while removing the date.');
  }
};


  useEffect(() => {
    fetchUnavailableDates();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate) {
      markDateUnavailable();
    }
  };

  // Check if a date is unavailable
  const isDateUnavailable = (date) => {
    const formattedDate = formatDateToUTC(date); // Format as YYYY-MM-DD in UTC
    return unavailableDates.includes(formattedDate); // Compare with stored dates
  };

  return (
    <div className={styles.adminContainer}>
      <h2 className={styles.heading}>Mark Dates Unavailable</h2>

      {/* Show current unavailable dates */}
      <div className={styles.currentUnavailable}>
        <h3 className={styles.subHeading}>Current Unavailable Dates:</h3>
        <ul className={styles.dateList}>
          {unavailableDates.length > 0 ? (
            unavailableDates.map((date, index) => (
              <div key={index} className={styles.dateAndCancelContainer}>
                <li className={styles.dateItem}>
                  {date} {/* Display dates as YYYY-MM-DD */}
                </li>
                <button
                  className={styles.cancelButton}
                  onClick={() => deleteDate(date)} // Call deleteDate on cancel button click
                >
                  X
                </button>
              </div>
            ))
          ) : (
            <p>No unavailable dates yet.</p>
          )}
        </ul>
      </div>

      {/* Date picker to select a new date */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.datePickerContainer}>
          <label className={styles.label}>Select a Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={today}
            filterDate={(date) => !isDateUnavailable(date)} // Disable unavailable dates
            className={styles.datePicker}
            placeholderText="Choose a date"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Mark as Unavailable
        </button>
      </form>

      {/* Success message */}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default AdminUnavailableDates;
