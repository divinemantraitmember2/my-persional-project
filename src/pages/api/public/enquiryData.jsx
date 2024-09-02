// pages/api/enquiry.js
import connectToDatabase from '../../../lib/mongodb';
import Enquiry from '../../../models/Enquiry';

export default async function handler(req, res) {
  await connectToDatabase();

  const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10

  try {
    // Calculate total number of Enquiry for pagination
    const totalEnquiry = await Enquiry.countDocuments({});
    const totalPages = Math.ceil(totalEnquiry / limit);

    // Fetch Enquiry with pagination
    const enquirys = await Enquiry.find({})
      .limit(parseInt(limit))  // Number of results per page
      .skip((page - 1) * limit)  // Skip results for previous pages
      .exec();

    // Respond with the enquirys and pagination info
    res.status(200).json({
      enquirys,          // Array of enquirys
      totalPages,     // Total number of pages
      currentPage: parseInt(page),  // Current page
    });
  } catch (error) {
    console.error('Error fetching enquirys:', error);
    res.status(500).json({ error: 'Failed to fetch enquirys' });
  }
}
