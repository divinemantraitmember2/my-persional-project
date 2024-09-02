// pages/api/private/users.js
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';
import { authenticate } from '../../../middleware/auth';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      authenticate(req, res, async () => {
        try {
          const users = await User.find({}); // Fetch all user details
          res.status(200).json(users);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
