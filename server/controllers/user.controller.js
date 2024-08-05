import User from "../models/user.model.js";
import bcrypt from "bcrypt"

const registerUser= async(req, res)=>{

        const { username, password, fullName, phone, email } = req.body;
      
        try {
          // Check if the user exists in the db
          const existingUser = await User.findOne({
            $or: [
              { email},
              { username}
            ]
          });
      
          if (existingUser) {
            return res.json({ message: "User exists" });
          }
      
          // Hash the password
          const hashedPassword = await bcrypt.hash(password,10)
    
          // Create a new user
          const newUser = await User.create({ username, password:hashedPassword, fullName, phone, email });
      
          res.status(201).json({ message: "User registered successfully", user: newUser });
        } catch (error) {
          res.status(500).json({ message: "Error registering user", error: error.message });
        }
      }
      


      const loginUser = async (req, res) => {
        const { username, email, phone, password } = req.body;
      
        try {
          // Check if user exists
          const user = await User.findOne({
            $or: [
              { username },
              { email },
              { phone }
            ]
          });
      
          if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
          }
      
          // Check if the password matches
          const isPasswordMatch = await bcrypt.compare(password, user.password);
      
          if (!isPasswordMatch) {
            return res.status(401).json({ message: "Incorrect password" });
          }

//             // Generate a JWT token   

//  const token = generateToken(user._id);

//  // Set the token in a secure HTTP-only cookie 
//  res.cookie('jwt', token, { httpOnly: true });

      
          // Send success response with user information (optional)
          res.status(200).json({
            message: 'Login successful',
            user: {
              id: user._id,
              username: user.username,
              email: user.email,
              phone: user.phone,
              // ... other user data if needed
            }
          });
        } catch (error) {
          console.error('Error logging in user:', error);
          res.status(500).json({ message: "Error logging in user", error: error.message });
        }
      };
      
      
export {registerUser, loginUser}