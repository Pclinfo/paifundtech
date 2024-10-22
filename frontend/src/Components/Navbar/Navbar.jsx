import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faChartLine,
  faBriefcase,
  faCaretDown,
  faMoneyBillWave // Added for bonds icon
} from '@fortawesome/free-solid-svg-icons';
import pai_logo from '../Assets/pai_logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll position on navigation
  useEffect(() => {
    // Scroll to top whenever location changes
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setShowSubmenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [location.pathname]); // Add location.pathname as dependency

  // Reset menu states on navigation
  useEffect(() => {
    setShowSubmenu(false);
    setIsOpen(false);
  }, [location]);

  // Custom Link component that ensures scroll reset
  const ScrollToTopLink = ({ to, children, onClick }) => {
    const handleClick = (e) => {
      if (onClick) onClick(e);
      window.scrollTo(0, 0);
    };

    return (
      <Link to={to} onClick={handleClick}>
        {children}
      </Link>
    );
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <ScrollToTopLink to="/">
            <img src={pai_logo} alt="Logo" />
          </ScrollToTopLink>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><ScrollToTopLink to="/">Home</ScrollToTopLink></li>
          <li><ScrollToTopLink to="/services">Services</ScrollToTopLink></li>
          <li className="submenu-parent" ref={submenuRef}>
            <span onClick={() => setShowSubmenu(!showSubmenu)}>
              Investment Vehicles <FontAwesomeIcon icon={faCaretDown} />
            </span>
            <ul className={`submenu ${showSubmenu ? 'active' : ''}`}>
              <li>
                <ScrollToTopLink to="/alternative-investment-funds">
                  <FontAwesomeIcon icon={faChartLine} /> Alternative Investment Funds (AIF)
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/portfolio-management-services">
                  <FontAwesomeIcon icon={faBriefcase} /> Portfolio Management Services
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/bonds">
                  <FontAwesomeIcon icon={faMoneyBillWave} /> Bonds
                </ScrollToTopLink>
              </li>
            </ul>
          </li>
          <li><ScrollToTopLink to="/contact">Contact Us</ScrollToTopLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;