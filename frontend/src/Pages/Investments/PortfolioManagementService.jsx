import React from 'react';
import { Link } from 'react-router-dom';
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
import financial_protection from '../Assets/financial_protection.webp'
import tax_benefits from '../Assets/tax_benefits.webp'
import expert_guidance from '../Assets/expert_guidance.webp'
import guaranteed_returns from '../Assets/guaranteed_returns.webp'
import customized_plans from '../Assets/customized_plans.webp'

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 md:mb-4">Optimize Your Investments with PAI Fundtech's</h1>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4'>Portfolio Management Services</h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">Customized strategies and expert insights to enhance your portfolio's performance and ensure sustainable growth</p>
          <Link to="/contact-us">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Register to Explore
            </button>
          </Link>
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
              <li>• Portfolio Management Services (PMS) is a licensed and specialized investment solution designed to meet the financial goals of a select group of long-term investors.</li>
              <li>• Portfolio Management Services (PMS) are mainly provided by specialized financial firms that handle the investment portfolios of high-net-worth individuals (HNWIs), ultra-high-net-worth individuals (UHNWIs), non-resident Indians (NRIs), and various institutional clients</li>
              <li>• PMS providers design customized investment portfolios that may incorporate stocks, bonds, and various securities, aligning with the client's individual financial objectives and risk preferences</li>
              <li>• The service is fee-based, with charges typically calculated as a percentage of the total assets under management (AUM).</li>
              <li>• In India, PMS providers offer various investment strategies, such as value investing, growth investing, income-focused strategies, and quantitative approaches. They consistently keep clients informed about portfolio performance and aim to achieve robust returns while effectively managing risk</li>

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
              description: 'In a Discretionary PMS, the portfolio manager holds full responsibility for making investment choices on the client’s behalf. The manager picks securities based on the clients financial objectives, risk appetite, and additional factors. Clients do not need to approve each transaction but receive regular performance updates',
              image: discretionary
            },
            {
              title: 'Non-Discretionary PMS',
              description: 'In a Non-Discretionary PMS, the portfolio manager advises on investments, but the client retains control over which securities to buy or sell. The manager provides research and analysis to support the client in making informed decisions.',
              image: non_discretionary
            },
            {
              title: 'Advisory PMS',
              description: 'Similar to Non-Discretionary PMS, but with a key distinction: the portfolio manager’s role is limited to offering investment advice. The client maintains complete control, handling all investment choices and executing trades via their personal trading account, guided by the managers advice.',
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
              description: 'Prachida’s experienced portfolio managers leverage deep market knowledge to craft strategies designed for optimal returns based on your financial goals.',
              src: expert
            },
            {
              title: 'Tailored Investment Strategies',
              description: 'Every investment plan at Prachida is customized to suit your unique needs, ensuring that your portfolio reflects your risk tolerance and long-term objectives.',
              src: tailored_investment_strategies
            },
            {
              title: 'Advanced Risk Management',
              description: 'Prachida employs sophisticated risk management strategies to protect your investments, even during volatile market conditions.',
              src: advanced_risk_management
            },
            {
              title: 'Transparent Reporting',
              description: 'Stay informed with detailed, regular updates about your portfolio’s performance, providing you with full visibility and peace of mind.',
              src: transparent_reporting
            },
            {
              title: 'Diverse Investment Options',
              description: 'Prachida offers access to a variety of asset classes, ensuring a well-balanced and diversified portfolio for sustainable growth',
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

      <section className="mb-12 bg-gray-50 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose PMS in Prachida?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[
            {
              title: 'Financial Protection',
              description: 'Safeguard yourself and those you care about from unforeseen circumstances.',
              src: financial_protection
            },
            {
              title: 'Tax Benefits',
              description: 'Take advantage of possible tax benefits from your insurance investments',
              src: tax_benefits
            },
            {
              title: 'Expert Guidance',
              description: 'Our experienced advisors help you choose the best insurance solutions for long-term financial health',
              src: expert_guidance
            },
            {
              title: 'Guaranteed Returns',
              description: 'Benefit from consistent returns while enjoying the security of insurance.',
              src: guaranteed_returns
            },
            {
              title: 'Customized Plans',
              description: 'We offer a wide range of insurance options tailored to meet your unique needs.',
              src: customized_plans
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