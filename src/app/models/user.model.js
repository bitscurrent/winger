import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }, // Default to false for normal users
},

  { timestamps: true }
)

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;