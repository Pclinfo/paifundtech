import React, { useState }  from 'react'
import './Hero.css';
import ia_hero_img_1 from '../Assets/ia_hero_img_1.png'
import Modal from 'react-modal';

const Hero = () => {



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/submitForm', {
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
      closeModal();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };




  return (
    <div className='hero'>
      <div className="hero-ai-img-1">
        <img src={ia_hero_img_1} alt="" />
        <div className="hero-ai-content">
          <h2>Strategic Expertise and Financial Solutions to Empower Your Business</h2>
          <p>Delivering bespoke financial solutions with integrity, expertise, and innovation to drive your business success.</p>
          <button onClick={openModal}>Get Started</button>
        </div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal-content">
          <div className="pai-contact-form">
            <form onSubmit={handleSubmit}>
              <div className="pai-form-group">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="pai-form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="pai-form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Write your message.." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit">Send Message</button>
              {isSubmitted && <p>Thank you! Your form has been submitted.</p>}
            </form>
          </div>
        </Modal>
      </div>
      <div className="hero-ai-content-1">
        <p>At <span className='r-c'>Prachida Alternative Investment Fundtech</span>, we are dedicated to providing companies with the comprehensive financial capabilities they need to excel in an increasingly competitive landscape. Through our expertise in <span className='r-c'>Tax, Audit & Assurance, and Management Consulting,</span> we equip you with actionable insights and expert guidance to streamline operations, overcome regulatory challenges, and drive sustainable growth.</p>
      </div>
    </div>
  )
}

export default Hero
