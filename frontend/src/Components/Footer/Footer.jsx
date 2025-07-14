import React from 'react';
import pai_logo from '../Assets/pai_logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const handleMenuItemClick = (menuItem) => {
        // You can add any additional logic here if needed
    };

    return (
        <div className='bg-black text-white py-20'>
            <div className="flex flex-wrap justify-center max-w-6xl mx-auto px-5">
                {/* Logo Section */}
                <div className="flex-1 max-w-[250px] mb-8 md:text-left text-center md:ml-0 sm:ml-8 xs:ml-16">
                    <div className="mb-4">
                        <Link to="/" onClick={() => handleMenuItemClick("Home")}>
                            <img src={pai_logo} alt="Logo" className="w-full max-w-[200px] xs:w-[150px]" />
                        </Link>
                    </div>
                    <p></p>
                    <p></p>
                    <div className="flex md:justify-start justify-center space-x-4 mt-5">
                        <a href="https://www.facebook.com/people/PCL-Infotech-Pvt-Ltd/61565409011377/" className="text-white hover:text-[#D33333] text-xl xs:text-lg">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/pclinfotech/" className="text-white hover:text-[#D33333] text-xl xs:text-lg">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fpcl_infotech" className="text-white hover:text-[#D33333] text-xl xs:text-lg">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </div>
                </div>
                
                {/* Links Section */}
                <div className="flex flex-wrap lg:flex-2 w-full lg:w-auto mt-8 lg:mt-0 justify-around">
                    <div className="flex-1 mx-5 mb-8 md:text-left text-center">
                        <h4 className="font-semibold mb-5">About Us</h4>
                        <ul className="list-none p-0">
                            <li className="mb-3"><Link to="/" className="no-underline text-gray-400 hover:text-[#D33333]">Home</Link></li>
                            <li className="mb-3"><Link to="/investments/alternative-investment-funds" className="no-underline text-gray-400 hover:text-[#D33333]">Alternative Investment Funds</Link></li>
                            <li className="mb-3"><Link to="/investments/portfolio-management-service" className="no-underline text-gray-400 hover:text-[#D33333]">Portfolio Management Service</Link></li>
                            <li className="mb-3"><Link to="/contact-us" className="no-underline text-gray-400 hover:text-[#D33333]">Contact Us</Link></li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 mx-5 mb-8 md:text-left text-center">
                        <h4 className="font-semibold mb-5">Contact Us</h4>
                        <ul className="list-none p-0">
                            <li className="mb-3 text-gray-400">
                                <i className="fas fa-envelope mr-2"></i>hr.paifundtech@gmail.com
                            </li>
                            <li className="mb-3 text-gray-400">
                                <i className="fas fa-phone mr-2"></i>+91 72002 - 76740
                            </li>
                            <li className="mb-3 text-gray-400">
                                <i className="fas fa-map-marker-alt mr-2"></i> No.2/ 156, 1st Floor, Poonamalle-Avadi Road,<br />
                                Senneerkuppam, Chennai-56
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="text-center mt-10 border-t border-gray-700 pt-5">
                <p>© 2025 PAI Fundtech. All rights reserved. 
                    <Link to="/terms-and-conditions" className="text-white hover:underline mx-1">Terms & Conditions</Link> · 
                    <Link to="/privacy-policy" className="text-white hover:underline mx-1">Privacy Policy</Link>
                </p>
            </div>
        </div>
    );
}

export default Footer;