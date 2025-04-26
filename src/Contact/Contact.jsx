import React from 'react';
    import './Contact.css';

    const Contact = () => {
      return (
        <div className="contact-page">
          <h1>Contact Us</h1>
          <p>Have a question or need assistance? Reach out to us!</p>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p><strong>Email:</strong> support@evsolutions.com</p>
              <p><strong>Phone:</strong> +1-800-555-1234</p>
              <p><strong>Address:</strong> 123 Green Drive, Eco City, EV 90210</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      );
    };

    export default Contact;