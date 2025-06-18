import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesPage.css'

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">Interior Design Studio</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link active">Services</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/residential" className="nav-link">Residential</Link>
            <Link to="/commercial" className="nav-link">Commercial</Link>
            <Link to="/architecture" className="nav-link">Architecture</Link>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive design solutions tailored to transform your space into something extraordinary. 
              From initial concept to final installation, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <div className="services-grid">
            <div className="service-category">
              <div className="category-header">
                <h2 className="category-title">Design & Planning</h2>
                <p className="category-description">
                  Strategic design solutions that balance aesthetics with functionality
                </p>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <h3 className="service-name">Space Planning</h3>
                  <p className="service-desc">Optimizing layout and flow for maximum efficiency</p>
                </div>
                <div className="service-item">
                  <h3 className="service-name">3D Visualization</h3>
                  <p className="service-desc">Realistic renderings to preview your space</p>
                </div>
                <div className="service-item">
                  <h3 className="service-name">Color Consultation</h3>
                  <p className="service-desc">Expert guidance on color schemes and palettes</p>
                </div>
              </div>
            </div>

            <div className="service-category">
              <div className="category-header">
                <h2 className="category-title">Implementation</h2>
                <p className="category-description">
                  Professional execution ensuring your vision becomes reality
                </p>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <h3 className="service-name">Project Management</h3>
                  <p className="service-desc">End-to-end coordination and oversight</p>
                </div>
                <div className="service-item">
                  <h3 className="service-name">Custom Furniture</h3>
                  <p className="service-desc">Bespoke pieces crafted to your specifications</p>
                </div>
                <div className="service-item">
                  <h3 className="service-name">Installation Services</h3>
                  <p className="service-desc">Professional installation and setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="featured-service">
        <div className="container">
          <div className="featured-content">
            <div className="featured-text">
              <span className="featured-label">Featured Service</span>
              <h2 className="featured-title">Design-Oriented Construction: Where Vision Meets Craftsmanship</h2>
              <p className="featured-description">
                Our design-oriented construction service bridges the gap between imagination and reality. 
                We work closely with contractors and craftspeople to ensure every detail of your design 
                is executed with precision and care.
              </p>
              
              <div className="featured-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Precision Planning</h3>
                    <p className="benefit-text">Detailed specifications ensure flawless execution</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <span className="benefit-icon">🔨</span>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Quality Craftsmanship</h3>
                    <p className="benefit-text">Partnering with skilled professionals for superior results</p>
                  </div>
                </div>
              </div>
              
              <div className="featured-buttons">
                <Link to="/contact" className="btn-primary">Learn More</Link>
                <Link to="/portfolio" className="btn-secondary">View Projects</Link>
              </div>
            </div>
            
            <div className="featured-visual">
              <div className="featured-image">
                <div className="featured-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-categories">
        <div className="container">
          <h2 className="categories-title">Transforming Spaces with Innovative Solutions</h2>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image category-image-1">
                <div className="category-overlay">
                  <h3 className="category-name">Residential Design</h3>
                  <p className="category-subtitle">Homes that reflect your personality</p>
                  <Link to="/residential" className="category-link">Explore →</Link>
                </div>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-image category-image-2">
                <div className="category-overlay">
                  <h3 className="category-name">Commercial Spaces</h3>
                  <p className="category-subtitle">Business environments that inspire</p>
                  <Link to="/commercial" className="category-link">Explore →</Link>
                </div>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-image category-image-3">
                <div className="category-overlay">
                  <h3 className="category-name">Architecture</h3>
                  <p className="category-subtitle">Structural design excellence</p>
                  <Link to="/architecture" className="category-link">Explore →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-content">
            <h2 className="process-title">Bringing Your Vision to Life</h2>
            <p className="process-description">
              Our comprehensive design process ensures every project is executed with precision, 
              creativity, and attention to detail from initial consultation to final reveal.
            </p>
            
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3 className="step-title">Discovery & Consultation</h3>
                  <p className="step-description">
                    Understanding your vision, needs, and lifestyle requirements through detailed consultation.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3 className="step-title">Design Development</h3>
                  <p className="step-description">
                    Creating comprehensive design plans, 3D visualizations, and material selections.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3 className="step-title">Implementation</h3>
                  <p className="step-description">
                    Professional project management and execution ensuring flawless results.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3 className="step-title">Final Styling</h3>
                  <p className="step-description">
                    Adding finishing touches and styling elements that complete your space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Space?</h2>
            <p className="cta-description">
              Let's discuss your vision and create something extraordinary together. Our expert team 
              is ready to guide you through every step of the design process.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Start Your Project</Link>
              <Link to="/about" className="btn-cta-secondary">Learn About Us</Link>
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

export default ServicesPage