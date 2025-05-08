import React from 'react';
import { Link } from 'react-router-dom';
import financial_advisor from '../Assets/financial_advisor.webp'
import services_financial_advisor from '../Assets/services_financial_advisor.webp'
import financial_accounting_financial_advisor from '../Assets/financial_accounting_financial_advisor.webp'
import compliance_regime_financial_advisor from '../Assets/compliance_regime_financial_advisor.webp'
import payroll_administration_financial_advisor from '../Assets/payroll_administration_financial_advisor.webp'
import compliance_diagnostics_financial_advisor from '../Assets/compliance_diagnostics_financial_advisor.webp'
import virtual_financial_advisor from '../Assets/virtual_financial_advisor.webp'
import representation_and_dispute_resolution_financial_advisor from '../Assets/representation_and_dispute_resolution_financial_advisor.webp'
import accounting_advisory_services_financial_advisor from '../Assets/accounting_advisory_services_financial_advisor.webp'
import insightpen_financial_advisor from '../Assets/insightpen_financial_advisor.webp'
import pre_audit_assistance_financial_advisor from '../Assets/pre_audit_assistance_financial_advisor.webp'
import special_purpose_audits_financial_advisor from '../Assets/special_purpose_audits_financial_advisor.webp'
import tax_benefits_financial_advisor from '../Assets/tax_benefits_financial_advisor.webp'
import forensic_audits_financial_consultant from '../Assets/forensic_audits_financial_consultant.webp'
import it_audits_financial_consultant from '../Assets/it_audits_financial_consultant.webp'
import enterprise_rise_management_financial_consultant from '../Assets/enterprise_rise_management_financial_consultant.webp'
import internal_control_reviews_financial_consultant from '../Assets/internal_control_reviews_financial_consultant.webp'
import business_process_reengineering_financial_consultant from '../Assets/business_process_reengineering_financial_consultant.webp'
import planning_and_advisory_financial_consultant from '../Assets/planning_and_advisory_financial_consultant.webp'
import cross_border_taxation_financial_consultant from '../Assets/cross_border_taxation_financial_consultant.webp'
import transfer_pricing_financial_consultant from '../Assets/transfer_pricing_financial_consultant.webp'
import expatriates_and_highnet_individuals_financial_consultant from '../Assets/expatriates_and_highnet_individuals_financial_consultant.webp'
import indirect_taxation_financial_consultant from '../Assets/indirect_taxation_financial_consultant.webp'
import representation_and_dispute_resolution_financial_consultant from '../Assets/representation_and_dispute_resolution_financial_consultant.webp'
import { Helmet } from 'react-helmet';

import GetStarted from '../../Components/GetStarted/GetStarted';



const AccountingBusinessSupport = () => {



  return (
    <div className="bg-white">
      <Helmet>
        <title>Expert Audit, Assurance, and Tax Services - PAI Fundtech</title>
        <meta name="description" content="Delivering bespoke financial solutions with integrity, expertise, and innovation to drive your business success. Get expert Audit, Assurance, and Tax services from PAI Fundtech." />
        <meta name="keywords" content="Audit, Assurance, Tax, Financial Consulting, Compliance, Payroll Administration, Virtual CFO, Representation, Dispute Resolution, Accounting Advisory, IFRS, Ind-AS, US GAAP, Pre-Audit, Special Purpose Audits, Tax Benefits, Forensic Audits, IT Audits, Enterprise Risk Management, Internal Controls, Business Process Reengineering, Tax Planning, Advisory, Cross-Border Taxation, Transfer Pricing, Expatriates, High Net Individuals, Indirect Taxation" />
        <meta property="og:title" content="Expert Audit, Assurance, and Tax Services - PAI Fundtech" />
        <meta property="og:description" content="Delivering bespoke financial solutions with integrity, expertise, and innovation to drive your business success. Get expert Audit, Assurance, and Tax services from PAI Fundtech." />
        <meta property="og:image" content="/path/to/your/og_image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/financial" />
        <meta name="twitter:title" content="Expert Audit, Assurance, and Tax Services - PAI Fundtech" />
        <meta name="twitter:description" content="Delivering bespoke financial solutions with integrity, expertise, and innovation to drive your business success. Get expert Audit, Assurance, and Tax services from PAI Fundtech." />
        <meta name="twitter:image" content="/path/to/your/twitter_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px] bg-gradient-to-r from-gray-100 to-gray-200">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${financial_advisor})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${financial_advisor})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner with PAI Fundtech for expert Audit, Assurance, and Tax services
            </h1>
            <p className="text-lg text-white mb-8">
              Delivering bespoke financial solutions with integrity, expertise, and innovation to drive your business success
            </p>
            <Link to="/contact-us">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Register to Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-800 max-w-4xl mx-auto text-center sm:text-left">
            At PAI Fundtech, we specialize in empowering businesses and individuals through comprehensive financial solutions and cutting-edge digital technologies. Whether you're an enterprise, a discerning investor, or a financial advisor, our diverse range of services is designed to cater to your evolving needs.
          </p>
        </div>
      </div>


      {/* What is Hedge Funds */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Professional services firms offer expertise in areas like legal compliance, IT, marketing, and financial consulting. For instance, a firm may assist with meeting data regulations or crafting promotional strategies for industry events. Financial consultants help optimize financial strategies for growth. These firms focus on providing essential knowledge rather than tangible goods, ensuring businesses thrive. Their services are key to achieving regulatory compliance and effective operations.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <img
              src={services_financial_advisor}
              alt="Investment Team"
              className="w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12"> Accounting and business support </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: financial_accounting_financial_advisor,
                title: 'Financial Accounting',
                description: 'We ensure your financial records are maintained in strict compliance with local regulations and global statutory reporting requirements. As your Financial consultant, we conduct comprehensive reviews to identify and address potential issues promptly, implementing corrective actions to maintain accuracy and reliability.'
              },
              {
                src: compliance_regime_financial_advisor,
                title: 'Compliance Regime',
                description: 'We keep our clients well-informed about critical regulatory matters under federal, state, and local laws across India. Our Financial advisors have developed streamlined systems to efficiently manage diverse compliance requirements, ensuring a cohesive approach to meeting obligations.'
              },
              {
                src: payroll_administration_financial_advisor,
                title: 'Payroll Administration',
                description: 'We handle employee payrolls with precision and ensure timely payments. As your trusted Financial consultant, we also assist in creating HR manuals aligned with Indian labor laws and help implement social security benefits, such as insurance and claims management.'
              },
              {
                src: compliance_diagnostics_financial_advisor,
                title: 'Compliance Diagnostics',
                description: 'Our diagnostic services provide independent business solutions to mitigate risks, strengthen corporate governance, and offer assurance to your management, board, and stakeholders.'
              },
              {
                src: virtual_financial_advisor,
                title: 'Virtual CFO',
                description: 'As your Virtual CFO, we provide valuable support customized to your business needs. This allows you to access high-quality financial advice without the expense of a full-time finance team, enabling you to focus on your core operations'
              },
              {
                src: representation_and_dispute_resolution_financial_advisor,
                title: 'Representation and Dispute Resolution',
                description: 'Our teams proactively manage risks related to conflicts with Indian tax or appellate authorities. We handle responses, and appeals, and represent clients before tax officers. Our experienced directors support senior counsel throughout judicial proceedings and the litigation process'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="mx-auto mb-4 w-24 h-24 object-cover"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Assurance   </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: accounting_advisory_services_financial_advisor,
                title: 'Accounting Advisory Services',
                description: 'Our team is proficient in global financial reporting standards and local regulations, ensuring alignment with international reporting frameworks. We meticulously review, analyze, and address any potential risks or inaccuracies to safeguard against future issues. Our financial consultant expertise offers comprehensive advice to meet your accounting needs.'
              },
              {
                src: insightpen_financial_advisor,
                title: 'IFRS / Ind-AS / US GAAP',
                description: 'For companies required to report under International Financial Reporting Standards (IFRS), Indian Accounting Standards (Ind-AS), or US GAAP, we ensure all reporting obligations are met and resolve any challenges that arise during or after the transition process.'
              },
              {
                src: pre_audit_assistance_financial_advisor,
                title: 'Pre-Audit Assistance',
                description: 'We review your financial statements to ensure compliance with relevant accounting standards, regulatory requirements, and internal management policies. Our team provides guidance to resolve potential issues before the external audit, ensuring that necessary disclosures are properly managed. Partnering with a financial consultant ensures effective pre-audit preparation.'
              },
              {
                src: special_purpose_audits_financial_advisor,
                title: 'Special Purpose Audits',
                description: 'We assist with special audits, focusing on specific areas required by management or regulatory bodies, such as Corporate Social Responsibility (CSR), Anti-Money Laundering (AML), IT system assessments, grant utilization, and more'
              },
              {
                src: tax_benefits_financial_advisor,
                title: 'Tax Benefits',
                description: 'Insurance products often offer tax advantages, enabling investors to grow their wealth while deferring or reducing tax liabilities. Consulting with a financial advisor can help identify the most beneficial strategies for tax optimization.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="mx-auto mb-4 w-24 h-24 object-cover"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Risk Advisory
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: forensic_audits_financial_consultant,
                title: 'Forensic Audits',
                description: 'Protecting organizational assets is vital. Our forensic audits identify fraud, misconduct, and financial irregularities for management or regulators. We also specialize in digital forensics, anti-corruption investigations, and cybercrime detection.'
              },
              {
                src: it_audits_financial_consultant,
                title: 'IT Audits',
                description: 'Our teams assess vulnerabilities in your organization ERP systems, processes, and IT infrastructure. ITGC and cybersecurity are evaluated during Vulnerability Assessments and Penetration Testing. A Financial Advisor provides insights to align IT risk management with financial goals'
              },
              {
                src: enterprise_rise_management_financial_consultant,
                title: 'Enterprise Risk Management (ERM',
                description: 'Our enterprise risk management solution identifies key risks and necessary controls with a holistic approach. It covers strategic, operational, compliance, and reporting risks while highlighting urgent areas. A Financial consultant ensures financial stability throughout.'
              },
              {
                src: internal_control_reviews_financial_consultant,
                title: 'Internal Control Reviews',
                description: 'We assess your organization internal controls through a risk assessment, reviewing current controls for proper implementation. We document processes, risks, and controls. Our team provides recommendations and supports their implementation.'
              },
              {
                src: business_process_reengineering_financial_consultant,
                title: 'Business Process Re-engineering',
                description: 'In the process, we go beyond documenting procedures; we remove outdated practices and implement solutions for managing exceptions, driving operational efficiency and improved performance through modernized processes.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="mx-auto mb-4 w-24 h-24 object-cover"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Taxation
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: planning_and_advisory_financial_consultant,
                title: 'Planning and Advisory',
                description: 'As your Financial Advisor, we track changes in Indian tax laws to optimize your tax strategy. We review agreements and create tax-efficient structures. Our services include risk mitigation, due diligence, and transaction efficiency analysis.'
              },
              {
                src: cross_border_taxation_financial_consultant,
                title: 'Cross-Border Taxation',
                description: 'We guide clients on tax-efficient holding structures, minimize permanent establishment risks, and ensure tax-efficient fund repatriation. We also facilitate cash flows by obtaining lower tax withholding certificates and advance rulings from Indian tax authorities.'
              },
              {
                src: transfer_pricing_financial_consultant,
                title: 'Transfer Pricing',
                description: 'We assist in designing, implementing, and maintaining transfer pricing policies aligned with BEPS guidelines. Our services include guidance on the APA scheme, Safe Harbour rules, and compliance with documentation requirements. This covers Country-by-Country Reporting and the Master File'
              },
              {
                src: expatriates_and_highnet_individuals_financial_consultant,
                title: 'Expatriates and High Net Individuals',
                description: 'We advise HNIs and manage international employee assignments. Our services include designing tax-efficient compensation packages, managing stock options, and handling social security obligations. We also assist with obtaining no-objection certificates and filing tax returns.'
              },
              {
                src: indirect_taxation_financial_consultant,
                title: 'Indirect Taxation',
                description: 'With a PAN India presence, we offer tax compliance and advisory services on GST, state and local taxes and related issues. We provide insights on GST’s impact on transactions, cross-border activities, tax classification, and deal structuring for optimal tax efficiency'
              },
              {
                src: representation_and_dispute_resolution_financial_consultant,
                title: 'Representation and Dispute Resolution',
                description: 'As Financial consultants, our team proactively manages risks related to conflicts with Indian tax authorities. We handle the full litigation process, from filing appeals to representing clients and supporting senior counsel. All of this is guided by our experienced directors'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="mx-auto mb-4 w-24 h-24 object-cover"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <GetStarted />
    </div>
  );
}

export default AccountingBusinessSupport;