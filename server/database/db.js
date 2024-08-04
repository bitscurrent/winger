import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI
  try {
    await mongoose.connect(mongoURI);
    console.log("Database Connected");

    // Listen for connection events and handle errors
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to DB');
    });

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

