const mongoose = require('mongoose');

const projectSubmissionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  projectType: {
    type: String,
    required: true,
    enum: ['Residential', 'Commercial', 'Renovation', 'Landscaping', 'Interior Styling', 'General Inquiry', 'Other'],
  },
  requirements: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  requirementsFile: {
    filename: String,
    path: String,
    mimetype: String
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('ProjectSubmission', projectSubmissionSchema);
