import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChartLine, faBriefcase, faCaretDown } from '@fortawesome/free-solid-svg-icons';
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



  useEffect(() => {
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
  }, []);

  useEffect(() => {
    setShowSubmenu(false);
    setIsOpen(false);
  }, [location]);


  
  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};


  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
        <Link to="/" onClick={() => handleMenuItemClick("Home")}>
                    <img src={pai_logo} alt="Logo" />
                </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li className="submenu-parent" ref={submenuRef}>
            <span>
              Investment Vehicles <FontAwesomeIcon icon={faCaretDown} />
            </span>
            <ul className={`submenu ${showSubmenu ? 'active' : ''}`}>
              <li>
                <Link to="/alternative-investment-funds">
                  <FontAwesomeIcon icon={faChartLine} /> Alternative Investment Funds (AIF)
                </Link>
              </li>
              <li>
                <Link to="/portfolio-management-services">
                  <FontAwesomeIcon icon={faBriefcase} /> Portfolio Management Services
                </Link>
              </li>
            </ul>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;