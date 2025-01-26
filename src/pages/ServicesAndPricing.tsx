import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css';

const ServicesAndPricing = () => {
  const services = [
    {
      category: "Laser Hair Removal",
      treatments: [
        { name: "Full Face", price: "£80", description: "Complete hair removal treatment for the face" },
        { name: "Full Body", price: "£350", description: "Complete hair removal treatment for the entire body" },
        { name: "Legs", price: "£150", description: "Full legs hair removal treatment" },
        { name: "Arms", price: "£100", description: "Complete arms hair removal" },
        { name: "Underarms", price: "£60", description: "Underarms hair removal treatment" },
        { name: "Bikini Line", price: "£80", description: "Bikini line hair removal treatment" }
      ]
    },
    {
      category: "Skin Rejuvenation",
      treatments: [
        { name: "Full Face Treatment", price: "£120", description: "Advanced treatment for skin renewal and texture improvement" },
        { name: "Neck Rejuvenation", price: "£90", description: "Specialized treatment for neck skin renewal" },
        { name: "Face & Neck Combined", price: "£180", description: "Comprehensive treatment for face and neck skin renewal" },
        { name: "Anti-Aging Treatment", price: "£150", description: "Comprehensive treatment for fine lines and wrinkles" }
      ]
    },
    {
      category: "Facial Treatments",
      treatments: [
        { name: "Chemical Peel", price: "£85", description: "Treatment for skin renewal and texture improvement" },
        { name: "Microdermabrasion", price: "£75", description: "Specialized treatment for skin exfoliation" },
        { name: "LED Light Therapy", price: "£60", description: "Treatment for skin rejuvenation and collagen production" },
        { name: "Acne Treatment", price: "£90", description: "Specialized treatment for acne and scarring" }
      ]
    }
  ];

  return (
    <div className="services-pricing-page">
      <Header />
      
      <div className="services-container">
        <div className="services-hero">
          <h1>Our Services & Pricing</h1>
          <p>Professional treatments tailored to your needs</p>
        </div>

        <section className="pricing-section">
          {services.map((serviceCategory, index) => (
            <div key={index} className="service-category">
              <h2>{serviceCategory.category}</h2>
              <div className="services-grid">
                {serviceCategory.treatments.map((treatment, treatmentIndex) => (
                  <div key={treatmentIndex} className="service-card">
                    <div className="service-card-content">
                      <h3>{treatment.name}</h3>
                      <p className="price">{treatment.price}</p>
                      <p className="description">{treatment.description}</p>
                    </div>
                    <Link 
                      to={`/book?treatment=${encodeURIComponent(treatment.name)}`} 
                      className="book-service-button"
                    >
                      Book This Treatment
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="treatment-process">
          <h2>Your Treatment Journey</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Free Consultation</h3>
              <p>Meet with our experts to discuss your goals and create a personalized treatment plan.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Treatment Session</h3>
              <p>Experience comfortable treatments using the latest laser technology.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Aftercare</h3>
              <p>Receive detailed aftercare instructions and schedule follow-up sessions.</p>
            </div>
          </div>
        </section>

        <section className="treatment-info-cards">
          <div className="info-card preparation">
            <h3>Before Your Treatment</h3>
            <ul>
              <li>Avoid sun exposure for 2 weeks</li>
              <li>Stop using retinoids 5 days prior</li>
              <li>Shave the treatment area 24h before</li>
              <li>Avoid waxing or plucking for 4 weeks</li>
            </ul>
          </div>
          
          <div className="info-card aftercare">
            <h3>Aftercare Guidelines</h3>
            <ul>
              <li>Apply SPF 30+ sunscreen daily</li>
              <li>Avoid hot showers for 24 hours</li>
              <li>No swimming or saunas for 48 hours</li>
              <li>Gentle skincare routine for 3 days</li>
            </ul>
          </div>
        </section>

        <section className="booking-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Book your free consultation today and take the first step towards achieving your goals.</p>
            <div className="cta-buttons">
              <Link to="/book" className="primary-button">Book Free Consultation</Link>
              <a href="#contact" className="secondary-button">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How many sessions will I need?</h3>
              <p>The number of sessions varies depending on the treatment area and your individual needs. Most clients typically need 6-8 sessions for optimal results.</p>
            </div>
            <div className="faq-item">
              <h3>Is the treatment painful?</h3>
              <p>Our advanced laser technology includes cooling systems for maximum comfort. Most clients describe the sensation as mild and tolerable.</p>
            </div>
            <div className="faq-item">
              <h3>How long between sessions?</h3>
              <p>Sessions are typically scheduled 4-6 weeks apart for facial treatments and 6-8 weeks for body treatments.</p>
            </div>
            <div className="faq-item">
              <h3>When will I see results?</h3>
              <p>Many clients notice improvements after their first session, with optimal results visible after completing the recommended treatment course.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesAndPricing;
