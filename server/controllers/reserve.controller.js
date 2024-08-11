import {WingerSeat} from "../models/wingerSeat.module.js"


const availableSeat = async (req, res) => {
    const { source, destination, date } = req.query;

    // Parse the date to ensure it's valid
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ message: 'Invalid date format' });
    }

    const route = await WingerSeat.findOne({ 
        'route.source': source, 
        'route.destination': destination, 
        date: parsedDate 
    });

    if (route) {
        const availableSeats = route.seats.filter(seat => !seat.isReserved);
        return res.json({ availableSeats });
    }
    return res.status(404).json({ message: 'Route not found' });
}

export {availableSeat}