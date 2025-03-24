const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Basic route for root path
app.get('/', (req, res) => {
  res.send('Welcome to the Contact Form API');
});

// Handle form submission
app.post('/submitForm', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json({ message: 'Form submitted successfully', contact: newContact });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
