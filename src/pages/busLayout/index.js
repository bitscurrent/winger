
"use client";

import { useState, useEffect } from "react";
import styles from "./BusSeatingLayout.module.css"; // Import the CSS module
import "@fortawesome/fontawesome-free/css/all.min.css";
import { URL } from "../../../config.js";
import Header from "../header";

const BusLayout = () => {
  const [reservedSeats, setReservedSeats] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch reserved seat data
  useEffect(() => {
    const fetchReservedSeats = async () => {
      // Extract route and date from the URL
      const queryParams = new URLSearchParams(window.location.search);
      const route = queryParams.get("route");
      const date = queryParams.get("date");

      console.log(route);
      // Ensure that both route and date exist
      if (!route || !date) {
        setError("Route or date is missing");
        setLoading(false); // Stop loading if route or date is not available
        return;
      }

      try {
        // Make the API request using the route and date from the URL
        const response = await fetch(`${URL}/api/get-seat-by-route-date`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ route, date }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch seat data: " + response.statusText);
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Check the API response

        // Check if data is an array before mapping
        if (Array.isArray(data)) {
          setReservedSeats(data.map((seat) => seat.seatNumber)); // Extract seat numbers that are reserved
        } else {
          // console.error("Unexpected data format:", data);
          // setError("Unexpected data format. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching seat data:", error);
        setError("Failed to fetch seat data. Please try again later.");
      } finally {
        setLoading(false); // Stop loading regardless of success or error
      }
    };

    fetchReservedSeats();
  }, []); // No dependencies since we're using window.location

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

if (seatNumber === null) {
  // Render empty space for null values
  return <div key={seatIndex} className={styles.emptySpace}></div>;
}

          // Check if it's the driver's seat
          const isDriverSeat = seatNumber === "Driver";
          const isReserved = reservedSeats.includes(seatNumber);

          return (
            <div
              key={seatNumber}
              className={`${styles.seat} ${
                isDriverSeat || isReserved ? styles.reserved : styles.available
              }`}
              onClick={() => {
                // Prevent action on the driver's seat
                if (!isDriverSeat && !isReserved) {
                  console.log(`Booking seat ${seatNumber}`); // Placeholder for booking logic
                }
              }}
              style={{ cursor: isDriverSeat ? "not-allowed" : "pointer" }} // Change cursor for the driver's seat
            >
              {isDriverSeat ? (
                <i className="fa-solid fa-car" style={{ color: 'gray' }}></i> // Icon for the driver's seat
              ) : (
                <i className="fa-solid fa-chair"></i>
              )}
              <span>{seatNumber}</span>
            </div>
          );  
        })}
      </div>
    ));
  };

  return (
    <>
      <Header />
      <div className={styles.busLayout}>
        <h1>Bus Seating Layout</h1>
        {loading ? (
          <p>Loading...</p> // Show a loading message while fetching data
        ) : (
          <div className={styles.busBody}>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error if present */}
            <div className={styles.seatingGrid}>{renderSeats()}</div>
            {reservedSeats.length === 0 && <p>No seats are currently reserved. You can book your seat!</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default BusLayout;



// "use client";

// import { useState, useEffect } from "react";
// import styles from "./BusSeatingLayout.module.css"; // Import the CSS module
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { URL } from "../../../config.js";
// import Header from "../header";
// import { useRouter } from "next/navigation"; // Ensure correct import for the latest Next.js

// const BusLayout = () => {
//   const [reservedSeats, setReservedSeats] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchReservedSeats = async () => {
//       if (!router.isReady) {
//         console.log("Router is not ready yet.");
//         return; // Return early if router is not ready
//       }

//       const { route, date } = router.query;
//       console.log("Route:", route, "Date:", date);

//       if (!route || !date) {
//         setError("Route or date is missing");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`${URL}/api/get-seat-by-route-date`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ route, date }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch seat data: " + response.statusText);
//         }

//         const data = await response.json();
//         setReservedSeats(data.map((seat) => seat.seatNumber));
//       } catch (error) {
//         console.error("Error fetching seat data:", error);
//         setError("Failed to fetch seat data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReservedSeats();
//   }, [router]); // Dependency remains as router

//   const renderSeats = () => {
//     const layout = [
//       [1, 2, null, "Driver"],
//       [3, 4, 5, 6],
//       [7, null, 8, 9],
//       [10, 11, 12, 13],
//     ];
//     return layout.map((row, rowIndex) => (
//       <div key={rowIndex} className={styles.row}>
//         {row.map((seatNumber, seatIndex) => {
//           if (!seatNumber) {
//             return <div key={seatIndex} className={styles.emptySpace}></div>;
//           }
//           const isReserved = reservedSeats.includes(seatNumber);
//           return (
//             <div
//               key={seatNumber}
//               className={`${styles.seat} ${
//                 isReserved ? styles.reserved : styles.available
//               }`}
//             >
//               <i className="fa-solid fa-chair"></i>
//               <span>{seatNumber}</span>
//             </div>
//           );
//         })}
//       </div>
//     ));
//   };

//   return (
//     <>
//       <Header />
//       <div className={styles.busLayout}>
//         <h1>Bus Seating Layout</h1>
//         {error ? (
//           <p style={{ color: "red" }}>{error}</p>
//         ) : loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className={styles.busBody}>
//             <div className={styles.seatingGrid}>{renderSeats()}</div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BusLayout;

