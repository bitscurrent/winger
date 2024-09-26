import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '../../../database/db.js';
import UnavailableDate from '../../../models/unavailable.model.js';

// Ensure the database is connected
dbConnect();

export async function POST(req) {
  try {
    // Parse the request body
    const { date } = await req.json();

    // Validate if date exists and is in a valid format
    if (!date || isNaN(new Date(date).getTime())) {
      return NextResponse.json({ error: 'Invalid or missing date.' }, { status: 400 });
    }

    // Check if the date exists before deletion
    const existingDate = await UnavailableDate.findOne({ date: new Date(date) });
    if (!existingDate) {
      return NextResponse.json({ error: 'Date not found.' }, { status: 404 });
    }

    // Remove the entry from the database
    await UnavailableDate.deleteOne({ date: new Date(date) });

    // Return success message
    return NextResponse.json({ message: 'Date removed successfully', date: existingDate.date }, { status: 200 });

  } catch (error) {
    console.error('Error removing unavailable date:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
