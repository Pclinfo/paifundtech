import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import pai_logo from '../Assets/pai_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Use refs to detect clicks outside dropdowns
  const dropdownRefs = useRef({});

  // Handle window scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle clicks outside of dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If active dropdown exists and click is outside that dropdown
      if (
        activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Toggle dropdown menu
  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  // Define submenu structure
  const menuStructure = {
    'Investments': [
      { label: 'Alternative Investment Funds', path: '/investments/alternative-investment-funds' },
      { label: 'Portfolio Management Service', path: '/investments/portfolio-management-service' }
    ],
    'Our Business': [
      { label: 'Venture Capital', path: '/our-business/venture-capital' },
      { label: 'Hedge Funds', path: '/our-business/hedge-funds' },
      { label: 'Insurance Funds', path: '/our-business/insurance-funds' },
      { label: 'Project Funds', path: '/our-business/project-funds' },
      { label: 'Debt Funds', path: '/our-business/debt-funds' },
      { label: 'Private Equity Funds', path: '/our-business/private-equity-funds' }
    ],
    'Financial Services': [
      { label: 'Loan', path: '/financial-services/loan' }
    ],
    'Financial Consultant': [
      { label: 'Accounting & Business Support', path: '/financial-consultant/accounting-business-support' }
    ],
    'Research & Development': [
      { label: 'Business & Digital Solutions', path: '/research-development/business-digital' }
    ]
  };

  // Register dropdown ref
  const registerDropdownRef = (menuName, ref) => {
    if (ref && !dropdownRefs.current[menuName]) {
      dropdownRefs.current[menuName] = ref;
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isSticky ? 'shadow-md' : ''} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={pai_logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden custom-md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink to="/" label="Home" />

              {/* Investments Dropdown */}
              <div
                className="relative"
                ref={(ref) => registerDropdownRef('Investments', ref)}
              >
                <button
                  onClick={() => toggleDropdown('Investments')}
                  className={`text-base font-medium inline-flex items-center ${activeDropdown === 'Investments'
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                    : 'text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2'
                    }`}
                >
                  Investments
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'Investments' ? 'transform rotate-180' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeDropdown === 'Investments' && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      {menuStructure['Investments'].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Our Business Dropdown */}
              <div
                className="relative"
                ref={(ref) => registerDropdownRef('Our Business', ref)}
              >
                <button
                  onClick={() => toggleDropdown('Our Business')}
                  className={`text-base font-medium inline-flex items-center ${activeDropdown === 'Our Business'
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                    : 'text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2'
                    }`}
                >
                  Our Business
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'Our Business' ? 'transform rotate-180' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeDropdown === 'Our Business' && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      {menuStructure['Our Business'].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Financial Services Dropdown */}
             
              <div
                className="relative"
                ref={(ref) => registerDropdownRef('Financial Services', ref)}
              >
                <button
                  onClick={() => toggleDropdown('Financial Services')}
                  className={`text-base font-medium inline-flex items-center ${activeDropdown === 'Financial Services'
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                    : 'text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2'
                    }`}
                >
                  Financial Services
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'Financial Services' ? 'transform rotate-180' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeDropdown === 'Financial Services' && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      {menuStructure['Financial Services'].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Financial Consultant Dropdown */}
              <div
                className="relative"
                ref={(ref) => registerDropdownRef('Financial Consultant', ref)}
              >
                <button
                  onClick={() => toggleDropdown('Financial Consultant')}
                  className={`text-base font-medium inline-flex items-center ${activeDropdown === 'Financial Consultant'
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                    : 'text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2'
                    }`}
                >
                  Financial Consultant
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'Financial Consultant' ? 'transform rotate-180' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeDropdown === 'Financial Consultant' && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      {menuStructure['Financial Consultant'].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                ref={(ref) => registerDropdownRef('Research & Development', ref)}
              >
                <button
                  onClick={() => toggleDropdown('Research & Development')}
                  className={`text-base font-medium inline-flex items-center ${activeDropdown === 'Research & Development'
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                    : 'text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2'
                    }`}
                >
                  R & D
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'Research & Development' ? 'transform rotate-180' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeDropdown === 'Research & Development' && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      {menuStructure['Research & Development'].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>


              <NavLink to="/contact-us" label="Contact Us" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="custom-md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setActiveDropdown(null); // Close any open dropdown when toggling mobile menu
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="custom-md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" label="Home" />

            {/* Mobile Investments Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('Investments-Mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50"
              >
                <span>Investments</span>
                <svg
                  className={`h-4 w-4 transition-transform ${activeDropdown === 'Investments-Mobile' ? 'transform rotate-180' : ''
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'Investments-Mobile' && (
                <div className="mt-1 ml-4 border-l-2 border-gray-200 pl-2">
                  {menuStructure['Investments'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Our Business Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('Our Business-Mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50"
              >
                <span>Our Business</span>
                <svg
                  className={`h-4 w-4 transition-transform ${activeDropdown === 'Our Business-Mobile' ? 'transform rotate-180' : ''
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'Our Business-Mobile' && (
                <div className="mt-1 ml-4 border-l-2 border-gray-200 pl-2">
                  {menuStructure['Our Business'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile Financial Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('Financial Services-Mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50"
              >
                <span>Financial Services</span>
                <svg
                  className={`h-4 w-4 transition-transform ${activeDropdown === 'Financial Services-Mobile' ? 'transform rotate-180' : ''
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'Financial Services-Mobile' && (
                <div className="mt-1 ml-4 border-l-2 border-gray-200 pl-2">
                  {menuStructure['Financial Services'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Financial Consultant Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('Financial Consultant-Mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50"
              >
                <span>Financial Consultant</span>
                <svg
                  className={`h-4 w-4 transition-transform ${activeDropdown === 'Financial Consultant-Mobile' ? 'transform rotate-180' : ''
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'Financial Consultant-Mobile' && (
                <div className="mt-1 ml-4 border-l-2 border-gray-200 pl-2">
                  {menuStructure['Financial Consultant'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

             {/* Mobile R&D Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('R&D-Mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50"
              >
                <span>R&D</span>
                <svg
                  className={`h-4 w-4 transition-transform ${activeDropdown === 'R&D-Mobile' ? 'transform rotate-180' : ''
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {activeDropdown === 'R&D-Mobile' && (
                <div className="mt-1 ml-4 border-l-2 border-gray-200 pl-2">
                  {menuStructure['Research & Development'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <MobileNavLink to="/research-development/business-digital" label="R&D" /> */}
            <MobileNavLink to="/contact-us" label="Contact Us" />
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="text-base font-medium text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"
    >
      {label}
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50"
    >
      {label}
    </Link>
  );
};

export default Navbar;