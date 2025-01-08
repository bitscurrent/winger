"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./adminBooking.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { URL } from "../../../config.js";
import BookingModal from "./bookingModal.js";

// Helper function to format date to YYYY-MM-DD
const formatDateToUTC = (date) => {
  return date.toISOString().split("T")[0];
};

const AdminBooking = () => {
  const totalSeats = 13;
  const [reservedSeats, setReservedSeats] = useState([]);
  const [route, setRoute] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [error, setError] = useState("");
  const [seatsVisible, setSeatsVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Fetch reserved seat data based on route and date
  const fetchReservedSeats = async (route, date) => {
    console.log(route,"ttrrrr")
    try {
      setError(""); // Clear previous error
      const formattedDate = formatDateToUTC(date);
      const response = await fetch(`${URL}/api/get-seat-by-route-date`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ route, date: formattedDate }),
      });
      if (!response.ok) {
        window.alert("Hi Admin, reserve freshly");
        setReservedSeats([]);
        return;

      }
      const data = await response.json();

      if (data.length === 0) {
        setNoDataAvailable(true); // No seat data found, allow booking all seats
        setReservedSeats([]); // Reset reserved seats
      } else {
        setReservedSeats(data.map((seat) => seat.seatNumber));
        setNoDataAvailable(false); // Seats data found
      }
    } catch (error) {
      console.error("Error fetching seat data:", error);
      // setError("Failed to fetch seat data. Please try again later.");
      setReservedSeats([]); // Reset reserved seats on error
      setSeatsVisible(true); // Ensure seats are displayed on error

    }
  };


  const fetchSeatDetails = async (seatNumber, route, date) => {
    const formattedDate = formatDateToUTC(date);
    try {
      const response = await fetch(`${URL}/api/admin/seat-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seatNumber, route, date: formattedDate }),
      });
     
      if (response.ok) {
        const data = await response.json(); // Fetch the complete response as JSON
        console.log("Full API Response:", data);
      
        // Extract fields from the nested 'seatDetails' object
        const { fullName, phone, createdAt, notes, } = data.seatDetails; 
      
        return { fullName, phone, createdAt, notes }; // Return the specific field

      } else {
        throw new Error("Failed to fetch seat details");
      }
    } catch (error) {
      console.error("Error fetching seat details:", error);
      throw error;
    }
  };
  
  const cancelSeatReservation = async (seatNumber, route, date) => {
    const formattedDate = formatDateToUTC(date);
    try {
      const response = await fetch(`${URL}/api/admin/cancel-reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seatNumber, route, date: formattedDate }),
      });
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Failed to cancel reservation");
      }
    } catch (error) {
      console.error("Error canceling reservation:", error);
      throw error;
    }
  };
  


  // Fetch unavailable dates from the backend

  const fetchUnavailableDates = async () => {
    try {
      const response = await fetch(`${URL}/api/unavailable-date`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const formattedDates = data.unavailableDates.map((date) => {
        const utcDate = new Date(date);
        return formatDateToUTC(utcDate);
      });
      setUnavailableDates(formattedDates);
    } catch (error) {
      console.error("Error fetching unavailable dates:", error);
    }
  };

  useEffect(() => {
    fetchUnavailableDates();
  }, []);

  // Trigger fetching seats whenever route, date, or refreshData changes
  useEffect(() => {
    if (route && selectedDate) {
      fetchReservedSeats(route, selectedDate); // Re-fetch seat data
      setSeatsVisible(true);
    } else {
      setSeatsVisible(false);
    }
  }, [route, selectedDate, refreshData]);

  // Function to handle opening the modal
  const handleSeatAction = (seatNumber) => {
    if (reservedSeats.includes(seatNumber)) {
      alert(`Seat ${seatNumber} is already reserved.`);
    } else {
      setSelectedSeat(seatNumber); // Store the selected seat
      setModalVisible(true); // Show the booking modal
    }
  };

  // Handle modal submission
  const handleModalSubmit = async (formData) => {
    const { userEmail, fullName, phone, notes } = formData;
    const formattedDate = formatDateToUTC(selectedDate);

    try {
      setError(""); // Clear previous error
      const response = await fetch(`${URL}/api/admin/reserve-seat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          fullName,
          phone,
          notes,
          seatNumber: selectedSeat,
          date: formattedDate,
          route,
        }),
      });

      if (response.ok) {
        alert(`Seat ${selectedSeat} successfully booked.`);
        setReservedSeats([...reservedSeats, selectedSeat]);
        setRefreshData(!refreshData); // Trigger refresh
        setModalVisible(false); // Close the modal after booking
      } else {
        throw new Error("Failed to book seat");
      }
    } catch (error) {
      console.error("Error booking seat:", error);
      setError("Failed to book seat. Please try again later.");
    }
  };


  const handleViewDetails = async (seatNumber) => {
    try {
      const seatDetails = await fetchSeatDetails(seatNumber, route, selectedDate);
      alert(`Details for seat ${seatNumber}:\n${JSON.stringify(seatDetails, null, 2)}`);
    } catch (error) {
      alert("Failed to fetch seat details. Please try again later.");
    }
  };
  
  const handleCancelReservation = async (seatNumber) => {
    if (window.confirm(`Are you sure you want to cancel the reservation for seat ${seatNumber}?`)) {
      try {
        await cancelSeatReservation(seatNumber, route, selectedDate);
        alert(`Reservation for seat ${seatNumber} has been canceled.`);
        setRefreshData(!refreshData); // Refresh seat data
      } catch (error) {
        alert("Failed to cancel reservation. Please try again later.");
      }
    }
  };
  


  // Function to handle route change
  const handleRouteChange = (selectedRoute) => {
    setRoute(selectedRoute);
    if (selectedRoute === "LikabaliToItanagar") {
      setBackgroundImage("/images.png");
    } else {
      setBackgroundImage("/travellers.png");
    }
  };

  const today = new Date();

  // Render seats based on their status
 
// Render seats based on their status
const renderSeats = () => {
  const layout = [
    [1, 2, null, "Driver"],
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

        const isReserved =
          seatNumber === "Driver" || reservedSeats.includes(seatNumber);

        return (
          <div
            key={seatNumber}
            className={`${styles.seat} ${
              isReserved ? styles.reserved : styles.available
            }`}
          >
            <i className="fa-solid fa-chair"></i>
            <span>{seatNumber}</span>

            {seatNumber !== "Driver" && (
              <div className={styles.seatActions}>
                <button
                  className={styles.seatButton}
                  onClick={() => handleSeatAction(seatNumber)}
                >
                  {isReserved ? "Reserved" : "Book"}
                </button>

                {isReserved && (
  <div className={styles.actionButtons}>
    <button
      className={styles.viewButton}
      onClick={() => handleViewDetails(seatNumber)}
    >
      <i className="fa-solid fa-eye"></i>
    </button>
   
    <button
  className={styles.cancelButton}
  onClick={() => {
    const confirmation = window.prompt(
      `To cancel the reservation for seat ${seatNumber}, type "CONFIRM" and press OK.`
    );
    if (confirmation === "CONFIRM") {
      handleCancelReservation(seatNumber); // Call the function to handle cancellation
    } else {
      alert("Cancellation not confirmed. Reservation remains active.");
    }
  }}
>
  <i className="fa-solid fa-xmark"></i>
</button>



  </div>
)}

               
              </div>
            )}
          </div>
        );
      })}
    </div>
  ));
};



  const isDateUnavailable = (date) => {
    const formattedDate = formatDateToUTC(date);
    return unavailableDates.includes(formattedDate);
  };

  return (
    <div
      className={styles.adminContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.routeContainer}>
        <label className={styles.routeLabel}>Select Route:</label>
        <div className={styles.routeSelection}>
          <input
            type="radio"
            id="route1"
            name="route"
            value="Likabali to Itanagar"
            onChange={() => handleRouteChange("LikabaliToItanagar")}
          />
          <label htmlFor="route1">Likabali to Itanagar</label>

          <input
            type="radio"
            id="route2"
            name="route"
            value="Itanagar to Likabali"
            onChange={() => handleRouteChange("ItanagarToLikabali")}
          />
          <label htmlFor="route2">Itanagar to Likabali</label>
        </div>
      </div>

      <div className={styles.datePickerContainer}>
        <label className={styles.label}>Select a Date:</label>
        <DatePicker
          selected={selectedDate}
          minDate={today}
          onChange={(date) => setSelectedDate(date)} // Fetch seats for new date
          className={styles.datePicker}
          placeholderText="Choose a date"
          filterDate={(date) => !isDateUnavailable(date)}
        />
      </div>

      {seatsVisible && (
        <div className={styles.busLayout}>
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : (
            <div className={styles.busBody}>
              <div className={styles.seatingGrid}>{renderSeats()}</div>
            </div>
          )}
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        show={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleModalSubmit}
        seatNumber={selectedSeat}
      />
    </div>
  );
};

export default AdminBooking;
