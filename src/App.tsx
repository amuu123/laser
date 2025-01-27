import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ServicesAndPricing from './pages/ServicesAndPricing';
import BookNow from './pages/BookNow';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Treatments from './pages/Treatments';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/services" element={<ServicesAndPricing />} />
        <Route path="/treatments" element={<Treatments />} />
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
          <h1>Transform Your Beauty Journey</h1>
          <p>Advanced aesthetic treatments tailored to enhance your natural beauty</p>
          <div className="hero-buttons">
            <Link to="/book" className="cta-button">Book Now</Link>
            <Link to="/services" className="secondary-button">View Services</Link>
          </div>
        </div>
      </section>

      <section className="services-showcase">
        <div className="services-container">
          <h2 className="section-title">Our Treatments</h2>
          <p className="section-subtitle">Experience excellence in aesthetic treatments</p>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="service-title">Laser Hair Removal</h3>
              <p className="service-description">Advanced technology for permanent hair reduction</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-spray-can"></i>
              </div>
              <h3 className="service-title">Hydrofacial</h3>
              <p className="service-description">Deep cleansing and skin rejuvenation</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-spa"></i>
              </div>
              <h3 className="service-title">Massage</h3>
              <p className="service-description">Relaxing therapeutic treatments</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-eraser"></i>
              </div>
              <h3 className="service-title">Tattoo Removal</h3>
              <p className="service-description">Safe and effective tattoo removal</p>
            </div>
            <Link to="/services" className="service-item view-all">
              <div className="service-icon">
                <i className="fas fa-chevron-right"></i>
              </div>
              <h3 className="service-title">View All Services</h3>
              <p className="service-description">Explore our complete range</p>
            </Link>
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
                <h3>Contact</h3>
                <p>Phone: 07442 193764</p>
                <p>Email: dalaserclinic@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Location</h3>
                <p>239 Lyndon Road</p>
                <p>Solihull</p>
                <p>B92 7QP</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <h3>Timings</h3>
                <p>Monday – Friday: 09:00 - 12:00, 14:00 - 18:00</p>
                <p>Saturday: 09:00 - 12:00, 14:00 - 17:00</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="contact-map">
              <iframe 
                title="DA Laser Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5783.6054338578415!2d-1.7966417113864361!3d52.44823059961083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bba2c24a4c53%3A0xd284abbf33a3bf6a!2sLaser%20Clinic!5e0!3m2!1sen!2suk!4v1737896856648!5m2!1sen!2suk"
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
