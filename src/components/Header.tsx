import React, { useEffect, useCallback, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    if (!isHomePage) {
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
    setIsMenuOpen(false);
  }, [isHomePage, navigate]);

  const handleHomeClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/');
    } else {
      scrollToTop();
    }
    setIsMenuOpen(false);
  }, [isHomePage, navigate, scrollToTop]);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="nav-links-left">
          <a href="/" onClick={handleHomeClick}>HOME</a>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>ABOUT</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>CONTACT</a>
        </div>

        <div className="logo-container">
          <a href="/" onClick={handleHomeClick}>
            <img src="/images/logo.png" alt="Doctors Advance Laser Clinic" />
          </a>
        </div>

        <div className="nav-links-right">
          <Link to="/services">SERVICES & PRICING</Link>
          <Link to="/book" className="book-now-link">BOOK NOW</Link>
        </div>

        <div className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/" onClick={handleHomeClick}>HOME</a>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>ABOUT</a>
          <Link to="/services" onClick={() => { scrollToTop(); setIsMenuOpen(false); }}>
            SERVICES & PRICING
          </Link>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>CONTACT</a>
          <Link to="/book" className="book-now-link" onClick={() => { scrollToTop(); setIsMenuOpen(false); }}>
            BOOK NOW
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
