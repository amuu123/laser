import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Treatments.css';
import '../App.css';

const Treatments = () => {
  const [activeTab, setActiveTab] = useState('treatments');

  const treatments = {
    "Laser Hair Removal": [
      { name: "Full Face", price: "£80", description: "Complete hair removal treatment for the face", duration: "30-45 mins", sessions: "6-8 sessions recommended" },
      { name: "Full Body", price: "£350", description: "Complete hair removal treatment for the entire body", duration: "2-3 hours", sessions: "6-8 sessions recommended" },
      { name: "Legs", price: "£150", description: "Full legs hair removal treatment", duration: "45-60 mins", sessions: "6-8 sessions recommended" },
      { name: "Arms", price: "£100", description: "Complete arms hair removal", duration: "30-45 mins", sessions: "6-8 sessions recommended" },
      { name: "Underarms", price: "£60", description: "Underarms hair removal treatment", duration: "15-20 mins", sessions: "6-8 sessions recommended" },
      { name: "Bikini Line", price: "£80", description: "Bikini line hair removal treatment", duration: "20-30 mins", sessions: "6-8 sessions recommended" }
    ],
    "Skin Rejuvenation": [
      { name: "Full Face Treatment", price: "£120", description: "Advanced treatment for skin renewal and texture improvement", duration: "45-60 mins", sessions: "4-6 sessions recommended" },
      { name: "Neck Rejuvenation", price: "£90", description: "Specialized treatment for neck skin renewal", duration: "30-45 mins", sessions: "4-6 sessions recommended" },
      { name: "Face & Neck Combined", price: "£180", description: "Comprehensive treatment for face and neck skin renewal", duration: "75-90 mins", sessions: "4-6 sessions recommended" },
      { name: "Anti-Aging Treatment", price: "£150", description: "Comprehensive treatment for fine lines and wrinkles", duration: "60-75 mins", sessions: "4-6 sessions recommended" }
    ],
    "Facial Treatments": [
      { name: "Chemical Peel", price: "£85", description: "Treatment for skin renewal and texture improvement", duration: "30-45 mins", sessions: "4-6 sessions recommended" },
      { name: "Microdermabrasion", price: "£75", description: "Specialized treatment for skin exfoliation", duration: "30-45 mins", sessions: "4-6 sessions recommended" },
      { name: "LED Light Therapy", price: "£60", description: "Treatment for skin rejuvenation and collagen production", duration: "20-30 mins", sessions: "6-8 sessions recommended" },
      { name: "Acne Treatment", price: "£90", description: "Specialized treatment for acne and scarring", duration: "45-60 mins", sessions: "6-8 sessions recommended" }
    ]
  };

  const faqs = [
    {
      question: "How many sessions will I need?",
      answer: "The number of sessions varies depending on the treatment area and your individual needs. Most clients typically need 6-8 sessions for laser hair removal and 4-6 sessions for skin treatments for optimal results."
    },
    {
      question: "Is the treatment painful?",
      answer: "Our advanced laser technology includes cooling systems for maximum comfort. Most clients describe the sensation as mild and tolerable. We can also adjust the settings to ensure your comfort throughout the treatment."
    },
    {
      question: "How long between sessions?",
      answer: "The interval between sessions varies by treatment type. For laser hair removal, sessions are typically scheduled 4-6 weeks apart for facial treatments and 6-8 weeks for body treatments. Skin rejuvenation treatments usually require 3-4 weeks between sessions."
    },
    {
      question: "When will I see results?",
      answer: "Many clients notice improvements after their first session, with optimal results visible after completing the recommended treatment course. Results vary by individual and treatment type."
    },
    {
      question: "How should I prepare for my treatment?",
      answer: "General preparation includes avoiding sun exposure for 2 weeks, stopping retinoid use 5 days prior, and avoiding waxing or plucking for 4 weeks. Specific instructions will be provided during your consultation based on your chosen treatment."
    },
    {
      question: "What aftercare is required?",
      answer: "Aftercare varies by treatment but generally includes applying SPF 30+ sunscreen daily, avoiding hot showers for 24 hours, and following a gentle skincare routine. Detailed aftercare instructions will be provided after your treatment."
    }
  ];

  const beforeAfterCare = {
    before: [
      "Avoid sun exposure for 2 weeks",
      "Stop using retinoids 5 days prior",
      "Shave the treatment area 24h before (for laser hair removal)",
      "Avoid waxing or plucking for 4 weeks",
      "Remove all makeup before facial treatments",
      "Avoid caffeine and alcohol 24 hours before treatment"
    ],
    after: [
      "Apply SPF 30+ sunscreen daily",
      "Avoid hot showers for 24 hours",
      "No swimming or saunas for 48 hours",
      "Gentle skincare routine for 3 days",
      "Avoid direct sun exposure for 2 weeks",
      "Keep the treated area clean and dry"
    ]
  };

  return (
    <div className="treatments-page">
      <Header />
      
      <div className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Our Treatments</h1>
            <p>Professional aesthetic treatments tailored to your needs</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tabs-container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'treatments' ? 'active' : ''}`}
              onClick={() => setActiveTab('treatments')}
            >
              Treatments & Pricing
            </button>
            <button 
              className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              FAQ
            </button>
            <button 
              className={`tab ${activeTab === 'care' ? 'active' : ''}`}
              onClick={() => setActiveTab('care')}
            >
              Treatment Care
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'treatments' && (
              <div className="treatments-content">
                {Object.entries(treatments).map(([category, items]) => (
                  <section key={category} className="treatment-category">
                    <h2>{category}</h2>
                    <div className="treatments-grid">
                      {items.map((treatment, index) => (
                        <div key={index} className="treatment-card">
                          <div className="treatment-details">
                            <h3>{treatment.name}</h3>
                            <p className="price">{treatment.price}</p>
                            <p className="description">{treatment.description}</p>
                            <div className="treatment-meta">
                              <p><strong>Duration:</strong> {treatment.duration}</p>
                              <p><strong>Course:</strong> {treatment.sessions}</p>
                            </div>
                          </div>
                          <Link 
                            to={`/book?treatment=${encodeURIComponent(treatment.name)}`} 
                            className="book-button"
                          >
                            Book Now
                          </Link>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="faq-content">
                <div className="faq-grid">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-card">
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="care-content">
                <div className="care-grid">
                  <div className="care-card">
                    <h3>Before Treatment</h3>
                    <ul>
                      {beforeAfterCare.before.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="care-card">
                    <h3>After Treatment</h3>
                    <ul>
                      {beforeAfterCare.after.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Start Your Treatment?</h2>
            <p>Book your free consultation today and take the first step towards achieving your goals.</p>
            <div className="cta-buttons">
              <Link to="/book" className="primary-button">Book Free Consultation</Link>
              <Link to="/contact" className="secondary-button">Contact Us</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Treatments;
