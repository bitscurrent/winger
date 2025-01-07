
import { NextResponse } from 'next/server';
import dbConnect from '../../../database/db.js';
import LikabaliToItanagar from '../../../models/lkbToitn.js';
import ItanagarToLikabali from '../../../models/ItnTolkb.js';

export async function POST(req) {
  try {
    const { userEmail, seatNumber, fullName, notes, phone, route } = await req.json();

    // Connect to the database
    await dbConnect();

    // Basic validation
    if (!phone || !seatNumber || !notes || !route) {
      return NextResponse.json({ error: 'Phone, seat number, notes, and route are required' }, { status: 400 });
    }

    // Select the appropriate model based on the route
    let selectedModel;
    if (route === 'LikabaliToItanagar') {
      selectedModel = LikabaliToItanagar;
    } else if (route === 'ItanagarToLikabali') {
      selectedModel = ItanagarToLikabali;
    } else {
      return NextResponse.json({ error: 'Invalid route specified' }, { status: 400 });
    }

    // Check if the seat is already reserved
    const existingReservation = await selectedModel.findOne({ seatNumber });
    if (existingReservation) {
      return NextResponse.json({ error: 'Seat is already reserved' }, { status: 409 }); // 409 Conflict
    }

    // Get current date and extract only the date part (YYYY-MM-DD)
    const currentDate = new Date().toISOString().split('T')[0];

    // Create a new reservation
    await selectedModel.create({
      phone,
      fullName: fullName || null,
      notes,
      userEmail,
      seatNumber,
      date: currentDate,
    });

    return NextResponse.json({ success: true, message: 'Seat reserved successfully' }, { status: 201 }); // 201 Created
  } catch (error) {
    console.error('Error reserving seat:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
