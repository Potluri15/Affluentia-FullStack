import React from "react";
import "./ArchitecturePage.css";

const ArchitecturePage = () => {
  return (
    <div className="architecture-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Logo</div>
        <nav className="navbar-right">
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Modern Living Spaces</h1>
          <p className="hero-subtitle">
            Transforming spaces with creative designs that blend functionality and aesthetics.
          </p>
          <div className="hero-buttons">
            <button className="hero-button">Building Planning</button>
            <button className="hero-button">Elevations</button>
            <button className="hero-button">Landscaping</button>
          </div>
        </div>
        </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Shaping Environments with Purpose and Style</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="public/images/nwar-igbariah-AteFNIFVGdo-unsplash 1.jpg" alt="Building Planning" />
            <h4>Innovative Building Planning</h4>
            <p>
              We design buildings that reflect your vision, seamlessly blending
              aesthetics, efficiency, and structural integrity.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="feature-card">
            <img src="public/images/vecteezy_beautiful-modern-house-exterior-with-carport-modern_26621370.jpg" alt="Elevations" />
            <h4>Appealing Elevations</h4>
            <p>
              Our experts craft stunning elevations that ensure structural
              harmony without compromising on design.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="feature-card">
            <img src="public/images/antonio-araujo-WQLIxSEczSA-unsplash 1.jpg" alt="Landscaping" />
            <h4>Beautiful Landscaping</h4>
            <p>
              From concept to completion, we manage every detail of your
              landscape design with precision and vision.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-text">
          <h4>Innovative</h4>
          <h2>Transforming Skylines</h2>
          <p>
            Our flagship architectural project exemplifies the perfect harmony
            between contemporary design and environmental responsibility.
          </p>
          <button>Contact Us</button>
        </div>
        <div className="cta-image">
          <img
            src="public/images/image 20.jpg"
            alt="Modern Interior"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">Logo</div>
          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 A1 Archi. All Rights Reserved. Privacy Policy. Cookies.
        </div>
      </footer>
    </div>
  );
};

export default ArchitecturePage;