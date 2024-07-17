import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import './ContactusSection.css';
import contactImage from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Contact-home.png';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

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
                navigate('/confirmation');
            } else {
                console.error('Failed to send the message');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const emailAddress = 'info@synergyeng.biz';
    const mapLocationUrl = 'https://maps.app.goo.gl/jFTYCHwoe5arQnGZ8';

    return (
        <section className="contact-us-home-section">
            <div className="contact-us-left">
            <AnimatedSection animationType="slideInFromLeft">
                <img src={contactImage} alt="Contact Us" className="contact-image" />
                <div className="contact-info">
                    <div className="contact-item">
                        <FaPhone size={34} />
                        <div className='contact-item-text'>
                            <p className='contact-info-header-home'>Give Us a call</p>
                            <p className='contact-info-text-home'>+94 112 156 815</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <MdEmail size={34} />
                        <div className='contact-item-text'>
                            <p className='contact-info-header-home'>Send Us an email</p>
                            <p className='contact-info-text-home'>
                            <a href={`mailto:${emailAddress}`} className='email-link'>{emailAddress}</a>
                            </p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt size={34} />
                        <div className='contact-item-text'>
                            <p className='contact-info-header-home'>Come see Us</p>
                            <p className='contact-info-text-home'>
                                <a href={mapLocationUrl} className="map-link" target="_blank" rel="noopener noreferrer">
                                452 B Susilarama Road, Malabe, Sri Lanka
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                </AnimatedSection>
            </div>
            <div className="contact-us-right">
            <AnimatedSection animationType="slideInFromRight">
                <h2 className='Header'>
                    <span className='contact-text'>Contact</span>
                    <span className='us-text'>US</span>
                </h2>
                <p className='Header-text'>We would love to hear from you. Please fill out the form below and we will get in touch with you shortly.</p>
                <form className="contact-form">
                    <div className='name-fields'>
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ContactUs;
