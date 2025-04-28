import React from 'react';
import { Link } from 'react-router-dom';
import research_and_development from '../Assets/research_and_development.webp'
import corporate_advisory_research_and_development from '../Assets/corporate_advisory_research_and_development.webp'
import entry_strategy_research_and_development from '../Assets/entry_strategy_research_and_development.webp'
import debt_restructuring_research_and_development from '../Assets/debt_restructuring_research_and_development.webp'
import setup_assistance_research_and_development from '../Assets/setup_assistance_research_and_development.webp'
import secretarial_compliance_research_and_development from '../Assets/secretarial_compliance_research_and_development.webp'
import mergers_acquisitions_research_and_development from '../Assets/mergers_acquisitions_research_and_development.webp'
import data_analytics_research_and_development from '../Assets/data_analytics_research_and_development.webp'
import digital_solutions_research_and_development from '../Assets/digital_solutions_research_and_development.webp'
import digital_transformation_research_and_development from '../Assets/digital_transformation_research_and_development.webp'
import it_security_research_and_development from '../Assets/it_security_research_and_development.webp'
import cloud_computing_research_and_development from '../Assets/cloud_computing_research_and_development.webp'
import backup_recovery_research_and_development from '../Assets/backup_recovery_research_and_development.webp'





const BusinessDigital = () => {


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative  h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-black/100 backdrop-blur hidden sm:block"
          style={{
            backgroundImage: `url(${research_and_development})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0  bg-black/100 backdrop-blur-sm sm:hidden"
          style={{
            backgroundImage: `url(${research_and_development})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="container mx-auto  opacity-100 px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl opacity-100 md:text-4xl font-bold text-white mb-6">
              Collaborate with PAI Fundtech for Advanced R&D and Tailored Financial Expertise.
            </h1>
            <p className="text-lg text-white mb-8">
              Innovating your financial future with breakthrough research, expert insights, and custom solutions that fuel growth.
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
            At PAI Fundtech, we combine R&D with expert financial solutions to drive growth and innovation. Our team develops strategies that address current challenges and anticipate future trends. Whether you're a business, investor, or advisor, we offer tailored solutions for sustained success.
          </p>
        </div>
      </div>

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: corporate_advisory_research_and_development,
                title: 'Corporate Advisory',
                description: 'We provide expert guidance on India regulatory framework, covering FEMA, FDI, Company Law, taxes, labor laws, and SEZ. Our team delivers clear, informed advice on complex legal matters, ensuring comprehensive regulatory insights you can trust'
              },
              {
                src: entry_strategy_research_and_development,
                title: 'Entry Strategy',
                description: 'We recommend the most suitable business structure for your India strategy, including entities such as Liaison Offices and Joint Ventures, ensuring full compliance. Our team identifies potential risks and outlines the registration process. We also support R&D efforts, fostering seamless innovation.'
              },
              {
                src: debt_restructuring_research_and_development,
                title: 'Insolvency and Restructuring Management',
                description: 'We offer solutions for office or factory closures, workforce management, and recovery planning. If restructuring is not feasible, we assist with liquidation and explore merger or amalgamation options through our insolvency network.'
              },
              {
                src: setup_assistance_research_and_development,
                title: 'Factory Set-Up Support:',
                description: 'We provide full support for setting up operations across India, including location selection and obtaining necessary government clearances. Our services involve liaising with RBI, SIA, ROC, FCRA, and the Ministry of Environment and Forests, ensuring smooth compliance throughout the setup process'
              },
              {
                src: secretarial_compliance_research_and_development,
                title: 'Secretarial Compliance',
                description: 'We assist with statutory obligations, record maintenance, and personnel management. Our services also include infrastructure, manpower, and nominee resident director support. Additionally, we offer R&D assistance to ensure your business remains innovative.'
              },
              {
                src: mergers_acquisitions_research_and_development,
                title: 'Mergers & Acquisitions',
                description: 'Our M&A Advisory service supports growth through strategic acquisitions and mergers. We provide expert guidance for smooth transactions and well-informed decisions, with R&D driving innovation and maintaining a competitive edge'
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
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">  Digital Automation and Transformation  </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: data_analytics_research_and_development,
                title: 'Data Analytics',
                description: 'Our data analytics team creates KPI-driven dashboards for clear, predictive business insights, enabling swift, growth-focused decisions. At the core is a commitment to research and development, driving innovative solutions for deeper insights.'
              },
              {
                src: digital_solutions_research_and_development,
                title: 'Digital Solutions',
                description: 'Our digital solutions simplify manual process automation and offer support in GST automation, return filing, e-invoicing, and compliance management. We ensure easy implementation and comprehensive training. Our commitment to research and development fosters continuous innovation'
              },
              {
                src: digital_transformation_research_and_development,
                title: 'Digital Transformation',
                description: 'Strengthening your organization with reliable cybersecurity is crucial as technology evolves. We enhance digital security through assessments, testing, privacy evaluations, and compliance. Research and development in IT security is key to staying ahead of cyber threats and boosting resilience'
              },
              {
                src: it_security_research_and_development,
                title: 'IT Security',
                description: 'We help companies optimize Procure-to-Pay, Order-to-Cash, and Record-to-Report processes with expert strategies. Our team supports every stage of implementation. Research and Development is key to refining strategies and driving continuous digital transformation.'
              },
              {
                src: cloud_computing_research_and_development,
                title: 'Cloud Computing',
                description: 'Cloud computing offers on-demand access to services like databases, software, and analytics over the internet. It allows businesses to scale and optimize resources without maintaining physical data centers. Ongoing research and development continue to enhance cloud computing potential.'
              },
              {
                src: backup_recovery_research_and_development,
                title: 'Backup and Recovery',
                description: 'Backup and recovery create duplicate copies of critical data for restoration when needed. For financial institutions, it prevents data loss that could harm revenue and reputation. Ongoing research and development enhance backup solutions for better data protection.'
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

      {/* Get Started Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">How to Get Started</h2>
          <p className="max-w-2xl mx-auto mb-8">
            If your business is poised for growth and you're looking for the right investment partner, PAi Fundtech is here to help. Our team of experienced professionals will guide you through the process and offer the financial and strategic support you need to take your business to the next level.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full hover:bg-blue-100 transition">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusinessDigital;