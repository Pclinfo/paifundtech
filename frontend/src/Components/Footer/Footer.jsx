import React from 'react';
import './Footer.css';
import pai_logo from '../Assets/pai_logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const handleMenuItemClick = (menuItem) => {
        // You can add any additional logic here if needed
    };

    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-logo-section">
                    <div className="footer-logo">
                        <Link to="/" onClick={() => handleMenuItemClick("Home")}>
                            <img src={pai_logo} alt="Logo" />
                        </Link>
                        <p></p>
                    </div>
                    <p></p>
                    <p></p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/people/PCL-Infotech-Pvt-Ltd/61565409011377/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/pclinfotech/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fpcl_infotech">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>About Us</h4>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/investments vehicles">Investments Vehicles</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><i className="fas fa-envelope"></i>prachidaaiftech@gmail.com</li>
                        <li><i className="fas fa-phone"></i>+91 72002 - 76740</li>
                        <li><i className="fas fa-map-marker-alt"></i> No.2/ 156, 1st Floor, Poonamalle-Avadi Road,<br />
                            Senneerkuppam, Chennai-56</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 PAI Fundtech. All rights reserved. <Link to="/terms-and-conditions">Terms & Conditions</Link> · <Link to="/privacy-policy">Privacy Policy</Link></p>
            </div>
        </div>
    );
}

export default Footer;