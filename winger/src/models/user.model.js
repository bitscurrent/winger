
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

// Check if the model already exists to avoid OverwriteModelError
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
