import React, { useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    if (!isHomePage) {
      // Navigate to home and then scroll after a small delay
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isHomePage, navigate]);

  const handleHomeClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/');
    } else {
      scrollToTop();
    }
  }, [isHomePage, navigate, scrollToTop]);

  // Handle initial scroll position when navigating with hash
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="nav-links-left">
          <a href="/" onClick={handleHomeClick}>Home</a>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>About</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact</a>
        </div>
        <div className="logo-container">
          <a href="/" onClick={handleHomeClick}>
            <img src="/images/logo.png" alt="Doctors Advance Laser Clinic" />
          </a>
        </div>
        <div className="nav-links-right">
          <Link to="/services" onClick={scrollToTop}>Services & Pricing</Link>
          <Link to="/book" className="book-now-link" onClick={scrollToTop}>Book Now</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
