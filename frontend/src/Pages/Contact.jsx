import React, { useState } from 'react';
import './CSS/Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure you're using process.env.REACT_APP_API_URL to get the correct API URL
      const response = await fetch(`${process.env.REACT_APP_API_URL}/submitForm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <div className='web-info'>
      <div className="web-info-title-1">
        <h1><span className='r-c'>Contact Us !</span></h1>
      </div>
      <div className="web-contact-section">
        <div className="web-contact-info">
          <h2><span className='r-c'>Contact Information</span></h2>
          <p>Say something to start a live chat!</p>
          <ul className="contact-details">
            <li><FaPhoneAlt /> +91 72002-76740</li>
            <li><FaEnvelope /> hr.paifundtech@gmail.com</li>
            <li><FaMapMarkerAlt /> No.2/ 156, 1st Floor, Poonamalle-Avadi Road,<br /> Senneerkuppam, Chennai-56</li>
          </ul>
          <p><span className='r-c'>Business Hours:</span><br />
            Monday - Saturday: 10 AM - 6 PM<br />
            Sunday: Closed
          </p>
        </div>
        <div className="web-contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <label>Phone Number</label>
              <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Write your message.." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Send Message</button>
            {isSubmitted && <p>Thank you! Your form has been submitted.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
