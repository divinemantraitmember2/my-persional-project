// pages/api/login.js
import connectToDatabase from '../../../../lib/mongodb';
import User from '../../../../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

const handler = async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
    
      // Validate password
    
      const isMatch = await bcrypt.compare(password, user.password);
      
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Create a JWT token
      let cliam={
        name:user.name,
        mobile:user.mobile,
        email:user.email,
      }
      const token = jwt.sign(cliam, SECRET_KEY, { expiresIn: '1h' });
       res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
