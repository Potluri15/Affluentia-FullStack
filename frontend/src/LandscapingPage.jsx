import React from 'react'
import { Link } from 'react-router-dom'
import './LandscapingPage.css'

const LandscapingPage = () => {
  return (
    <div className="landscaping-page">
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
            <Link to="/landscaping" className="nav-link active">Landscaping</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="landscaping-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Landscaping</h1>
            <p className="hero-subtitle">
              Creating harmonious outdoor environments that seamlessly blend natural beauty 
              with functional design, transforming spaces into sustainable and inspiring landscapes.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">Start Your Landscape</Link>
              <Link to="/portfolio" className="btn-secondary">View Gardens</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="landscape-showcase">
              <div className="landscape-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Spaces */}
      <section className="transforming-spaces">
        <div className="container">
          <div className="spaces-content">
            <div className="spaces-text">
              <h2 className="spaces-title">
                Transforming Spaces with Nature's Beauty and Thoughtful Design
              </h2>
              <p className="spaces-description">
                Our landscaping philosophy centers on creating outdoor environments that enhance 
                both the natural ecosystem and human experience. We design landscapes that are not 
                only visually stunning but also environmentally sustainable and functionally practical.
              </p>
              
              <div className="spaces-features">
                <div className="feature-point">
                  <div className="feature-icon">🌱</div>
                  <div className="feature-content">
                    <h3 className="feature-title">Sustainable Design</h3>
                    <p className="feature-text">
                      Eco-friendly solutions that conserve water and support local ecosystems.
                    </p>
                  </div>
                </div>
                
                <div className="feature-point">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-content">
                    <h3 className="feature-title">Artistic Vision</h3>
                    <p className="feature-text">
                      Creative compositions that transform outdoor spaces into living artworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="spaces-visual">
              <div className="spaces-grid">
                <div className="space-item space-item-1">
                  <div className="space-overlay"></div>
                </div>
                <div className="space-item space-item-2">
                  <div className="space-overlay"></div>
                </div>
                <div className="space-item space-item-3">
                  <div className="space-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Landscaping */}
      <section className="exceptional-landscaping">
        <div className="container">
          <div className="exceptional-content">
            <h2 className="exceptional-title">Exceptional Landscaping</h2>
            <p className="exceptional-description">
              From intimate residential gardens to expansive commercial landscapes, our designs 
              create outdoor spaces that inspire, rejuvenate, and connect people with nature.
            </p>
            
            <div className="landscaping-showcase">
              <div className="showcase-main">
                <div className="showcase-image">
                  <div className="showcase-overlay"></div>
                </div>
              </div>
              
              <div className="showcase-grid">
                <div className="showcase-item">
                  <div className="showcase-item-image showcase-item-1">
                    <div className="showcase-item-overlay">
                      <h3 className="showcase-item-title">Residential Gardens</h3>
                      <p className="showcase-item-desc">Private outdoor sanctuaries</p>
                    </div>
                  </div>
                </div>
                
                <div className="showcase-item">
                  <div className="showcase-item-image showcase-item-2">
                    <div className="showcase-item-overlay">
                      <h3 className="showcase-item-title">Corporate Landscapes</h3>
                      <p className="showcase-item-desc">Professional outdoor environments</p>
                    </div>
                  </div>
                </div>
                
                <div className="showcase-item">
                  <div className="showcase-item-image showcase-item-3">
                    <div className="showcase-item-overlay">
                      <h3 className="showcase-item-title">Public Spaces</h3>
                      <p className="showcase-item-desc">Community-focused landscape design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-landscapes">
        <div className="container">
          <h2 className="featured-title">Featured Landscape Projects</h2>
          
          <div className="featured-grid">
            <div className="featured-item featured-large">
              <div className="featured-image featured-image-1">
                <div className="featured-overlay">
                  <div className="featured-info">
                    <span className="featured-category">Residential</span>
                    <h3 className="featured-name">Urban Oasis Garden</h3>
                    <p className="featured-desc">
                      Transforming a city rooftop into a lush garden retreat with sustainable design principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="featured-item">
              <div className="featured-image featured-image-2">
                <div className="featured-overlay">
                  <div className="featured-info">
                    <span className="featured-category">Commercial</span>
                    <h3 className="featured-name">Corporate Campus</h3>
                    <p className="featured-desc">Inspiring workplace outdoor environments</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="featured-item">
              <div className="featured-image featured-image-3">
                <div className="featured-overlay">
                  <div className="featured-info">
                    <span className="featured-category">Public</span>
                    <h3 className="featured-name">Community Park</h3>
                    <p className="featured-desc">Inclusive design for all ages and abilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="design-services">
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <h2 className="services-title">Transforming Spaces with Expert Design Solutions</h2>
              <p className="services-description">
                Our comprehensive landscaping services cover every aspect of outdoor design, 
                from initial concept development to installation and maintenance planning.
              </p>
              
              <div className="services-list">
                <div className="service-category">
                  <h3 className="category-title">Design & Planning</h3>
                  <ul className="category-services">
                    <li>Site Analysis & Assessment</li>
                    <li>Conceptual Design Development</li>
                    <li>3D Visualization & Rendering</li>
                    <li>Plant Selection & Placement</li>
                  </ul>
                </div>
                
                <div className="service-category">
                  <h3 className="category-title">Implementation</h3>
                  <ul className="category-services">
                    <li>Installation Management</li>
                    <li>Irrigation System Design</li>
                    <li>Hardscape Construction</li>
                    <li>Maintenance Planning</li>
                  </ul>
                </div>
              </div>
              
              <div className="services-buttons">
                <Link to="/contact" className="btn-primary">Start Planning</Link>
                <Link to="/services" className="btn-secondary">All Services</Link>
              </div>
            </div>
            
            <div className="services-visual">
              <div className="services-image">
                <div className="services-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="landscape-process">
        <div className="container">
          <div className="process-header">
            <h2 className="process-title">Our Landscape Design Process</h2>
            <p className="process-subtitle">
              From vision to reality, we guide you through every step of creating your perfect outdoor space.
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-step">
              <div className="step-marker">
                <span className="step-number">1</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Site Assessment</h3>
                <p className="step-description">
                  Comprehensive evaluation of soil, drainage, sunlight, and existing conditions.
                </p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="step-marker">
                <span className="step-number">2</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Design Development</h3>
                <p className="step-description">
                  Creating detailed plans that balance aesthetics, functionality, and sustainability.
                </p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="step-marker">
                <span className="step-number">3</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Installation & Planting</h3>
                <p className="step-description">
                  Professional implementation ensuring proper plant establishment and system integration.
                </p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="step-marker">
                <span className="step-number">4</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Care & Maintenance</h3>
                <p className="step-description">
                  Ongoing support and maintenance planning to ensure long-term landscape health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Outdoor Space?</h2>
            <p className="cta-description">
              Let's create a landscape that enhances your property's beauty and provides a 
              sustainable outdoor environment for years to come.
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

export default LandscapingPage