import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage">
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
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Elevating Spaces,
                <br />
                <span className="highlight">Enhancing Lives</span>
              </h1>
              <p className="hero-description">
                Transform your living and working spaces with our expert interior design services. 
                We create environments that reflect your personality while maximizing functionality and style.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <Link to="/portfolio" className="btn-secondary">View Portfolio</Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-container">
                <div className="visual-content">
                  <div className="visual-gradient"></div>
                  <div className="visual-circle-yellow"></div>
                  <div className="visual-circle-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Step Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <div className="logo-circle">K</div>
            <h2 className="section-title">Our Three-Step Design Process</h2>
            <p className="section-description">
              We follow a proven methodology to ensure your space transformation exceeds expectations
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>
              <h3 className="card-title">Consultation</h3>
              <p className="card-description">
                We begin with an in-depth consultation to understand your vision, needs, and lifestyle requirements.
              </p>
            </div>
            <div className="process-card">
              <div className="process-number">2</div>
              <h3 className="card-title">Design Development</h3>
              <p className="card-description">
                Our team creates detailed design concepts, 3D renderings, and material selections tailored to your space.
              </p>
            </div>
            <div className="process-card">
              <div className="process-number">3</div>
              <h3 className="card-title">Implementation</h3>
              <p className="card-description">
                We oversee the entire implementation process, ensuring every detail is executed to perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="gallery-title">Shaping Environments with Purpose and Style</h2>
          
          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-image gallery-image-1">
                <div className="gallery-overlay"></div>
              </div>
              <div className="gallery-content">
                <h3 className="gallery-card-title">Modern Living Spaces</h3>
                <p className="gallery-description">
                  Contemporary designs that maximize comfort and functionality in urban environments.
                </p>
              </div>
            </div>
            
            <div className="gallery-card">
              <div className="gallery-image gallery-image-2">
                <div className="gallery-overlay"></div>
              </div>
              <div className="gallery-content">
                <h3 className="gallery-card-title">Corporate Interiors</h3>
                <p className="gallery-description">
                  Professional workspace designs that enhance productivity and reflect company culture.
                </p>
              </div>
            </div>
            
            <div className="gallery-card">
              <div className="gallery-image gallery-image-3">
                <div className="gallery-overlay"></div>
              </div>
              <div className="gallery-content">
                <h3 className="gallery-card-title">Luxury Residences</h3>
                <p className="gallery-description">
                  Sophisticated residential designs that combine elegance with personalized comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-content">
              <h2 className="cta-title">Transforming Your Space Today</h2>
              <p className="cta-description">
                Ready to elevate your environment? Let's discuss your vision and create something extraordinary together.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-cta-primary">Start Your Project</Link>
                <Link to="/about" className="btn-cta-secondary">Learn More About Us</Link>
              </div>
            </div>
            <div className="cta-visual">
              <div className="cta-visual-container">
                <div className="cta-visual-content">
                  <div className="cta-visual-gradient"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Insights */}
      <section className="blog-section">
        <div className="container">
          <h2 className="blog-title">Latest Insights and Trends</h2>
          
          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-image blog-image-1"></div>
              <div className="blog-content">
                <h3 className="blog-card-title">2025 Interior Design Trends</h3>
                <p className="blog-description">
                  Discover the latest trends shaping interior design this year, from sustainable materials to biophilic design.
                </p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image blog-image-2"></div>
              <div className="blog-content">
                <h3 className="blog-card-title">Maximizing Small Spaces</h3>
                <p className="blog-description">
                  Expert tips and creative solutions for making the most of compact living areas without compromising style.
                </p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image blog-image-3"></div>
              <div className="blog-content">
                <h3 className="blog-card-title">Sustainable Design Solutions</h3>
                <p className="blog-description">
                  How to create beautiful interiors while prioritizing environmental responsibility and sustainability.
                </p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </article>
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

export default HomePage