
"use client";
import React, { useState, useEffect } from 'react';
import styles from './seatReservation.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO, format } from 'date-fns';
import { URL } from '../../../config.js';

const SeatReservation = () => {
  const places = [
    'Likabali',

    'Itanagar',
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [error, setError] = useState('');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

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

      const filteredUnavailableDates = data.unavailableDates
        .map(date => {
          const parsedDate = parseISO(date);
          parsedDate.setHours(0, 0, 0, 0);
          return parsedDate;
        })
        .filter(date => date >= today);

      setUnavailableDates(filteredUnavailableDates);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch unavailable dates:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnavailableDates();
  }, []);

  const isDateUnavailable = (date) => {
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (source === destination) {
      setError('Source and destination cannot be the same.');
      return;
    }

    try {
       // Concatenate source and destination for the route in the required format
    const route = `${source}To${destination}`;

      // Format the selected date to "YYYY-MM-DD"
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    console.log(formattedDate, "formatted date")
      const requestData = {
        route,
        date: formattedDate,
      };
    
      // Send POST request to backend
      const response = await fetch(`${URL}/api/get-seat-by-route-date`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok || response ) {
        const data = await response.json();
        console.log('Seat data:', data); // handle seat data if needed



      // Redirect to the bus layout page with route and date as query parameters
      window.location.href = `/busLayout?route=${route}&date=${formattedDate}`;
      
      } else {
        throw new Error('Failed to fetch seat data');
      }
    } catch (error) {
      console.error('Error fetching seat data:', error);
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
              placeholder="From"
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
              <p>Loading dates...</p>
            ) : (
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={today}
                filterDate={(date) => !isDateUnavailable(date) && date >= today}
                placeholderText="Depart"
                maxDate={new Date(new Date().setDate(today.getDate() + 7))}
              />
            )}
          </div>
          <div className={styles.column}>
            <label>Destination</label>
            <input
              list="destination-list"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="To"
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
