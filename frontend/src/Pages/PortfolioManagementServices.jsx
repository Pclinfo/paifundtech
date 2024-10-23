import React from 'react'
import './CSS/PortfolioManagementServices.css'
import pai_logo from './Assets/pai_logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import portfolio_management_services from './Assets/portfolio_management_services.png'
import discretionary from './Assets/discretionary.png'
import non_discretionary from './Assets/non_discretionary.png'
import advisory from './Assets/advisory.png'



const PortfolioManagementServices = () => {


  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};


  return (
    <div className='pms'>
      <div className="pms-header-title-1">
        <h2>Portfolio Management Services</h2>
      </div>
      <div className="pms-header-content-1">
        <img src={portfolio_management_services} alt="" />
        <div className="pms-main-title">
          <p>Portfolio Management Services (PMS) is a licensed and specialized investment solutions designed to meet the financial goals of a select group of long-term investors.</p>
          <p>PMS is primarily offered by expert financial firms that manage the portfolios of high net worth individuals (HNIs), ultra-high net worth individuals (UHNIs), non-resident Indians (NRIs), and institutions.</p>
          <p>PMS providers create tailored portfolios that may include stocks, bonds, and other securities, based on the client’s specific investment goals and risk profile. The service is fee-based, with charges typically calculated as a percentage of the total assets under management (AUM).</p>
          <p>In India, PMS providers offer various investment strategies, such as value investing, growth investing, income-focused strategies, and quantitative approaches. They regularly update clients on portfolio performance and strive to deliver strong returns while managing risk effectively.</p>
        </div>
      </div>
      <div className="pms-card">
        <h2>Types of <span className='r-c'>Portfolio Management Services (PMS)</span></h2>
        <div className="pms-subcard-1">
          <h4><span className='r-c'>Discretionary PMS</span></h4>
          <p>In a Discretionary PMS, the portfolio manager has complete authority to make investment decisions on behalf of the client. The manager selects securities based on the client’s financial goals, risk tolerance, and other considerations. Clients do not need to approve each transaction but receive regular performance updates.</p>
        </div>
        <div className="pms-subcard-img-1">
          <img src={discretionary} alt="" />
        </div>
        <div className="pms-subcard-2">
          <h4><span className='r-c'>Non-Discretionary PMS</span></h4>
          <p>In a Non-Discretionary PMS, the portfolio manager advises on investments, but the client retains control over which securities to buy or sell. The manager provides research and analysis to support the client in making informed decisions.</p>
        </div>
        <div className="pms-subcard-img-2">
          <img src={non_discretionary} alt="" />
        </div>
        <div className="pms-subcard-3">
          <h4><span className='r-c'>Advisory PMS</span></h4>
          <p>It is similar to non-discretionary, but with a key distinction the portfolio manager’s role is limited to offering investment advice. The client retains full control, making all investment decisions and executing trades through their own trading account, based on the manager’s recommendations.</p>
        </div>
        <div className="pms-subcard-img-3">
          <img src={advisory} alt="" />
        </div>
      </div>
      <div className="pms-header-title-2">
        <h2><span className='r-c'>Our Key Insurance Schemes:</span></h2>
      </div>
      <div className="pms-header-content-2">
        <h4>1. Life Insurance Schemes</h4>
        <p>Life insurance is more than just a policy – it's a promise to protect your loved ones in case of unforeseen events. Our life insurance schemes offer:</p>
        <p>⦁	Comprehensive Coverage: Protect your family against financial hardships.</p>
        <p>⦁	Investment Opportunities: Certain policies allow you to grow your wealth while providing life cover</p>
        <p>⦁	Customizable Terms: Choose flexible payment and coverage terms based on your financial goals.</p>
        <p>⦁	Retirement Planning: Convert your life insurance into a steady income stream during your retirement</p>
      </div>
      <div className="pms-header-content-3">
        <h4>2. Health Insurance Schemes</h4>
        <p>Your health is your most valuable asset. Our health insurance schemes are designed to provide financial protection against medical emergencies:</p>
        <p>⦁	Extensive Hospital Coverage: Cover hospital bills, surgeries, and treatments with ease.</p>
        <p>⦁ Cashless Claims: Avail cashless treatment at our network of hospitals.</p>
        <p>⦁	Family Health Plans: Protect your entire family under a single, comprehensive health plan.</p>
        <p>⦁	Preventive Healthcare: Some plans offer wellness check-ups and preventive care benefits.</p>
      </div>
      <div className="pms-header-content-4">
        <h4>Why Invest in Insurance with Prachida?</h4>
        <p>⦁	Financial Protection: Safeguard yourself and your family from unforeseen events.</p>
        <p>⦁ Guaranteed Returns: Benefit from consistent returns while enjoying the security of insurance</p>
        <p>⦁	Tax Benefits: Enjoy potential tax advantages on your insurance investments</p>
        <p>⦁	Customized Plans: We offer a range of insurance products tailored to meet your unique needs.</p>
        <p>⦁	Expert Guidance: Our experienced advisors help you choose the best insurance solutions for long-term financial health</p>
      </div>
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
                            <li><i className="fas fa-phone"></i>+91 72002-76740</li>
                            <li><i className="fas fa-map-marker-alt"></i> No.2/ 156, 1st Floor, Poonamalle-Avadi Road,<br />
                            Senneerkuppam, Chennai-56</li>
                        </ul>
                    </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 PAI Fundtech. All rights reserved. <Link to="/terms-and-conditions">Terms & Conditions</Link> · <Link to="/privacy-policy">Privacy Policy</Link></p>
            </div>
        </div>
    </div>
  )
}

export default PortfolioManagementServices
