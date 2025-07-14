import React, { useState } from 'react'
import './CSS/Services.css'
import pai_logo from './Assets/pai_logo.png'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import ia_services_img_1 from './Assets/ia_services_img_1.png'
import financial_accounting from './Assets/financial_accounting.png'
import compliance_regime from './Assets/compliance_regime.png'
import payroll_administration from './Assets/payroll_administration.png'
import compliance_diagnostics from './Assets/compliance_diagnostics.png'
import virtual_cfo from './Assets/virtual_cfo.png'
import representation from './Assets/representation.png'
import accounting_advisory_services from './Assets/accounting_advisory_services.png'
import us_gaap from './Assets/us_gaap.png'
import audit_assistance from './Assets/audit_assistance.png'
import special_purpose_audits from './Assets/special_purpose_audits.png'
import forensic_audits from './Assets/forensic_audits.png'
import it_audits from './Assets/it_audits.png'
import enterprise_risk from './Assets/enterprise_risk.png'
import internal_control_reviews from './Assets/internal_control_reviews.png'
import business_process from './Assets/business_process.png'
import planning_and_advisory from './Assets/planning_and_advisory.png'
import cross_border_taxation from './Assets/cross_border_taxation.png'
import transfer_pricing from './Assets/transfer_pricing.png'
import expatriates from './Assets/expatriates.png'
import indirect_taxation from './Assets/indirect_taxation.png'
import investment_funds from './Assets/investment_funds.png'
import corporate_advisory from './Assets/corporate_advisory.png'
import entry_strategy from './Assets/entry_strategy.png'
import factory_set from './Assets/factory_set.png'
import data_analytics from './Assets/data_analytics.png'
import digital_solutions from './Assets/digital_solutions.png'
import digital_transformation from './Assets/digital_transformation.png'
import cyber_security from './Assets/cyber_security.png'
import restructuring_management from './Assets/restructuring_management.png'
import secretarial_compliance from './Assets/secretarial_compliance.png'
import cloud_computing from './Assets/cloud_computing.png'
import backup_recovery from './Assets/backup_recovery.png'
import merge_acquisition from './Assets/merge_acquisition.png'


const Services = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
      setIsSubmitted(true);
      closeModal();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };




  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
  };


  return (
    <div className='services'>
      <div className="services-ai-img-1">
        <img src={ia_services_img_1} alt="" />
        <div className="services-ai-content">
          <h2>"Partner with PAI Fundtech for expert Audit, Assurance, and Tax services, tailored to help your business manage risk, ensure compliance, and seize new opportunities."</h2>
          <p>Delivering bespoke financial solutions with integrity, expertise, and innovation to drive your business success.</p>
          <button onClick={openModal}>Get Started</button>
        </div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal-content">
          <div className="pai-contact-form">
            <form onSubmit={handleSubmit}>
              <div className="pai-form-group">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="pai-form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="pai-form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Write your message.." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit">Send Message</button>
              {isSubmitted && <p>Thank you! Your form has been submitted.</p>}
            </form>
          </div>
        </Modal>
      </div>
      <div className="services-ai-content-1">
        <p>At Prachida, we specialize in empowering businesses and individuals through comprehensive financial solutions and cutting-edge digital technologies. Our diverse range of services is designed to cater to the evolving needs of modern enterprises and discerning investors.</p>
      </div>
      <div className="services-ai-content-subcard">
        <div className="services-ai-content-title-1">
          <h2>Our  Services</h2>
          <p>Professional services firms offer specialized expertise to support businesses in areas such as legal compliance, IT, and marketing. For example, a company facing new internet data regulations may hire a firm specializing in compliance to ensure it meets legal requirements. Similarly, an embedded marketing team within a company might be tasked with creating promotional materials for an industry event, helping the business reach its audience effectively. These firms don't produce tangible goods but provide essential knowledge and services to drive growth and ensure regulatory alignment.</p>
        </div>
        <div className="services-ai-content-title-2">
          <h3>Accounting and business support</h3>
        </div>
        <div className="services-ai-content-subcard-1">
          <div className="financial-accounting">
            <img src={financial_accounting} alt="" />
            <h3>Financial Accounting</h3>
            <p>We maintain your financials in full conformation with Local Laws and Global Reporting Statutory requirements. Further, we have a good review process to identify and correct other potential issues well on time as appropriate corrective steps</p>
          </div>
          <div className="compliance-regime">
            <img src={compliance_regime} alt="" />
            <h3>Compliance Regime</h3>
            <p>Regulations and keep them abreast of key matters under various federal, state, and local laws throughout India. We have streamlined  processes for our clients by establishing a unified system in order to manage a multitude of compliance obligations</p>
          </div>
          <div className="payroll-administration">
            <img src={payroll_administration} alt="" />
            <h3>Payroll Administration</h3>
            <p>employee payrolls with on-time payments. We further assist in the formulation of an HR manual stating your policies with compliance to Indian labour laws and help implement social security benefits: insurance and claims management.</p>
          </div>
        </div>
        <div className="services-ai-content-subcard-2">
          <div className="compliance-diagnostics">
            <img src={compliance_diagnostics} alt="" />
            <h3>Compliance Diagnostics</h3>
            <p>Our compliance diagnostics service specialized in offering independent business provide solutions that reduce these risks; enhance corporate governance, giving assurance to your management, board, shareholders</p>
          </div>
          <div className="virtual-cfo">
            <img src={virtual_cfo} alt="" />
            <h3>Virtual CFO</h3>
            <p>We are acting as your Virtual CFO, providing you with valuable  support-which, in effect, enables you to benefit from all that high-quality finance advice without having to pay for a fully employed finance team.</p>
          </div>
          <div className="representation">
            <img src={representation} alt="" />
            <h3>Representation and Dispute Resolution</h3>
            <p>Our teams work proactively on managing risks of potential conflicts with Indian tax or appellate authorities. We handle from developing responses and filing appeals to representing our clients before the tax officers to supporting senior counsels during judicial proceedings the full litigation process under experienced directors.</p>
          </div>
        </div>
      </div>
      <div className="services-ai-content-subcard">
        <div className="services-ai-content-title-2">
          <h3>ASSURANCE</h3>
        </div>
        <div className="services-ai-content-subcard-1">
          <div className="accounting-advisory-services">
            <img src={accounting_advisory_services} alt="" />
            <h3>Accounting Advisory Services</h3>
            <p>Our team, well-versed in global financial reporting standards with local regulations while also aligning with international reporting frameworks. We carefully review, analyze, and address any risks or inaccuracies to safeguard against potential issues.</p>
          </div>
          <div className="us-gaap">
            <img src={us_gaap} alt="" />
            <h3>IFRS / Ind-AS / US GAAP</h3>
            <p>For companies required to report under International Financial Reporting Standards (IFRS), Indian Accounting Standards (Ind-AS), or US GAAP We ensure all reporting obligations are fulfilled, resolving any challenges encountered during and after the transition process</p>
          </div>
          <div className="audit-assistance">
            <img src={audit_assistance} alt="" />
            <h3>Pre-Audit Assistance</h3>
            <p>We assess your financial statements to verify compliance with relevant accounting standards, regulatory requirements, and internal management policies. Our team offers guidance to resolve potential issues before the external audit, ensuring that any necessary disclosures are properly handled</p>
          </div>
        </div>
        <div className="services-ai-content-subcard-2">
          <div className="special-purpose-audits">
            <img src={special_purpose_audits} alt="" />
            <h3>Special Purpose Audits</h3>
            <p>We provide assistance with special audits by focusing on specific areas required by management or regulatory bodies, such as Corporate Social Responsibility (CSR), Anti-Money Laundering (AML), IT systems assessments, grant utilization, and more.</p>
          </div>
          <div className="special-purpose-audits">
            <img src={investment_funds} alt="" />
            <h3>Tax Benefits</h3>
            <p>Insurance products often come with tax advantages, allowing investors to grow their wealth while deferring or reducing their tax liabilities.</p>
          </div>
        </div>
      </div>
      <div className="services-ai-content-subcard">
        <div className="services-ai-content-title-2">
          <h3>Business Advisory</h3>
        </div>
        <div className="services-ai-content-subcard-1">
          <div className="corporate-advisory">
            <img src={corporate_advisory} alt="" />
            <h3>Corporate Advisory</h3>
            <p>We provide expert guidance to help clients assess proposed actions or strategies within the context of India's regulatory framework. Our multidisciplinary team offers clear, informed advice on matters related to the Foreign Exchange Management Act (FEMA), Foreign Direct Investment (FDI), Company Law, direct and indirect taxes, labor laws, Special Economic Zones (SEZ), and more.</p>
          </div>
          <div className="entry-strategy">
            <img src={entry_strategy} alt="" />
            <h3>Entry Strategy</h3>
            <p>We recommend the most suitable business structure aligned with your India strategy. Our team identifies risks and outlines the necessary steps for registering and operating entities such as Liaison Offices, Branches, Project Offices, Limited Liability Partnerships, Wholly Owned Subsidiaries, or Joint Ventures, in full compliance with regulatory and foreign exchange requirements.</p>
          </div>
          <div className="restructuring-management">
            <img src={restructuring_management} alt="" />
            <h3>Insolvency and Restructuring Management</h3>
            <p>Our team designs tailored solutions for office or factory closures, handling workforce management, hiring contractual employees, and developing recovery plans. When restructuring isn’t viable, we assist with liquidation, while exploring options for mergers or amalgamations through our network of insolvency professionals.</p>
          </div>
        </div>
        <div className="services-ai-content-subcard-2">
          <div className="factory-set">
            <img src={factory_set} alt="" />
            <h3>Factory Set-Up Support</h3>
            <p>We offer end-to-end assistance in setting up across India, from identifying the ideal location and key service providers to obtaining necessary government clearances. This includes liaising with authorities such as the Reserve Bank of India (RBI), Secretariat for Industrial Assistance (SIA), Registrar of Companies (ROC), Foreign Contribution Regulation Authority (FCRA), and the Ministry of Environment and Forests.</p>
          </div>
          <div className="secretarial-compliance">
            <img src={secretarial_compliance} alt="" />
            <h3>Secretarial Compliance</h3>
            <p>We help businesses meet their routine statutory obligations, including drafting and maintaining key records such as meeting minutes (Annual, Shareholder, Board), handling appointments and resignations of key personnel, managing capital changes, and more. We also provide infrastructure and manpower support during the setup phase, acting as nominee resident directors if required.</p>
          </div>
          <div className="merge-acquisition">
            <img src={merge_acquisition} alt="" />
            <h3>Merge & Acquisition</h3>
            <p>Our Acquisition and M&A Advisory service is designed to help businesses grow, diversify, and achieve strategic goals through well-executed acquisitions, mergers, or business takeovers. Whether you are looking to expand into new markets, acquire complementary businesses, or streamline operations, we provide the expert guidance needed to make informed decisions and ensure seamless transactions.</p>
          </div>
        </div>
      </div>
      <div className="services-ai-content-subcard">
        <div className="services-ai-content-title-2">
          <h3>Digital Automation and Transformation</h3>
        </div>
        <div className="services-ai-content-subcard-1">
          <div className="data-analytics">
            <img src={data_analytics} alt="" />
            <h3>Data Analytics</h3>
            <p>Our data analytics designs advanced dashboards driven by KPIs, providing simple, descriptive, and predictive views of the business. These targeted dashboards become an essential tool set for quick business decision-making with growth in focus.</p>
          </div>
          <div className="digital-solutions">
            <img src={digital_solutions} alt="" />
            <h3>Digital Solutions</h3>
            <p>Our digital solutions are tailored to an organization's needs, easy to implement, and enable seamless automation of manual processes by providing support and training on GST automation, return filing, e-invoicing, and e-way bills, compliance management, and more.</p>
          </div>
          <div className="digital-transformation">
            <img src={digital_transformation} alt="" />
            <h3>Digital Transformation</h3>
            <p>We enable companies to use technology in the best ways to outperform their operational processes, from Procure to Pay, Order to Cash, and Record to Report. Our experts analyze critical workflows, create cost-effective, customized digital strategies, and support your team through every step of the implementation process.</p>
          </div>
        </div>
        <div className="services-ai-content-subcard-2">
          <div className="cyber-security">
            <img src={cyber_security} alt="" />
            <h3>IT Security</h3>
            <p>It is indispensable for your organization to be strengthened with robust and reliable cybersecurity as technology becomes integral to your business. We help you enhance digital security by evaluating protocols, penetration tests, assessment of privacy measures, and ensuring compliance with industry certifications,with Cyber Security.</p>
          </div>
          <div className="cloud-computing">
            <img src={cloud_computing} alt="" />
            <h3>Cloud Computing</h3>
            <p>Cloud computing is the on-demand delivery of different computing services over the internet, including databases, software, servers, and analytics. Instead of maintaining physical data centers and servers, you access storage & computing power as needed from a cloud provider. </p>
          </div>
          <div className="backup-recovery">
            <img src={backup_recovery} alt="" />
            <h3>Backup and Recovery</h3>
            <p>Backup and recovery is a process that involves making duplicate copies of critical data so that it can be restored if needed. For financial institutions, data backup and recovery is especially important because data loss can have severe consequences, such as lost revenue and reputational damage.</p>
          </div>
        </div>
      </div>
      <div className="services-ai-content-subcard">
        <div className="services-ai-content-title-2">
          <h3>Risk Advisory</h3>
        </div>
        <div className="services-ai-content-subcard-1">
          <div className="forensic-audits">
            <img src={forensic_audits} alt="" />
            <h3>Forensic Audits </h3>
            <p>Protecting organizational assets is now more critical than ever. Our forensic audits have been conducted on behalf of the management or the regulators to detect fraud, resource misappropriation, misconduct and financial irregularities. We further offer digital forensics, anti-corruption investigations and cybercrime detection.</p>
          </div>
          <div className="it-audits">
            <img src={it_audits} alt="" />
            <h3>IT Audits</h3>
            <p>Through our specialized teams, vulnerabilities in all existing ERP systems, processes, and IT infrastructure of your organization are assessed. ITGC and cybersecurity can be considered for evaluation while carrying out Vulnerability Assessments and Penetration Testing to identify vulnerabilities.</p>
          </div>
          <div className="enterprise-risk">
            <img src={enterprise_risk} alt="" />
            <h3>Enterprise Risk Management (ERM)</h3>
            <p>Our enterprise risk management solution is very comprehensive, helping businesses identify essential risks and needed controls. We take a holistic approach to managing risks. This includes strategic, operational, compliance, and reporting risks, as well as pinpointing areas that require immediate attention.</p>
          </div>
        </div>
        <div className="services-ai-content-subcard-2">
          <div className="internal-control-reviews">
            <img src={internal_control_reviews} alt="" />
            <h3>Internal Control Reviews</h3>
            <p>We evaluate the adequacy of your organization's internal controls. This is done through a risk assessment wherein we evaluate the current controls in place and ensure that they are implemented properly. We document the processes, risks, and controls with the recommendation for what action to take and support them during the improvement phase.</p>
          </div>
          <div className="business-process">
            <img src={business_process} alt="" />
            <h3>Business Process Re-engineering</h3>
            <p>In the process, we do more than document procedures to help control but to eliminate outdated procedures and implement solutions in managing exceptions. This is therefore to achieve overall operational efficiency, aligned with a boost in performance due to modernized processes.</p>
          </div>
        </div>
      </div>
      <div className="services-ai-content-subcard">
        <div className="services-ai-content-title-2">
          <h3>Taxation</h3>
        </div>
        <div className="services-ai-content-subcard-1">
          <div className="planning-and-advisory">
            <img src={planning_and_advisory} alt="" />
            <h3>Planning and Advisory</h3>
            <p>We monitor changes in Indian tax legislations and their application for effective tax management of your overall tax strategy. We examine commercial and intercompany agreements and structure tax-efficient strategies, risk mitigation, tax due diligence and execution of tax efficiency analysis on your transactions.</p>
          </div>
          <div className="cross-border-taxation">
            <img src={cross_border_taxation} alt="" />
            <h3>Cross-Border Taxation</h3>
            <p>We advise clients on tax-efficient holding structures, design business models that reduce the probability of permanent establishment, and assist clients in the repatriation of funds in a tax-efficient manner. Additionally, we help facilitate cash flows through acquisition of lower tax withholding certificates and advance rulings with the Indian tax authorities</p>
          </div>
          <div className="transfer-pricing">
            <img src={transfer_pricing} alt="" />
            <h3>Transfer Pricing</h3>
            <p>Assistance on designing, implementing, and maintaining sound transfer pricing policies alignable with the global transfer pricing framework under BEPS guidelines.
              Can assist on APA scheme issues, Safe Harbour rules, ensure documentation and reporting requirements, such as Country-by-Country Reporting and Master File</p>
          </div>
        </div>
        <div className="services-ai-content-subcard-2">
          <div className="expatriates">
            <img src={expatriates} alt="" />
            <h3>Expatriates and High Net Individuals</h3>
            <p>We advise HNIs and handle international employee assignments. Our practice encompasses designing tax-efficient compensation packages, advising on social security obligations, managing stock option plans, obtaining no objection certificates, and filing tax returns.</p>
          </div>
          <div className="indirect-taxation">
            <img src={indirect_taxation} alt="" />
            <h3>Indirect Taxation</h3>
            <p>With a PAN India presence, we offer tax compliance support and advisory services on critical issues relating to GST and other state and local taxes. We provide insights into the implications of GST on transaction accounts, cross-border activities, tax classification, and structuring deals for maximum tax efficiency</p>
          </div>
          <div className="representation">
            <img src={representation} alt="" />
            <h3>Representation and Dispute Resolution</h3>
            <p>Our teams work proactively on managing risks of potential conflicts with Indian tax or appellate authorities. We handle from developing responses and filing appeals to representing our clients before the tax officers to supporting senior counsels during judicial proceedings the full litigation process under experienced directors.</p>
          </div>
        </div>
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
              <li><i className="fas fa-envelope"></i>hr.paifundtech@gmail.com</li>
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

export default Services
