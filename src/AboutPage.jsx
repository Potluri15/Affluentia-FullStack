import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'
import heroImage from './assets/about_hero.jpg'
import projectShowcaseImg1 from './assets/project_img1.jpg'
import projectShowcaseImg2 from './assets/project_img2.jpg'
import projectShowcaseImg3 from './assets/project_img3.jpg'
import projectShowcaseImg4 from './assets/project_img4.jpg'
import JourneyImage from './assets/about_journey_img.jpg'

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">Interior Design Studio</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link active">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/residential" className="nav-link">Residential</Link>
            <Link to="/commercial" className="nav-link">Commercial</Link>
            <Link to="/architecture" className="nav-link">Architecture</Link>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <h1 className="about-title">Innovative Design Solutions</h1>
              <p className="about-subtitle">
                Shaping living spaces to be more intuitive and enriched through 
                thoughtful design and innovative technology integration.
              </p>
              <p className="about-description">
                Our approach combines timeless design principles with contemporary innovation, 
                ensuring that every project we undertake stands the test of time while meeting 
                the demands of modern living and working.
              </p>
            </div>
            <div className="about-hero-visual">
              <div className="hero-image-container">
                <div className="hero-image">
                  <img src= {heroImage} alt="Interior Design" className="hero-img" />
                  <div className="hero-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="project-showcase">
        <div className="container">
          <div className="showcase-header">
            <h2 className="showcase-title">Project Showcase</h2>
            <p className="showcase-subtitle">
              Explore our recent work that highlights our diverse and unique approaches 
              to interior design.
            </p>
          </div>
          
          <div className="showcase-grid">
            <div className="showcase-item showcase-large">
              <div className="showcase-image showcase-image-1">
                <img src={projectShowcaseImg1} alt="Modern Corporate Office" className="showcase-img"/>
                <div className="showcase-overlay">
                  <h3 className="showcase-project-title">Modern Corporate Office</h3>
                  <p className="showcase-project-type">Commercial Design</p>
                </div>
              </div>
            </div>
            
            <div className="showcase-item">
              <div className="showcase-image showcase-image-2">
                <img src={projectShowcaseImg2} alt="Luxury Apartment" className="showcase-img"/>
                <div className="showcase-overlay">
                  <h3 className="showcase-project-title">Luxury Apartment</h3>
                  <p className="showcase-project-type">Residential Design</p>
                </div>
              </div>
            </div>
            
            <div className="showcase-item">
              <div className="showcase-image showcase-image-3">
                <img src={projectShowcaseImg3} alt="Contemporary Loft" className="showcase-img"/>
                <div className="showcase-overlay">
                  <h3 className="showcase-project-title">Contemporary Loft</h3>
                  <p className="showcase-project-type">Urban Living</p>
                </div>
              </div>
            </div>
            
            <div className="showcase-item">
              <div className="showcase-image showcase-image-4">
                <img src={projectShowcaseImg4} alt="Boutique Hotel" className="showcase-img"/>
                <div className="showcase-overlay">
                  <h3 className="showcase-project-title">Boutique Hotel</h3>
                  <p className="showcase-project-type">Hospitality Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="clients-section">
        <div className="container">
          <h2 className="clients-title">Our Clients</h2>
          <div className="clients-grid">
            <div className="client-logo">
              <div className="logo-placeholder">IKEA</div>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">Herman Miller</div>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">West Elm</div>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">CB2</div>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">Restoration Hardware</div>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">Design Within Reach</div>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">Pottery Barn</div>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">Crate & Barrel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="journey-section">
        <div className="container">
          <div className="journey-grid">
            <div className="journey-content">
              <h2 className="journey-title">Our Journey Through Architecture and Design</h2>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-year">Founded in 2015</h3>
                    <p className="timeline-description">
                      Started as a boutique design studio with a focus on residential spaces 
                      and sustainable design practices.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-year">Expanded Services</h3>
                    <p className="timeline-description">
                      Grew our expertise to include commercial design, space planning, 
                      and 3D visualization services.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-year">Award Recognition</h3>
                    <p className="timeline-description">
                      Received multiple design awards and recognition for innovative 
                      approaches to modern living spaces.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-year">Global Presence</h3>
                    <p className="timeline-description">
                      Established partnerships worldwide and completed projects across 
                      multiple continents.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="journey-buttons">
                <Link to="/contact" className="btn-primary">Get In Touch</Link>
                <Link to="/" className="btn-secondary">Back To Home</Link>
              </div>
            </div>
            
            <div className="journey-visual">
              <div className="journey-image">
                <img src={JourneyImage} alt="Our Journey" />
                <div className="journey-image-overlay"></div>
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

export default AboutPage