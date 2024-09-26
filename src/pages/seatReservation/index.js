
"use client";
import React, { useState, useEffect } from 'react';
import styles from './seatReservation.module.css';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';
import { URL } from '../../../config.js';

const SeatReservation = () => {
  const places = [
    'Likabali',
    'Dhemaji',
    'Harmauti',
    'Naharlagan',
    'Itanagar',
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [error, setError] = useState('');

  // Get today's date and remove the time part
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Truncate to date-only

  const handleSourceChange = (e) => {
    setSource(e.target.value);
    if (e.target.value === destination) {
      setError('Source and destination cannot be the same.');
    } else {
      setError('');
    }
  };

  const fetchUnavailableDates = async () => {
    try {
      const response = await fetch(`${URL}/api/unavailable-date`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Map dates to truncated "date-only" format and filter out past dates
      const filteredUnavailableDates = data.unavailableDates
        .map(date => {
          const parsedDate = parseISO(date);
          parsedDate.setHours(0, 0, 0, 0); // Truncate to date-only
          return parsedDate;
        })
        .filter(date => date >= today); // Only keep today and future dates

      setUnavailableDates(filteredUnavailableDates);
      setLoading(false); // Stop loading after data is fetched
    } catch (error) {
      console.error('Failed to fetch unavailable dates:', error);
      setLoading(false); // Stop loading even if there's an error
    }
  };

  useEffect(() => {
    fetchUnavailableDates();
  }, []);

  const isDateUnavailable = (date) => {
    // Compare the date without time
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0); // Truncate to date-only
    return unavailableDates.some(unavailableDate => unavailableDate.getTime() === selectedDate.getTime());
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    if (e.target.value === source) {
      setError('Source and destination cannot be the same.');
    } else {
      setError('');
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (source === destination) {
      setError('Source and destination cannot be the same.');
    } else {
      setError('');
      window.location.href = '/busLayout';
    }
  };

  return (
    <section className={styles.carReservation}>
      <div className={styles.header}>
        <h2>Reserve Your Seat</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>Source</label>
            <input
              list="source-list"
              value={source}
              onChange={handleSourceChange}
              placeholder="Pickup"
            />
            <datalist id="source-list">
              {places.map((place, index) => (
                <option key={index} value={place} />
              ))}
            </datalist>
          </div>
          <div className={styles.column}>
            <label>Date</label>
            {loading ? (
              <p>Loading dates...</p> // Show loading message while fetching data
            ) : (
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={today} // Disallow past dates
                filterDate={(date) => !isDateUnavailable(date) && date >= today} // Filter out unavailable and past dates
                placeholderText="Select a date"
                maxDate={new Date(new Date().setDate(today.getDate() + 7))} // Allow only up to 7 days ahead
              />
            )}
          </div>
          <div className={styles.column}>
            <label>Destination</label>
            <input
              list="destination-list"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="Drop off"
            />
            <datalist id="destination-list">
              {places.map((place, index) => (
                <option key={index} value={place} />
              ))}
            </datalist>
          </div>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.row}>
          <button type="submit" className={styles.findSeatButton} disabled={!!error}>
            Find a Seat
          </button>
        </div>
      </form>
    </section>
  );
};

export default SeatReservation;
