


import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import User from '../../../models/user.model.js';
import dbConnect from '../../../database/db.js';


export async function POST(req) {
  // Connect to the database
  await dbConnect()

  // Get the required fields from the request body
  const { fullName, email, phone, password } = await req.json();

  // Check for all required fields
  if (!fullName || !email || !phone || !password) {
    return new Response(
      JSON.stringify({ error: 'All fields are required' }),
      { status: 400 }
    );
  }

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: 'Email already in use' }),
        { status: 409 }  // 409 Conflict
      );
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
    });

    // Return a success response
    return new Response(
      JSON.stringify({ success: true, message: 'User registered successfully' }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    // Handle validation errors and other errors
    if (error.name === 'ValidationError') {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 400 }
      );
    }

    // General error response
    return new Response(
      JSON.stringify({ error: 'Registration failed' }),
      { status: 500 }
    );
  }
}
