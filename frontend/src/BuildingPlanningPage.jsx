import React from 'react'
import { Link } from 'react-router-dom'
import './BuildingPlanningPage.css'

const BuildingPlanningPage = () => {
  return (
    <div className="building-planning-page">
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
            <Link to="/building-planning" className="nav-link active">Planning</Link>
            <Link to="/elevation" className="nav-link">Elevation</Link>
            <Link to="/landscaping" className="nav-link">Landscaping</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="planning-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Building Planning</h1>
            <p className="hero-subtitle">
              Comprehensive architectural planning services that transform your vision into 
              detailed blueprints and technical specifications for successful construction.
            </p>
          </div>
          <div className="hero-visual">
            <div className="blueprint-container">
              <div className="blueprint-overlay">
                <div className="blueprint-grid"></div>
                <div className="blueprint-elements">
                  <div className="blueprint-line blueprint-line-1"></div>
                  <div className="blueprint-line blueprint-line-2"></div>
                  <div className="blueprint-line blueprint-line-3"></div>
                  <div className="blueprint-text">FLOOR PLAN</div>
                  <div className="blueprint-measurements">
                    <span>15.5m</span>
                    <span>8.2m</span>
                    <span>12.0m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="planning-process">
        <div className="container">
          <div className="process-header">
            <h2 className="process-title">Architectural Planning Process</h2>
            <p className="process-subtitle">
              Our systematic approach ensures every detail is carefully planned and documented
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">📋</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Site Analysis</h3>
                <p className="timeline-description">
                  Comprehensive site evaluation including topography, soil conditions, 
                  environmental factors, and local building regulations.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">✏️</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Schematic Design</h3>
                <p className="timeline-description">
                  Initial design concepts and layout planning that establish the overall 
                  architectural vision and spatial relationships.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">📐</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Design Development</h3>
                <p className="timeline-description">
                  Detailed development of architectural elements, systems integration, 
                  and material specifications for construction readiness.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">📄</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Construction Documents</h3>
                <p className="timeline-description">
                  Complete technical drawings, specifications, and documentation 
                  required for permits and construction execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Building Plans */}
      <section className="innovative-plans">
        <div className="container">
          <div className="plans-content">
            <div className="plans-text">
              <h2 className="plans-title">Innovative Building Plans Tailored for Vision and Function</h2>
              <p className="plans-description">
                Our building planning approach combines creative vision with technical precision, 
                ensuring that every space is optimized for both aesthetic appeal and functional efficiency. 
                We create comprehensive plans that serve as the foundation for exceptional architecture.
              </p>
              
              <div className="plans-features">
                <div className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <div className="feature-content">
                    <h3 className="feature-title">Precision Planning</h3>
                    <p className="feature-text">
                      Accurate measurements and detailed specifications ensure flawless execution.
                    </p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🏗️</div>
                  <div className="feature-content">
                    <h3 className="feature-title">Structural Integration</h3>
                    <p className="feature-text">
                      Seamless coordination between architectural and structural elements.
                    </p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-content">
                    <h3 className="feature-title">Systems Coordination</h3>
                    <p className="feature-text">
                      Integrated planning for mechanical, electrical, and plumbing systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="plans-buttons">
                <Link to="/contact" className="btn-primary">Start Planning</Link>
                <Link to="/portfolio" className="btn-secondary">View Projects</Link>
              </div>
            </div>
            
            <div className="plans-visual">
              <div className="plans-image">
                <div className="plans-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Space */}
      <section className="transform-space">
        <div className="container">
          <div className="transform-content">
            <h2 className="transform-title">Transforming Your Space Today</h2>
            <p className="transform-description">
              Ready to begin your building project? Our expert planning team will guide you 
              through every step of the architectural planning process.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="what-we-offer">
        <div className="container">
          <div className="offer-content">
            <div className="offer-text">
              <h2 className="offer-title">What We Offer</h2>
              
              <div className="offer-services">
                <div className="service-item">
                  <div className="service-marker">●</div>
                  <div className="service-content">
                    <h3 className="service-name">Technical Drawing Services</h3>
                    <p className="service-desc">
                      Detailed architectural drawings including floor plans, elevations, 
                      sections, and construction details.
                    </p>
                  </div>
                </div>
                
                <div className="service-item">
                  <div className="service-marker">●</div>
                  <div className="service-content">
                    <h3 className="service-name">Permitting Support</h3>
                    <p className="service-desc">
                      Complete permit application preparation and coordination with 
                      local building authorities.
                    </p>
                  </div>
                </div>
                
                <div className="service-item">
                  <div className="service-marker">●</div>
                  <div className="service-content">
                    <h3 className="service-name">Code Compliance</h3>
                    <p className="service-desc">
                      Ensuring all plans meet local building codes, zoning requirements, 
                      and safety regulations.
                    </p>
                  </div>
                </div>
                
                <div className="service-item">
                  <div className="service-marker">●</div>
                  <div className="service-content">
                    <h3 className="service-name">3D Modeling & Visualization</h3>
                    <p className="service-desc">
                      Advanced 3D models and renderings to visualize the final design 
                      before construction begins.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="offer-buttons">
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <Link to="/services" className="btn-secondary">All Services</Link>
              </div>
            </div>
            
            <div className="offer-visual">
              <div className="offer-image">
                <div className="offer-overlay"></div>
              </div>
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

export default BuildingPlanningPage