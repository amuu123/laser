import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ServicesAndPricing from './pages/ServicesAndPricing';
import BookNow from './pages/BookNow';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/services" element={<ServicesAndPricing />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      treatment: "Laser Hair Removal",
      text: "I've had amazing results with DA Laser Clinic. After just 4 sessions, I've seen a significant reduction in hair growth. The staff is professional and made me feel comfortable throughout the process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      treatment: "Skin Rejuvenation",
      text: "The skin rejuvenation treatment has taken years off my appearance. The results were visible after the first session, and the team was very knowledgeable about the procedure.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      treatment: "Anti-Aging Treatment",
      text: "I'm extremely happy with my results! The treatment was gentle yet effective, and the staff was incredibly attentive to my concerns. Highly recommend DA Laser Clinic!",
      rating: 5
    }
  ];

  return (
    <div className="App">
      <Header />
      
      <section className="hero">
        <div className="hero-content">
          <h1>Advanced Laser Hair Removal & Skin Rejuvenation</h1>
          <p>Experience the latest in laser technology for permanent hair reduction and skin rejuvenation treatments, delivered by certified professionals.</p>
          <div className="hero-buttons">
            <Link to="/services" className="cta-button">View Services</Link>
            <Link to="/book" className="cta-button secondary">Book Now</Link>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Why Choose DA Laser Clinic</h2>
        <div className="features">
          <div className="feature">
            <h3>Expert Staff</h3>
            <p>Our certified professionals bring years of experience in laser treatments</p>
          </div>
          <div className="feature">
            <h3>Latest Technology</h3>
            <p>State-of-the-art equipment for safe and effective treatments</p>
          </div>
          <div className="feature">
            <h3>Personalized Care</h3>
            <p>Customized treatment plans for your specific needs</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="treatment-type">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Location</h3>
                <p>123 Laser Clinic Drive</p>
                <p>Suite 200</p>
                <p>Toronto, ON M5V 2T6</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>info@dalaserclinic.com</p>
              </div>
            </div>
            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2685189356225!2d-79.3866!3d43.6532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM5JzExLjUiTiA3OcKwMjMnMTEuOCJX!5e0!3m2!1sen!2sca!4v1625161234567!5m2!1sen!2sca"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Ready to Start Your Treatment?</h2>
        <Link to="/book" className="cta-button">Book Your Consultation</Link>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Doctors Advance Laser Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
