const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Local MongoDB connection
mongoose.connect("mongodb://localhost:27017/paifundtech")
  .then(() => console.log('MongoDB connected to localhost'))
  .catch((err) => console.log(err));

// Define the schema
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'mbsamu222@gmail.com', 
    pass: process.env.EMAIL_PASS || 'Senthil@1974' 
  }
});

// Basic route for root path
app.get('/', (req, res) => {
  res.send('Welcome to the Contact Form API');
});

// Handle form submission and send email
app.post('/submitForm', async (req, res) => {
  try {
    // Create contact in database
    const newContact = await Contact.create(req.body);

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'mbsamu222@gmail.com',
      subject: `New Contact Form Submission from ${req.body.firstName} ${req.body.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${req.body.firstName} ${req.body.lastName}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phoneNumber || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${req.body.message}</p>
        <p><em>This message was sent from your website contact form.</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(201).json({
      message: 'Form submitted successfully and email notification sent',
      contact: newContact
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({
      message: 'Error processing form submission',
      error: error.message
    });
  }
});

// Optional: Add an endpoint to retrieve all contact submissions (for admin purposes)
app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    res.status(500).json({ message: 'Error retrieving contacts' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});