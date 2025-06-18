const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const ProjectSubmission = require('../models/ProjectSubmission');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx', '.txt', '.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, DOCX, TXT, JPG, JPEG, and PNG files are allowed.'));
    }
  }
});

// POST route to create a new project submission
router.post('/', upload.single('requirementsFile'), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      projectType,
      requirements,
      message
    } = req.body;

    const submission = new ProjectSubmission({
      firstName,
      lastName,
      email,
      phoneNumber,
      projectType,
      requirements,
      message,
      requirementsFile: req.file ? {
        filename: req.file.filename,
        path: req.file.path,
        mimetype: req.file.mimetype
      } : null
    });

    await submission.save();
    res.status(201).json({
      success: true,
      message: 'Project submission received successfully',
      submission
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error submitting project',
      error: error.message
    });
  }
});

// GET route to fetch all submissions (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const submissions = await ProjectSubmission.find().sort({ submittedAt: -1 });
    res.status(200).json({
      success: true,
      submissions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching submissions',
      error: error.message
    });
  }
});

module.exports = router;
