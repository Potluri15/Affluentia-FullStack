import React from 'react'
import { Link } from 'react-router-dom'
import './PortfolioPage.css'

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">Interior Design Studio</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/portfolio" className="nav-link active">Portfolio</Link>
            <Link to="/residential" className="nav-link">Residential</Link>
            <Link to="/commercial" className="nav-link">Commercial</Link>
            <Link to="/architecture" className="nav-link">Architecture</Link>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Modern Living Spaces</h1>
              <p className="hero-subtitle">
                Explore our innovative designs that blend luxury and functionality, 
                creating spaces that inspire and elevate everyday living.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">Start Your Project</Link>
                <Link to="/about" className="btn-secondary">Learn Our Process</Link>
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

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Featured Projects</h2>
            <p className="section-subtitle">
              Discover our diverse portfolio showcasing excellence in modern design.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image project-image-1">
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">Modern Urban House</h3>
                    <p className="project-type">Residential Design</p>
                    <button className="project-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <h3 className="project-name">Modern Urban House</h3>
                <p className="project-description">
                  A contemporary family home featuring clean lines and smart home integration.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image project-image-2">
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">Commercial Loft</h3>
                    <p className="project-type">Commercial Design</p>
                    <button className="project-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <h3 className="project-name">Commercial Loft</h3>
                <p className="project-description">
                  Industrial-chic workspace designed for creativity and productivity.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image project-image-3">
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">Coastal Retreat</h3>
                    <p className="project-type">Vacation Home</p>
                    <button className="project-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <h3 className="project-name">Coastal Retreat</h3>
                <p className="project-description">
                  Serene beachfront property blending natural elements with modern comfort.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image project-image-4">
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">Elegant Villa</h3>
                    <p className="project-type">Luxury Residential</p>
                    <button className="project-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <h3 className="project-name">Elegant Villa</h3>
                <p className="project-description">
                  Sophisticated mansion showcasing timeless elegance and grandeur.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image project-image-5">
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">Minimalist Studio</h3>
                    <p className="project-type">Urban Living</p>
                    <button className="project-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <h3 className="project-name">Minimalist Studio</h3>
                <p className="project-description">
                  Compact city apartment maximizing space through thoughtful design.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image project-image-6">
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">Executive Office</h3>
                    <p className="project-type">Corporate Design</p>
                    <button className="project-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <h3 className="project-name">Executive Office</h3>
                <p className="project-description">
                  Professional workspace designed to inspire leadership and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Project */}
      <section className="flagship-project">
        <div className="container">
          <div className="flagship-content">
            <div className="flagship-text">
              <span className="flagship-label">Featured Project</span>
              <h2 className="flagship-title">
                Transforming Spaces: Our Flagship Project
              </h2>
              <p className="flagship-description">
                This award-winning penthouse redesign represents the pinnacle of our design 
                philosophy, seamlessly blending luxury with functionality. Every detail has 
                been meticulously crafted to create an environment that inspires and delights.
              </p>
              <div className="flagship-stats">
                <div className="stat">
                  <span className="stat-number">5,200</span>
                  <span className="stat-label">sq ft</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6</span>
                  <span className="stat-label">months</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2024</span>
                  <span className="stat-label">completed</span>
                </div>
              </div>
              <div className="flagship-buttons">
                <button className="btn-primary">View Full Case Study</button>
                <Link to="/contact" className="btn-secondary">Discuss Your Project</Link>
              </div>
            </div>
            <div className="flagship-visual">
              <div className="flagship-image">
                <div className="flagship-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Create Your Dream Space?</h2>
            <p className="cta-description">
              Let's collaborate to bring your vision to life with our expert design team.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Start Your Project</Link>
              <Link to="/about" className="btn-cta-secondary">Learn About Our Process</Link>
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

export default PortfolioPage