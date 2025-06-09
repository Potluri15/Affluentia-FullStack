import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="contact-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">Interior Design Studio</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/residential" className="nav-link">Residential</Link>
            <Link to="/commercial" className="nav-link">Commercial</Link>
            <Link to="/architecture" className="nav-link">Architecture</Link>
            <Link to="/building-planning" className="nav-link">Planning</Link>
            <Link to="/elevation" className="nav-link">Elevation</Link>
            <Link to="/landscaping" className="nav-link">Landscaping</Link>
            <Link to="/contact" className="nav-link active">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Ready to transform your space? Get in touch with our expert design team to 
              discuss your project and bring your vision to life.
            </p>
          </div>
          <div className="hero-visual">
            <div className="contact-showcase">
              <div className="contact-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">Get In Touch</h2>
              <p className="contact-description">
                We'd love to hear about your project. Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3 className="contact-label">Email</h3>
                    <p className="contact-value">hello@designstudio.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3 className="contact-label">Phone</h3>
                    <p className="contact-value">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3 className="contact-label">Address</h3>
                    <p className="contact-value">
                      123 Design Street<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-text">
                    <h3 className="contact-label">Hours</h3>
                    <p className="contact-value">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit} className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="projectType" className="form-label">Type of Project</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="architecture">Architecture</option>
                    <option value="planning">Building Planning</option>
                    <option value="elevation">Elevation Design</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="5"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <div className="location-content">
            <h2 className="location-title">Our Location</h2>
            <p className="location-description">
              Visit our design studio in the heart of the city, where creativity meets functionality.
            </p>
            
            <div className="location-map">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <div className="map-marker">📍</div>
                  <p className="map-text">123 Design Street, New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="location-info">
              <div className="location-details">
                <h3 className="location-heading">Studio Information</h3>
                <p className="location-text">
                  Our studio is conveniently located in Manhattan's design district, easily accessible 
                  by public transportation and with parking available nearby.
                </p>
                
                <div className="location-features">
                  <div className="feature-item">
                    <span className="feature-icon">🚇</span>
                    <span className="feature-text">2 blocks from subway station</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🅿️</span>
                    <span className="feature-text">Parking garage across the street</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">♿</span>
                    <span className="feature-text">Wheelchair accessible entrance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How long does a typical project take?</h3>
              <p className="faq-answer">
                Project timelines vary depending on scope and complexity. Residential projects typically 
                take 8-16 weeks, while commercial projects can range from 12-24 weeks.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Do you work with existing contractors?</h3>
              <p className="faq-answer">
                Yes, we can collaborate with your preferred contractors or recommend trusted 
                professionals from our network of skilled craftspeople and builders.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What's included in the initial consultation?</h3>
              <p className="faq-answer">
                Our initial consultation includes site evaluation, discussion of your vision and 
                requirements, preliminary design concepts, and project timeline and budget overview.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Do you provide 3D visualizations?</h3>
              <p className="faq-answer">
                Yes, we create detailed 3D renderings and visualizations to help you see how 
                your space will look before construction begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">Interior Design Studio</h3>
              <p className="footer-description">
                Creating beautiful, functional spaces that enhance the way you live and work.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                <li><Link to="/residential" className="footer-link">Residential Design</Link></li>
                <li><Link to="/commercial" className="footer-link">Commercial Spaces</Link></li>
                <li><Link to="/building-planning" className="footer-link">Building Planning</Link></li>
                <li><Link to="/elevation" className="footer-link">Elevation Design</Link></li>
                <li><Link to="/landscaping" className="footer-link">Landscaping</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><a href="#" className="footer-link">Our Process</a></li>
                <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact">
                <li>hello@designstudio.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Design Street</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Interior Design Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ContactPage