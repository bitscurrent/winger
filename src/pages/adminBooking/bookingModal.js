import { useState } from "react";
import styles from "./BookingModal.module.css"; // Importing the CSS module

const BookingModal = ({ show, onClose, onSubmit, seatNumber }) => {
  const [userEmail, setUserEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  if (!show) return null; // Don't render if the modal is not visible

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ userEmail, fullName, phone, notes, seatNumber });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Reserve Seat {seatNumber}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>User Email:</label>
            <input
              type="email"
              className={styles.inputField}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name:</label>
            <input
              type="text"
              className={styles.inputField}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Phone (optional):</label>
            <input
              type="tel"
              className={styles.inputField}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Notes:</label>
            <textarea
              className={styles.textArea}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          <div className={styles.modalActions}>
            <button type="submit" className={styles.submitBtn}>
              Book
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
