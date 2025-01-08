
import { NextResponse } from 'next/server';
import dbConnect from '../../../database/db.js';
import LikabaliToItanagar from '../../../models/lkbToitn.js';
import ItanagarToLikabali from '../../../models/ItnTolkb.js';

export async function POST(req) {
  try {
    const { seatNumber, date, route } = await req.json();

    // Connect to the database
    await dbConnect();

    // Basic validation
    if (!date || !seatNumber || !route) {
      return NextResponse.json(
        { error: 'Date, seat number, and route are required to cancel a reservation.' },
        { status: 400 }
      );
    }

    // Parse the provided date to start and end of the day
    const startOfDay = new Date(date);
    startOfDay.setUTCHours(0, 0, 0, 0); // Start of the day in UTC

    const endOfDay = new Date(date);
    endOfDay.setUTCHours(23, 59, 59, 999); // End of the day in UTC

    // Select the appropriate model based on the route
    let selectedModel;
    if (route === 'LikabaliToItanagar') {
      selectedModel = LikabaliToItanagar;
    } else if (route === 'ItanagarToLikabali') {
      selectedModel = ItanagarToLikabali;
    } else {
      return NextResponse.json({ error: 'Invalid route specified' }, { status: 400 });
    }

    // Attempt to cancel the reservation
    const result = await selectedModel.findOneAndDelete({
      seatNumber,
      date: { $gte: startOfDay, $lte: endOfDay }, // Match date within the range
    });

    if (!result) {
      return NextResponse.json(
        { message: 'No reservation found for the specified seat and date.' },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      { message: 'Reservation cancelled successfully.', cancelledReservation: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error cancelling reservation:', error);
    return NextResponse.json(
      { error: 'An error occurred while cancelling the reservation.' },
      { status: 500 }
    );
  }
}
