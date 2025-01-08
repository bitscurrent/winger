

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
        { error: 'Date, seat number, and route are required to view seat details.' },
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

    // Query the database for the seat details within the date range
    const seatDetails = await selectedModel.findOne({
      seatNumber,
      date: { $gte: startOfDay, $lte: endOfDay }, // Match date within the range
    });

    if (!seatDetails) {
      return NextResponse.json({ message: 'No reservation found for the specified seat.' }, { status: 404 }); // 404 Not Found
    }

    // Return the seat details
    return NextResponse.json({ seatDetails }, { status: 200 });
  } catch (error) {
    console.error('Error fetching seat details:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching seat details.' },
      { status: 500 }
    );
  }
}
