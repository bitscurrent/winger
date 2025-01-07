

import LikabaliToItanagar from "../../models/lkbToitn.js";
import dbConnect from "../../database/db.js";
import { NextResponse } from 'next/server';
import ItanagarToLikabali from "../../models/ItnTolkb.js";

export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the JSON body from the request
    const { route, date } = await req.json();

    // Convert the date string into a Date object for querying MongoDB
    const queryDate = new Date(date);

    // Fetch seat details based on route and date
    let seatDetails;
    if (route === "LikabaliToItanagar") {
      seatDetails = await LikabaliToItanagar.find({ date: queryDate });  // Match date using the Date object
    } else {
      seatDetails = await ItanagarToLikabali.find({ date: queryDate });
    }

    // If no seat details are found
    if (!seatDetails || seatDetails.length === 0) {
      return NextResponse.json(
        { message: "No reservation is made, so pick your best seat" },
        { status: 200 }  // 200 OK status with custom message
      );
    }

    // Return seat details in the response if they exist
    return NextResponse.json(seatDetails, { status: 200 });

  } catch (error) {
    console.error("Error fetching seat details:", error);
    return NextResponse.json({ message: "Failed to fetch seat details" }, { status: 500 });
  }
}
