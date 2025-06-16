import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">Logo</div>
        <nav>
          <ul className="nav-links">
            <li>About Us</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <h1>Modern Living Spaces</h1>
          <p>
            Transforming homes with innovative designs that blend functionality
            with aesthetics.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn">Residential</button>
            <button className="hero-btn">Commercial</button>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <h2>Our Featured Projects</h2>
        <p>Explore our diverse architectural and interior designs.</p>
        <div className="projects">
          <div className="project-card">
            <img src="urban.jpg" alt="Modern Urban Oasis" />
            <h3>Modern Urban Oasis</h3>
            <p>Urban retreat with minimalist aesthetics</p>
          </div>
          <div className="project-card">
            <img src="loft.jpg" alt="Commercial Loft" />
            <h3>Commercial Loft</h3>
            <p>Innovative open-space design</p>
          </div>
          <div className="project-card">
            <img src="coastal.jpg" alt="Coastal Retreat" />
            <h3>Coastal Retreat</h3>
            <p>Serene beachside modern living</p>
          </div>
          <div className="project-card">
            <img src="villa.jpg" alt="Elegant Villa" />
            <h3>Elegant Villa</h3>
            <p>Fusion of sophistication and elegance</p>
          </div>
        </div>
      </section>

      <section className="highlight">
        <div className="highlight-content">
          <div className="highlight-text">
            <h2>Transforming Spaces: Our Flagship Project</h2>
            <p>
              See how we reimagined traditional living into modern masterpieces,
              enhancing luxury and comfort.
            </p>
          </div>
          <img src="flagship.jpg" alt="Flagship Project" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <span>Logo</span>
          <ul>
            <li>Projects</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Projects;
