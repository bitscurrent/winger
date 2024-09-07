import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(process.env.MONGODB_URI, {
   
  }).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection error:', err));
};

export default dbConnect;
