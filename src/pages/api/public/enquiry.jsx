// pages/api/enquiry.js
import connectToDatabase from '../../../lib/mongodb';
import Enquiry from '../../../models/Enquiry';

const handler = async (req, res) => {
    await connectToDatabase();
  
    let numberRe= /^[1-9]{1}[0-9]{9}$/;
    let emailRe=/^\S+@\S+\.\S+$/;

    if (req.method === 'POST') {
      const { name, email, mobile, comment,isStatus } = req.body;
  
      if (!numberRe.test(mobile)) {
        return res.status(400).json({ error: 'Please enter a valid mobile address' });
      }

      if (!emailRe.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address' });
      }
      try {
        const enquiry = new Enquiry({ name, email, mobile, comment, isStatus });
        await enquiry.save();
        res.status(200).json({ message: 'Enquiry submitted successfully' });
      } catch (error) {
        if (error.name === 'ValidationError') {
          const messages = Object.values(error.errors).map(err => err.message);
          return res.status(400).json({ error: 'Validation Error', messages });
        } else {
          return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };
  
  export default handler;
