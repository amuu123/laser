import React, { useState } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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
    
    if (name === 'phone') {
      // Only allow digits
      const numbersOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleTreatmentToggle = (treatmentId: string) => {
    setSelectedTreatments(prev => {
      if (prev.includes(treatmentId)) {
        return prev.filter(id => id !== treatmentId);
      }
      return [...prev, treatmentId];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const selectedTreatmentNames = selectedTreatments.map(id => 
        treatments.find(t => t.id === id)?.name
      ).filter(name => name !== undefined) as string[];

      if (selectedTreatmentNames.length === 0) {
        setSubmitStatus({
          type: 'error',
          message: 'Please select at least one treatment'
        });
        return;
      }

      const response = await fetch('https://sendbookingemail-ic5jdcj5sa-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          treatments: selectedTreatmentNames
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Booking request sent successfully! We will contact you shortly.'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
        setSelectedTreatments([]);
      } else {
        throw new Error(data.message || 'Failed to send booking request');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send booking request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  pattern="[0-9]{9,}"
                  title="Enter a correct phone number"
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
                  min={new Date().toISOString().split('T')[0]}
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

          <button 
            type="submit" 
            className="submit-button" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Book Appointment'}
          </button>

          {submitStatus.type && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookNow;
