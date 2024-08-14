import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add logic to send the message to your email or backend server here
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>If you have any questions or feedback, feel free to reach out to us using the contact form below or through our email and phone.</p>
      </div>
      {submitted ? (
        <p className="contact-response">Thank you for contacting us. We will get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label className="contact-label">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="contact-input"
          />
          <label className="contact-label">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="contact-input"
          />
          <label className="contact-label">Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            className="contact-textarea"
          />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
