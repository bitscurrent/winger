


import mongoose from 'mongoose';

const likabaliToItanagarSchema = new mongoose.Schema({
  userEmail: { 
    type: String, 
   
  },
  seatNumber: { 
    type: Number, 
    required: true 
  },
},
{
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const LikabaliToItanagar = mongoose.models.LikabaliToItanagar || mongoose.model('LikabaliToItanagar', likabaliToItanagarSchema);

export default LikabaliToItanagar;


