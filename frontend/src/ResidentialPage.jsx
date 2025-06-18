import React from 'react'
import { Link } from 'react-router-dom'
import './ResidentialPage.css'

const ResidentialPage = () => {
  return (
    <div className="residential-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">Interior Design Studio</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/residential" className="nav-link active">Residential</Link>
            <Link to="/commercial" className="nav-link">Commercial</Link>
            <Link to="/architecture" className="nav-link">Architecture</Link>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="residential-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Tailored Designs for Every Home</h1>
              <p className="hero-subtitle">
                Creating personalized living spaces that reflect your unique style and enhance your daily life 
                through thoughtful design and attention to detail.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">Start Your Project</Link>
                <Link to="/portfolio" className="btn-secondary">View Our Work</Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-content">
                <div className="hero-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Residential Services</h2>
            <p className="section-subtitle">
              From concept to completion, we provide comprehensive residential design solutions
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3 className="service-title">Whole Home Design</h3>
              <p className="service-description">
                Complete home transformations from layout planning to final styling, 
                creating cohesive and functional living environments.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🛏️</div>
              <h3 className="service-title">Room Renovations</h3>
              <p className="service-description">
                Individual room makeovers including bedrooms, kitchens, bathrooms, 
                and living areas tailored to your specific needs.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3 className="service-title">Interior Styling</h3>
              <p className="service-description">
                Professional styling services to enhance your existing space with 
                carefully curated furniture, accessories, and decor.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📐</div>
              <h3 className="service-title">Space Planning</h3>
              <p className="service-description">
                Optimizing your home's layout and flow to maximize functionality 
                and create more efficient living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Designs Section */}
      <section className="exceptional-section">
        <div className="container">
          <div className="exceptional-content">
            <h2 className="exceptional-title">Exceptional Residential Designs</h2>
            <p className="exceptional-description">
              Every home tells a story. Our residential design approach focuses on understanding your lifestyle, 
              preferences, and dreams to create spaces that are not only beautiful but perfectly suited to how you live.
            </p>
            
            <div className="design-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <h3 className="feature-title">Personalized Approach</h3>
                  <p className="feature-text">
                    We work closely with you to understand your vision and lifestyle requirements.
                  </p>
                </div>
                
                <div className="feature-item">
                  <h3 className="feature-title">Quality Materials</h3>
                  <p className="feature-text">
                    Only the finest materials and finishes are selected for lasting beauty and durability.
                  </p>
                </div>
                
                <div className="feature-item">
                  <h3 className="feature-title">Functional Design</h3>
                  <p className="feature-text">
                    Beautiful spaces that work seamlessly with your daily routines and activities.
                  </p>
                </div>
                
                <div className="feature-item">
                  <h3 className="feature-title">Timeless Style</h3>
                  <p className="feature-text">
                    Classic design principles ensure your home remains stylish for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="projects-title">Featured Residential Projects</h2>
          
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-image project-image-1">
                <div className="project-overlay">
                  <h3 className="project-title">Modern Family Home</h3>
                  <p className="project-type">Contemporary Design</p>
                </div>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-image project-image-2">
                <div className="project-overlay">
                  <h3 className="project-title">Urban Loft</h3>
                  <p className="project-type">Industrial Chic</p>
                </div>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-image project-image-3">
                <div className="project-overlay">
                  <h3 className="project-title">Coastal Villa</h3>
                  <p className="project-type">Beach House</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Living Space */}
      <section className="transform-section">
        <div className="container">
          <div className="transform-content">
            <h2 className="transform-title">Transform Your Living Space Today</h2>
            <p className="transform-description">
              Ready to create the home of your dreams? Our expert team is here to guide you through 
              every step of the design process, from initial consultation to final installation.
            </p>
            <div className="transform-buttons">
              <Link to="/contact" className="btn-primary">Get Started</Link>
              <Link to="/portfolio" className="btn-secondary">View Portfolio</Link>
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
                <li><Link to="/services" className="footer-link">All Services</Link></li>
                <li><Link to="/architecture" className="footer-link">Architecture</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><a href="#" className="footer-link">Our Process</a></li>
                <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
                <li><a href="#" className="footer-link">Contact</a></li>
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

export default ResidentialPage