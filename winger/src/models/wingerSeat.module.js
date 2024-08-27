import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    seatNumber: { type: Number, required: true, unique: true },
    isReserved: { type: Boolean, default: false } // true if reserved, false if available
});

const wingerSeatSchema = new mongoose.Schema({
    route: {
        source: { type: String, required: true },
        destination: { type: String, required: true },
    },
    date: { type: Date, required: true }, // For advance reservations
    seats: [seatSchema], // Array of seat objects
    totalSeats: { type: Number, default: 13 } // Total number of seats
});

// Create a model
export const WingerSeat = mongoose.model('WingerSeat', wingerSeatSchema);

