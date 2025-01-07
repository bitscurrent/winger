


import mongoose from 'mongoose';

const itanagarToLikabaliSchema = new mongoose.Schema({
  userEmail: {  type: String,},
  seatNumber: {  type: Number, required: true },
  date: { type: Date},
  testField: {type: String},
  notes:{type: String, required: true},
  phone:{type: Number, required: true},
  fullName :{type:String}


},

{
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const ItanagarToLikabali = mongoose.models.ItanagarToLikabali || mongoose.model('ItanagarToLikabali', itanagarToLikabaliSchema);

export default ItanagarToLikabali;
