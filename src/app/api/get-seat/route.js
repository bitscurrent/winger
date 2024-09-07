import dbConnect from "../../database/db.js";
import LikabaliToItanagar from "../../models/lkbToitn.js";
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
      // Connect to the database
      await dbConnect();
  
      // Fetch all seat reservations
      const reservations = await LikabaliToItanagar.find();
      
      // Optionally: Filter by seatNumber or userEmail if query params are provided
      // const { seatNumber, userEmail } = req.query;
      // const reservations = await LikabaliToItanagar.find({ seatNumber, userEmail });
  
      return NextResponse.json(reservations, { status: 200 }); // 200 OK
  
    } catch (error) {
      console.error('Error fetching reservations:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}