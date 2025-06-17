import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We’d love to discuss your next project.</p>
          <div className="hero-contact">
            <div>Email: info@example.com</div>
            <div>Phone: +123 456 7890</div>
            <div>Address: 1234 Street Name, City, State</div>
          </div>
        </div>
      </div>

      {/* Get in Touch Form */}
      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <p>We’d love to discuss your next project.</p>
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="row">
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" />
          </div>

          <fieldset>
            <legend>What Kind of Project?</legend>
            <label><input type="radio" name="project" /> Commercial</label>
            <label><input type="radio" name="project" /> Landscaping</label>
            <label><input type="radio" name="project" /> Renovation</label>
            <label><input type="radio" name="project" /> Interior Styling</label>
            <label><input type="radio" name="project" /> General Inquiry</label>
            <label><input type="radio" name="project" /> Other</label>
          </fieldset>

          <input type="text" placeholder="Submit Requirements" />
          <textarea rows="4" placeholder="Message Box" />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <h2>Our Location</h2>
        <p>Find Our Office</p>
        <div className="map-placeholder"></div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <span>Logo</span>
          <nav>
            <a href="#">Projects</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
