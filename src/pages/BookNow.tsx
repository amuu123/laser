import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css';

interface Treatment {
  id: string;
  name: string;
  category: string;
}

const BookNow = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);

  const treatments: Treatment[] = [
    { id: 'lhr-full-body', name: 'Full Body Laser Hair Removal', category: 'Laser Hair Removal' },
    { id: 'lhr-face', name: 'Facial Hair Removal', category: 'Laser Hair Removal' },
    { id: 'lhr-legs', name: 'Legs Hair Removal', category: 'Laser Hair Removal' },
    { id: 'lhr-arms', name: 'Arms Hair Removal', category: 'Laser Hair Removal' },
    { id: 'lhr-back', name: 'Back Hair Removal', category: 'Laser Hair Removal' },
    { id: 'skin-rejuv', name: 'Skin Rejuvenation', category: 'Skin Treatments' },
    { id: 'acne', name: 'Acne Treatment', category: 'Skin Treatments' },
    { id: 'pigmentation', name: 'Pigmentation Treatment', category: 'Skin Treatments' },
    { id: 'anti-aging', name: 'Anti-Aging Treatment', category: 'Skin Treatments' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTreatmentToggle = (treatmentId: string) => {
    setSelectedTreatments(prev => {
      if (prev.includes(treatmentId)) {
        return prev.filter(id => id !== treatmentId);
      }
      return [...prev, treatmentId];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({
      ...formData,
      treatments: selectedTreatments.map(id => 
        treatments.find(t => t.id === id)?.name
      )
    });
    // Add your form submission logic here
  };

  return (
    <div className="book-now-page">
      <Header />
      
      <div className="booking-container">
        <h1>Book Your Treatment</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-section">
            <h2>Select Your Treatments</h2>
            <div className="treatments-grid">
              {treatments.map(treatment => (
                <div 
                  key={treatment.id}
                  className={`treatment-option ${selectedTreatments.includes(treatment.id) ? 'selected' : ''}`}
                  onClick={() => handleTreatmentToggle(treatment.id)}
                >
                  <span className="treatment-name">{treatment.name}</span>
                  <span className="treatment-category">{treatment.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h2>Your Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time</label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
          </div>

          <button type="submit" className="submit-button">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
