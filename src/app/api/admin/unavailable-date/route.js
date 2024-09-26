
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '../../../database/db.js';

// Ensure the database is connected
dbConnect();

// Define the schema for unavailable dates
const unavailableDateSchema = new mongoose.Schema({
  date: { type: Date, required: true },
}, {
  timestamps: true, 
});

// Avoid model recompilation in development or multiple calls
const UnavailableDate = mongoose.models.UnavailableDate || mongoose.model('UnavailableDate', unavailableDateSchema);

export async function POST(req) {
  try {
    // Parse the request body
    const { date } = await req.json();

    // Validate if date exists and is in a valid format
    if (!date || isNaN(new Date(date).getTime())) {
      return NextResponse.json({ error: 'Invalid or missing date.' }, { status: 400 });
    }

   // check  if that date is already available in the database

   const checkDate = await UnavailableDate.findOne({ date: new Date(date) });
   if (checkDate){
    return NextResponse.json({ error: 'alreday marked as date unavailable.' }, { status: 400 });
   }

    // Create a new entry in the database with the date
    const createdDate = await UnavailableDate.create({ date: new Date(date) });

    // Return the newly created date as a response
    return NextResponse.json({ message: 'Date added successfully', date: createdDate.date }, { status: 200 });

  } catch (error) {
    console.error('Error saving unavailable date:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
