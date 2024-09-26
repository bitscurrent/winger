import mongoose from 'mongoose';
import dbConnect from '../../database/db';
import UnavailableDate from '../../models/unavailable.model';


export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect()

    // Fetch all unavailable dates from the database
    const unavailableDatesData = await UnavailableDate.find({});

    // Map the dates into an array of strings (YYYY-MM-DD)
    const unavailableDates = unavailableDatesData.map((dateEntry) =>
      dateEntry.date.toISOString().split('T')[0]
    );

    // Return the unavailable dates in the response
    return new Response(JSON.stringify({ unavailableDates }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching unavailable dates:', error);
    return new Response(JSON.stringify({ error: 'Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the JSON body of the request
    const { dates } = await request.json();

    // Validate that dates is an array and contains valid date strings
    if (!Array.isArray(dates) || !dates.every(date => !isNaN(new Date(date)))) {
      return new Response(
        JSON.stringify({ error: 'Invalid date format. Please provide an array of valid date strings.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Insert each date into the database
    const dateDocs = dates.map(date => ({ date: new Date(date) }));
    await UnavailableDate.insertMany(dateDocs);

    // Return a success response
    return new Response(JSON.stringify({ message: 'Dates added successfully.' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving unavailable dates:', error);
    return new Response(JSON.stringify({ error: 'Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
