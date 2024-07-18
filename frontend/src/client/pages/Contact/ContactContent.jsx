import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Contactus.png';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import './ContactContent.css'; 

const ContactContent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({ success: false, error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormStatus({ success: true, error: false });
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({ success: false, error: true });
      }
      navigate('/confirmation');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ success: false, error: true });
    }
  };

  const emailAddress = 'info@synergyeng.biz';
  const mapLocationUrl = 'https://maps.app.goo.gl/jFTYCHwoe5arQnGZ8';

  return (
    <section className="contact-us-section">
      <div className="contact-container">
      <div className="contact-left">
      <AnimatedSection animationType="slideInFromLeft">
          <h1>Get in Touch<br />With <span className='highlight'>US</span></h1>
          <h2>Let's Talk!</h2>
          <p>Get in touch with us using the enquiry form or contact information below.</p>
          <form className="contact-form">
            <div className='form-row'>
              <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              required 
              value={formData.firstName} 
              onChange={handleChange} />
              <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              required 
              value={formData.lastName} 
              onChange={handleChange} />
            </div>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required
            value={formData.email}
            onChange={handleChange} />
            <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required
            value={formData.subject}
            onChange={handleChange} />
            <textarea 
            name="message" 
            placeholder="Message" 
            required
            value={formData.message}
            onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
            {formStatus.success && <p className='success-message'>Message sent successfully!</p>}
            {formStatus.error && <p className='error-message'>Failed to send the message. Please try again.</p>}
          </form>
      </AnimatedSection>
        </div>
        <div className="contact-right">
        <AnimatedSection animationType="slideInFromRight">
        <img src={Image} alt="Contact Us" className="contact-image" />
          <div className="contact-info">
            <div className="contact-info-item">
              <div className='icon'>
                <FaPhone size={35}/>
              </div>
              <div className='contact-item-text'>
                <p className='contact-info-header'>Phone</p>
                <p className='contact-info-text'>+94 112 156 815</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className='icon'>
                <MdEmail size={35}/>
              </div>
              <div className='contact-item-text'>
                <p className='contact-info-header'>Email</p>
                <p className='contact-info-text'>
                  <a href={`mailto:${emailAddress}`} className='email-link'>{emailAddress}</a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className='icon'>
                <FaMapMarkerAlt size={35}/>
              </div>
              <div className='contact-item-text'>
                <p className='contact-info-header'>Location</p>
                <p className='contact-info-text'>
                  <a href={mapLocationUrl} className="map-link" target="_blank" rel="noopener noreferrer">
                    452 B Susilarama Road, Malabe, Sri Lanka
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="follow-us">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href='https://web.facebook.com/synergypvtltd'><FaFacebook size={35}/></a>
              <a href='https://www.linkedin.com/company/synergypvtltd/'><FaLinkedin size={35}/></a>
              <a href='https://www.instagram.com/synergypvtltd'><FaInstagram size={35}/></a>
            </div>
          </div>
        </AnimatedSection>
        </div>
      </div>
      <div className='map-container animate-on-load'>
      <AnimatedSection animationType="zoomIn">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.888300732019!2d79.95935711140103!3d6.903959018594701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2572a454fd22f%3A0x58a6feabd0342671!2sSynergy%20Engineering%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1717603168029!5m2!1sen!2slk" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='company-location'></iframe>
      </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactContent;

