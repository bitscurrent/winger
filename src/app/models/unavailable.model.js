import mongoose from 'mongoose';

// Define the schema for unavailable dates
const unavailableDateSchema = new mongoose.Schema({
    date: { type: Date, required: true },
  }, {
    timestamps: true, 
  });
  
  // Avoid model recompilation in development or multiple calls
  const UnavailableDate = mongoose.models.UnavailableDate || mongoose.model('UnavailableDate', unavailableDateSchema);

  export default UnavailableDate