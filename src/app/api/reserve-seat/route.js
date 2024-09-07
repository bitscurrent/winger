import { NextResponse } from 'next/server';
import dbConnect from '../../database/db.js';
import LikabaliToItanagar from '../../models/lkbToitn.js';



export async function POST(req) {
  try {
    const { userEmail, seatNumber } = await req.json();
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

    // Create a new reservation
    await LikabaliToItanagar.create({
      userEmail,
      seatNumber,
    });


    return NextResponse.json({ success: true, message: 'Seat reserved successfully' }, { status: 201 }); // 201 Created

  } catch (error) {
    console.error('Error reserving seat:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
