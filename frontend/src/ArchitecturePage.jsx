import React from 'react'
import { Link } from 'react-router-dom'
import './ArchitecturePage.css'

const ArchitecturePage = () => {
  return (
    <div className="architecture-page">
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
            <Link to="/architecture" className="nav-link active">Architecture</Link>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="architecture-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Shaping Environments with Purpose and Style</h1>
              <p className="hero-subtitle">
                Architectural design that seamlessly blends form and function, creating structures 
                that not only serve their purpose but inspire and elevate the human experience.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">Discuss Your Vision</Link>
                <Link to="/portfolio" className="btn-secondary">View Architecture</Link>
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

      {/* Architecture Services */}
      <section className="architecture-services">
        <div className="container">
          <div className="services-header">
            <h2 className="services-title">Comprehensive Architectural Solutions</h2>
            <p className="services-subtitle">
              From conceptual design to construction documentation, we provide end-to-end 
              architectural services for projects of all scales and complexities.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📐</div>
              <h3 className="service-title">Architectural Design</h3>
              <p className="service-description">
                Innovative design solutions that balance aesthetics, functionality, and sustainability 
                for residential and commercial projects.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3 className="service-title">Construction Documentation</h3>
              <p className="service-description">
                Detailed technical drawings and specifications ensuring accurate and efficient 
                construction implementation.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3 className="service-title">Sustainable Design</h3>
              <p className="service-description">
                Environmentally conscious design approaches that minimize environmental impact 
                while maximizing energy efficiency.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3 className="service-title">Project Consultation</h3>
              <p className="service-description">
                Expert guidance throughout the design and construction process, ensuring projects 
                meet all requirements and standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="projects-title">Featured Architectural Projects</h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image project-image-1">
                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-category">Residential</span>
                    <h3 className="project-title">Modern Family Residence</h3>
                    <p className="project-description">Sustainable family home with innovative design</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image project-image-2">
                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-category">Commercial</span>
                    <h3 className="project-title">Corporate Headquarters</h3>
                    <p className="project-description">Modern office complex with flexible spaces</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image project-image-3">
                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-category">Mixed-Use</span>
                    <h3 className="project-title">Urban Development</h3>
                    <p className="project-description">Mixed-use development revitalizing urban space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="design-philosophy">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2 className="philosophy-title">Our Design Philosophy</h2>
              <p className="philosophy-description">
                We believe architecture should respond to its environment, serve its users, and 
                contribute positively to the community. Our designs are rooted in sustainability, 
                innovation, and respect for both human needs and natural resources.
              </p>
              
              <div className="philosophy-principles">
                <div className="principle-item">
                  <h3 className="principle-title">Context Sensitivity</h3>
                  <p className="principle-text">
                    Designs that respond thoughtfully to their site, climate, and cultural context.
                  </p>
                </div>
                
                <div className="principle-item">
                  <h3 className="principle-title">Sustainable Innovation</h3>
                  <p className="principle-text">
                    Incorporating cutting-edge sustainable technologies and materials.
                  </p>
                </div>
                
                <div className="principle-item">
                  <h3 className="principle-title">Human-Centered Design</h3>
                  <p className="principle-text">
                    Creating spaces that enhance well-being and support diverse activities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="philosophy-visual">
              <div className="philosophy-image">
                <div className="philosophy-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flagship Project */}
      <section className="flagship-project">
        <div className="container">
          <div className="flagship-content">
            <div className="flagship-image">
              <div className="flagship-overlay"></div>
            </div>
            
            <div className="flagship-text">
              <span className="flagship-label">Flagship Project</span>
              <h2 className="flagship-title">Transforming Skylines</h2>
              <p className="flagship-description">
                Our latest architectural masterpiece redefines urban living with its innovative design, 
                sustainable features, and community-focused spaces. This mixed-use development showcases 
                our commitment to creating buildings that enhance both the skyline and the lives of 
                those who inhabit them.
              </p>
              
              <div className="flagship-stats">
                <div className="stat-item">
                  <span className="stat-number">45</span>
                  <span className="stat-label">Floors</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500k</span>
                  <span className="stat-label">sq ft</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">LEED</span>
                  <span className="stat-label">Platinum</span>
                </div>
              </div>
              
              <div className="flagship-buttons">
                <Link to="/contact" className="btn-primary">Learn More</Link>
                <Link to="/portfolio" className="btn-secondary">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="architecture-process">
        <div className="container">
          <div className="process-header">
            <h2 className="process-title">Our Architecture Process</h2>
            <p className="process-subtitle">
              From initial concept to final construction, we guide projects through every phase 
              of architectural development with precision and creativity.
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">1</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Conceptual Design</h3>
                <p className="timeline-description">
                  Initial design exploration and concept development based on project requirements.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">2</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Schematic Design</h3>
                <p className="timeline-description">
                  Developing detailed design schemes and preliminary drawings for review.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">3</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Design Development</h3>
                <p className="timeline-description">
                  Refining designs and developing detailed technical specifications.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">4</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Construction Documents</h3>
                <p className="timeline-description">
                  Creating comprehensive construction drawings and project documentation.
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
            <h2 className="cta-title">Ready to Shape Tomorrow's Architecture?</h2>
            <p className="cta-description">
              Whether you're planning a residential project or a large-scale development, 
              our architectural expertise can bring your vision to life.
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

export default ArchitecturePage