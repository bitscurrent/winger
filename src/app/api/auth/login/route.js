
import dbConnect from '../../../database/db.js';
import User from '../../../models/user.model.js';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Connect to the database
dbConnect();

// Exporting a named function for the POST method
export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set the token in a cookie
    const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });

    // Secure and HttpOnly options are recommended for security
    response.cookies.set('authToken', token, {
        httpOnly: true, // Set to true to prevent client-side JavaScript from accessing the cookie
        secure: false, // Set to false for development (since you're likely using HTTP); change to true in production
        sameSite: 'strict', // Keep this as 'strict' to prevent CSRF attacks
        maxAge: 60 * 60, // 1 hour in seconds
      });

    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
