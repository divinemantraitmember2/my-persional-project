// pages/api/users.js
import connectToDatabase from '../../../../lib/mongodb';
import User from '../../../../models/User';

const handler = async (req, res) => {
  await connectToDatabase();
  switch (req.method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
