
"use client";

import { useState, useEffect } from "react";
import styles from "./BusSeatingLayout.module.css"; // Import the CSS module
import "@fortawesome/fontawesome-free/css/all.min.css";
import { URL } from "../../../config.js";

const BusLayout = () => {
  const totalSeats = 13; // Define total seats
  const [reservedSeats, setReservedSeats] = useState([]);
  const [error, setError] = useState("");

  // Fetch reserved seat data
  useEffect(() => {
    const fetchReservedSeats = async () => {
      try {
        const response = await fetch(`${URL}/api/get-seat`); // Adjust endpoint if needed
        if (!response.ok) {
          throw new Error("Failed to fetch seat data");
        }
        const data = await response.json();
        setReservedSeats(data.map((seat) => seat.seatNumber)); // Extract seat numbers that are reserved
      } catch (error) {
        console.error("Error fetching seat data:", error);
        setError("Failed to fetch seat data. Please try again later.");
      }
    };

    fetchReservedSeats();
  }, []);

  // Render seats based on their status
  const renderSeats = () => {
    const layout = [
      [1, 2,null, null],
      [3, 4, 5, 6],
      [7, null, 8, 9],
      [10, 11, 12, 13], 
    ];
    return layout.map((row, rowIndex) => (
      <div key={rowIndex} className={styles.row}>
        {row.map((seatNumber, seatIndex) => {
          if (!seatNumber) {
            return <div key={seatIndex} className={styles.emptySpace}></div>;
          }
          const isReserved = reservedSeats.includes(seatNumber);
          return (
            <div
              key={seatNumber}
              className={`${styles.seat} ${
                isReserved ? styles.reserved : styles.available
              }`}
            >
              <i className="fa-solid fa-chair"></i>
              <span>{seatNumber}</span>
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className={styles.busLayout}>
      <h1>Bus Seating Layout</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div className={styles.busBody}>
          <div className={styles.driverArea}>
            <i
              className="fa-solid fa-circle-xmark fa-3x"
              style={{ color: "black" }}
            ></i>{" "}
            {/* Steering Wheel */}
          </div>
          <div className={styles.seatingGrid}>{renderSeats()}</div>
        </div>
      )}
    </div>
  );
};

export default BusLayout;
