import React from 'react'
import { Link } from 'react-router-dom'
import './CommercialPage.css'

const CommercialPage = () => {
  return (
    <div className="commercial-page">
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
            <Link to="/commercial" className="nav-link active">Commercial</Link>
            <Link to="/architecture" className="nav-link">Architecture</Link>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="commercial-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Transforming Spaces, Elevating Experiences</h1>
            <p className="hero-subtitle">
              Creating dynamic commercial environments that inspire productivity, enhance brand identity, 
              and deliver exceptional experiences for employees and customers alike.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">Discuss Your Project</Link>
              <Link to="/portfolio" className="btn-secondary">View Commercial Work</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="hero-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="services-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2 className="overview-title">Transforming Businesses Through Innovative Design</h2>
              <p className="overview-description">
                Our commercial design expertise spans across various industries, creating spaces that 
                not only look exceptional but also enhance operational efficiency and brand presence.
              </p>
              
              <div className="service-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">50+</span>
                  <span className="highlight-text">Commercial Projects</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">15</span>
                  <span className="highlight-text">Industries Served</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">100%</span>
                  <span className="highlight-text">Client Satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="overview-image">
              <div className="overview-visual">
                <div className="overview-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solutions */}
      <section className="design-solutions">
        <div className="container">
          <h2 className="solutions-title">Transforming Spaces with Expert Design Solutions</h2>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-image solution-image-1">
                <div className="solution-overlay"></div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Office Design</h3>
                <p className="solution-description">
                  Modern workplace environments that boost productivity and reflect company culture.
                </p>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-2">
                <div className="solution-overlay"></div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Retail Spaces</h3>
                <p className="solution-description">
                  Engaging retail environments that enhance customer experience and drive sales.
                </p>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-3">
                <div className="solution-overlay"></div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Hospitality Design</h3>
                <p className="solution-description">
                  Welcoming spaces for hotels, restaurants, and entertainment venues.
                </p>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-4">
                <div className="solution-overlay"></div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Healthcare Facilities</h3>
                <p className="solution-description">
                  Calming, functional environments that support healing and well-being.
                </p>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-5">
                <div className="solution-overlay"></div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Educational Spaces</h3>
                <p className="solution-description">
                  Inspiring learning environments that foster creativity and collaboration.
                </p>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-6">
                <div className="solution-overlay"></div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Corporate Headquarters</h3>
                <p className="solution-description">
                  Executive spaces that embody leadership and corporate excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Commercial Projects */}
      <section className="featured-commercial">
        <div className="container">
          <div className="featured-header">
            <h2 className="featured-title">Featured Commercial Projects</h2>
            <p className="featured-subtitle">
              Discover how we've transformed businesses across various industries
            </p>
          </div>
          
          <div className="featured-grid">
            <div className="featured-project featured-large">
              <div className="featured-image featured-image-1">
                <div className="featured-overlay">
                  <div className="featured-info">
                    <span className="featured-category">Tech Startup</span>
                    <h3 className="featured-name">Innovation Hub</h3>
                    <p className="featured-desc">Collaborative workspace design for a growing tech company</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="featured-project">
              <div className="featured-image featured-image-2">
                <div className="featured-overlay">
                  <div className="featured-info">
                    <span className="featured-category">Retail</span>
                    <h3 className="featured-name">Flagship Store</h3>
                    <p className="featured-desc">Premium brand experience center</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="featured-project">
              <div className="featured-image featured-image-3">
                <div className="featured-overlay">
                  <div className="featured-info">
                    <span className="featured-category">Finance</span>
                    <h3 className="featured-name">Executive Offices</h3>
                    <p className="featured-desc">Sophisticated corporate headquarters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Business */}
      <section className="transform-business">
        <div className="container">
          <div className="transform-content">
            <h2 className="transform-title">Transforming Spaces with Expert Design Solutions</h2>
            <p className="transform-description">
              Ready to elevate your business environment? Our commercial design experts are here to help 
              you create spaces that drive success, enhance productivity, and leave lasting impressions.
            </p>
            <div className="transform-features">
              <div className="feature-list">
                <div className="feature-point">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Strategic space planning and optimization</span>
                </div>
                <div className="feature-point">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Brand integration and identity reinforcement</span>
                </div>
                <div className="feature-point">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Sustainable and eco-friendly design solutions</span>
                </div>
                <div className="feature-point">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Project management from concept to completion</span>
                </div>
              </div>
            </div>
            <div className="transform-buttons">
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
              <Link to="/about" className="btn-secondary">Learn Our Process</Link>
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

export default CommercialPage