import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
    required: [true, 'Mobile number is required'],
  },
  comment: {
    type: String,
  },
  isStatus: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
    versionKey: false // Disable __v field
  });

const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
export default Enquiry;