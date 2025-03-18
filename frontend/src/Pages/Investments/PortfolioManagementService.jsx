import React from 'react';
import cover from '../Assets/cover.webp'
import portfolio_management_services from '../Assets/portfolio_management_services.webp'
import discretionary from '../Assets/discretionary.webp'
import non_discretionary from '../Assets/non_discretionary.webp'
import advisory from '../Assets/advisory.webp'
import expert from '../Assets/expert.webp'
import tailored_investment_strategies from '../Assets/tailored_investment_strategies.webp'
import advanced_risk_management from '../Assets/advanced_risk_management.webp'
import transparent_reporting from '../Assets/transparent_reporting.webp'
import diverse_investment_options from '../Assets/diverse_investment_options.webp'

const PortfolioManagementService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-12 md:py-16 lg:py-20 mb-12 rounded-lg overflow-hidden">
        {/* Responsive background image with better positioning */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 w-full h-full"
          style={{ 
            backgroundImage: `url(${cover})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Optimize Your Investments with PAI Fundtech's</h1>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4'>Portfolio Management Services</h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">Customized strategies and expert insights to enhance your portfolio's performance and ensure sustainable growth</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
            Explore Our Platform
          </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio Management Services (PMS)</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-6 rounded-lg flex items-center justify-center">
            <img
              src={portfolio_management_services}
              alt="Portfolio Management"
              className="w-full max-w-md h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
          <div>
            <ul className="space-y-4 text-gray-700">
              <li>• A licensed and specialized investment solution designed to meet the financial goals of long-term investors</li>
              <li>• Mainly provided by specialized financial firms handling portfolios of high-net-worth individuals</li>
              <li>• Providers design customized investment portfolios incorporating stocks, bonds, and securities</li>
              <li>• Fee-based service with charges calculated as a percentage of total assets under management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Types of Portfolio Management Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Types of Portfolio Management Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Discretionary PMS',
              description: 'Portfolio manager holds full responsibility for investment choices based on client\'s financial objectives and risk preferences.',
              image: discretionary
            },
            {
              title: 'Non-Discretionary PMS',
              description: 'Client retains control over securities, while manager provides research and investment advice.',
              image: non_discretionary
            },
            {
              title: 'Advisory PMS',
              description: 'Manager offers investment advice, but client maintains complete control over investment choices.',
              image: advisory
            }
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose PMS at Prachida */}
      <section className="mb-12 bg-gray-50 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose PMS in Prachida?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[
            {
              title: 'Expert Portfolio Management',
              description: 'Experienced managers leveraging deep market knowledge',
              src: expert
            },
            {
              title: 'Tailored Investment Strategies',
              description: 'Customized plans aligned with your unique objectives',
              src: tailored_investment_strategies
            },
            {
              title: 'Advanced Risk Management',
              description: 'Sophisticated strategies to protect your investments',
              src: advanced_risk_management
            },
            {
              title: 'Transparent Reporting',
              description: 'Regular, detailed updates about portfolio performance',
              src: transparent_reporting
            },
            {
              title: 'Diverse Investment Options',
              description: 'Access to a variety of asset classes for growth',
              src: diverse_investment_options
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={feature.src}
                alt={feature.title}
                className="mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
            Start Building Your Portfolio Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioManagementService;