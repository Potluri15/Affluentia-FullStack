import React from 'react'
import { Link } from 'react-router-dom'
import './ElevationPage.css'

const ElevationPage = () => {
  return (
    <div className="elevation-page">
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
            <Link to="/elevation" className="nav-link active">Elevation</Link>
            <Link to="/landscaping" className="nav-link">Landscaping</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="elevation-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Elevating Designs, Shaping Skylines</h1>
            <p className="hero-subtitle">
              Creating stunning architectural elevations that define the character and visual 
              impact of your building while ensuring functional excellence and aesthetic appeal.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">Start Your Design</Link>
              <Link to="/portfolio" className="btn-secondary">View Elevations</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="elevation-showcase">
              <div className="elevation-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevation Services */}
      <section className="elevation-services">
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <h2 className="services-title">Crafting Signature Architectural Views and Elevations</h2>
              <p className="services-description">
                Our elevation design services focus on creating compelling facades that reflect 
                your architectural vision while considering context, climate, and functionality. 
                Every elevation tells a story and makes a lasting impression.
              </p>
              
              <div className="services-stats">
                <div className="stat-item">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Elevation Designs</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25</span>
                  <span className="stat-label">Building Types</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
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

      {/* Comprehensive Solutions */}
      <section className="comprehensive-solutions">
        <div className="container">
          <h2 className="solutions-title">Comprehensive Elevation Design Solutions</h2>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-image solution-image-1">
                <div className="solution-overlay">
                  <h3 className="solution-title">Residential Elevations</h3>
                  <p className="solution-description">Custom home facades that reflect personal style</p>
                </div>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-2">
                <div className="solution-overlay">
                  <h3 className="solution-title">Commercial Buildings</h3>
                  <p className="solution-description">Professional facades for business environments</p>
                </div>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-3">
                <div className="solution-overlay">
                  <h3 className="solution-title">Mixed-Use Developments</h3>
                  <p className="solution-description">Complex elevation designs for multi-purpose buildings</p>
                </div>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-4">
                <div className="solution-overlay">
                  <h3 className="solution-title">Heritage Restoration</h3>
                  <p className="solution-description">Preserving architectural character in renovations</p>
                </div>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-5">
                <div className="solution-overlay">
                  <h3 className="solution-title">Modern Minimalist</h3>
                  <p className="solution-description">Clean, contemporary elevation designs</p>
                </div>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image solution-image-6">
                <div className="solution-overlay">
                  <h3 className="solution-title">Sustainable Design</h3>
                  <p className="solution-description">Eco-friendly elevation solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="featured-elevation">
        <div className="container">
          <div className="featured-content">
            <div className="featured-text">
              <span className="featured-label">Featured Project</span>
              <h2 className="featured-title">Transforming Structures with Innovative Elevation Design</h2>
              <p className="featured-description">
                This award-winning elevation design transforms a traditional commercial building 
                into a modern landmark. The innovative facade combines sustainable materials with 
                cutting-edge design elements, creating a building that stands out while harmonizing 
                with its urban environment.
              </p>
              
              <div className="featured-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🏢</div>
                  <div className="highlight-content">
                    <h3 className="highlight-title">Dynamic Facade</h3>
                    <p className="highlight-text">
                      Interactive elements that respond to environmental conditions
                    </p>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">🌱</div>
                  <div className="highlight-content">
                    <h3 className="highlight-title">Green Integration</h3>
                    <p className="highlight-text">
                      Living walls and sustainable materials throughout the elevation
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="featured-buttons">
                <Link to="/portfolio" className="btn-primary">View Full Project</Link>
                <Link to="/contact" className="btn-secondary">Discuss Your Vision</Link>
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

      {/* Design Process */}
      <section className="elevation-process">
        <div className="container">
          <div className="process-header">
            <h2 className="process-title">Our Elevation Design Process</h2>
            <p className="process-subtitle">
              From concept to construction, we ensure every elevation design meets the highest 
              standards of aesthetics and functionality.
            </p>
          </div>
          
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 className="step-title">Site & Context Analysis</h3>
              <p className="step-description">
                Understanding the building's environment, orientation, and contextual relationships.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">Conceptual Design</h3>
              <p className="step-description">
                Developing initial elevation concepts that align with project goals and aesthetic vision.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">Material Selection</h3>
              <p className="step-description">
                Choosing appropriate materials that enhance both appearance and performance.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">04</div>
              <h3 className="step-title">Technical Development</h3>
              <p className="step-description">
                Creating detailed technical drawings and specifications for construction implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Elevate Your Building's Design?</h2>
            <p className="cta-description">
              Transform your architectural vision into reality with our expert elevation design services. 
              Let's create a facade that makes a lasting impression.
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

export default ElevationPage