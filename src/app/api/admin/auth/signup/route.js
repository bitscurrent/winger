
import dbConnect from '../../../../database/db.js';
import User from '../../../../models/user.model.js';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

dbConnect();

export async function POST(req) {
  try {
    const { fullName, email, phone, password } = await req.json();

   

    // Validate the input fields
    if (!fullName || !email || !phone || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user with isAdmin set to true
    const user = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
      isAdmin: true
    });

    // Return a success response
    return NextResponse.json({ success: true, message: 'Admin registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error registering admin:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
