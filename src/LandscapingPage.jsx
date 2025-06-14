import React from 'react'
import { Link } from 'react-router-dom'
import './LandscapingPage.css'

const LandscapingPage = () => {
  return (
     <div className="landscaping-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">Logo</div>
        <div className="navbar-right">
          <Link to="#">About Us</Link>
          <Link to="#">Projects</Link>
          <Link to="#">Services</Link>
          <Link to="#">Contact Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-title">
            <h1>Transform Your Outdoors</h1>
          </div>
          <p>
            Crafting personalized living environments that seamlessly blend comfort, style,
            and functionality. Our expert team brings your vision to life with tailored
            design solutions that enhance your everyday living.
          </p>
          <button className="hero-button">Contact Us</button>
        </div>
      </section>

      {/* Services Intro */}
      <section className="intro-section">
        <div className="intro-text">
          <h2>Transforming Spaces with Innovative Design and Unmatched Expertise</h2>
          <p>
            With a team of experienced experts, we specialize in transforming outdoor
            spaces into extraordinary environments. Our award-winning designs redefine
            creativity, elegance, and functionality.
          </p>
          <div className="intro-icons">
            <div className="icon-box">
              <span>✔</span>
              <p>Expert Designers</p>
            </div>
            <div className="icon-box">
              <span>🏆</span>
              <p>Award Winning</p>
            </div>
          </div>
        </div>
        <div className="intro-image">
          <img src="public/images/edwin-petrus-Tkm5wkW0X60-unsplash 1.jpg" alt="Garden Side" />
        </div>
      </section>

      {/* Exceptional Landscaping */}
      <section className="landscape-gallery">
        <h2>Exceptional Landscaping</h2>
        <p>Explore our stunning landscaping collections of timeless, clean and modern outdoors</p>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="public/images/komarov-egor-jzWQlIio8ks-unsplash 1.jpg" alt="Modern Family Home" />
            <div className="gallery-caption">
              <h4>Modern Family Home</h4>
              <p>Combining open spaces and natural light to create a welcoming environment.</p>
              <small>Categories: Residential, Family</small>
            </div>
          </div>

          <div className="gallery-item">
            <img src="public/images/komarov-egor-DDUNMLGq2Kc-unsplash 1.jpg" alt="Urban Retreat Loft" />
            <div className="gallery-caption">
              <h4>Urban Retreat Loft</h4>
              <p>This project transforms a compact urban space into a luxurious retreat.</p>
              <small>Categories: Residential, Urban</small>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-text">
          <h2>Transforming Spaces with Expert Design Solutions</h2>
          <button className="cta-button">Contact Us</button>
        </div>
        <div className="cta-image">
          <img src="/images/landscapingcta.jpg" alt="Office Interior" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">Logo</div>
          <div className="footer-links">
            <Link to="#">Projects</Link>
            <Link to="#">Services</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 MyLandscapers — Privacy Policy — Cookie</p>
        </div>
      </footer>
    </div>
  );
};

export default LandscapingPage