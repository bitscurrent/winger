import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String },
  phone: { type: Number },
}, 
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;