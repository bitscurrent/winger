import { NextResponse } from 'next/server';
import dbConnect from '../../../database/db.js';
import LikabaliToItanagar from '../../../models/lkbToitn.js';

export async function POST(req) {
  try {
    const { userEmail, seatNumber,fullName, notes, phone } = await req.json();
    // Connect to the database
    await dbConnect();

    // Basic validation
    if (!userEmail || !seatNumber) {
      return NextResponse.json({ error: 'User Email and seat number are required' }, { status: 400 });
    }

    // Check if the seat is already reserved
    const existingReservation = await LikabaliToItanagar.findOne({ seatNumber });
    if (existingReservation) {
      return NextResponse.json({ error: 'Seat is already reserved' }, { status: 409 }); // 409 Conflict
    }

    // Get current date and extract only the date part (YYYY-MM-DD)
    const currentDate = new Date().toISOString().split('T')[0]; // Extracts "YYYY-MM-DD"

    // Create a new reservation
    await LikabaliToItanagar.create({
     
      phone: phone || null,  // Set phone to null if it's not provided
      fullName : fullName || null,
      notes: notes || null,
      userEmail,
      seatNumber,
      date: currentDate,   // Store only the date part

    });

    return NextResponse.json({ success: true, message: 'Seat reserved successfully' }, { status: 201 }); // 201 Created

  } catch (error) {
    console.error('Error reserving seat:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
