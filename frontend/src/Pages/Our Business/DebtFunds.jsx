import React from 'react';
import cover_debt_funds from '../Assets/cover_debt_funds.webp'
import wealthkit_debt_funds from '../Assets/wealthkit_debt_funds.webp'
import debtvision_debt_funds from '../Assets/debtvision_debt_funds.webp'
import fintech_debt_funds from '../Assets/fintech_debt_funds.webp'
import finflex_debt_funds from '../Assets/finflex_debt_funds.webp'
import risk_management_debt_funds from '../Assets/risk_management_debt_funds.webp'
import strategic_support_debt_funds from '../Assets/strategic_support_debt_funds.webp'
import insight_debt_funds from '../Assets/insight_debt_funds.webp'
import debttech_debt_funds from '../Assets/debttech_debt_funds.webp'
import evaluation_debt_funds from '../Assets/evaluation_debt_funds.webp'
import maintenance_debt_funds from '../Assets/maintenance_debt_funds.webp'
import fabrication_debt_funds from '../Assets/fabrication_debt_funds.webp'
import propertytech_debt_funds from '../Assets/propertytech_debt_funds.webp'
import commerce_debt_funds from '../Assets/commerce_debt_funds.webp'
import techsolutions_debt_funds from '../Assets/techsolutions_debt_funds.webp'
import power_debt_funds from '../Assets/power_debt_funds.webp'
import medtech_debt_funds from '../Assets/medtech_debt_funds.webp'
import mobility_debt_funds from '../Assets/mobility_debt_funds.webp'
import funding_debt_funds from '../Assets/funding_debt_funds.webp'
import customized_debt_funds from '../Assets/customized_debt_funds.webp'
import risk_mitigation_debt_funds from '../Assets/risk_mitigation_debt_funds.webp'
import endowment_debt_funds from '../Assets/endowment_debt_funds.webp'





const DebtFunds = () => {
  const industries = [
    {
      title: 'Manufacturing & Production ',
      image: fabrication_debt_funds
    },
    {
      title: ' Real Estate & Infrastructure',
      image: propertytech_debt_funds
    },
    {
      title: 'Retail & E-commerce',
      image: commerce_debt_funds
    },
    {
      title: 'Technology & IT Services',
      image: techsolutions_debt_funds
    },
    {
      title: 'Energy & Utilities',
      image: power_debt_funds
    },
    {
      title: 'Healthcare & Pharmaceuticals',
      image: medtech_debt_funds
    },
    {
      title: 'Transportation & Logistics',
      image: mobility_debt_funds
    }
  ];

 


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px]">
        <div
                  className="absolute inset-0 hidden sm:block"
                  style={{
                    backgroundImage: `url(${cover_debt_funds})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
        
                {/* Mobile Background Image */}
                <div
                  className="absolute inset-0 sm:hidden"
                  style={{
                    backgroundImage: `url(${cover_debt_funds})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Partner with PAI Fundtech for Expert Debt Fund Strategies.
            </h1>
            <p className="text-lg text-white mb-8">
              Shaping your financial success with cutting-edge research, industry expertise, and solutions designed to optimize debt fund performance.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Our Platform
            </button>
          </div>
        </div>
      </div>


      {/* What is Hedge Funds */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Debt Funds Services at PAI Fundtech </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At PAI Fundtech, we provide Debt funds solutions designed to support businesses in need of capital without diluting ownership. Our Debt Funds Service offers flexible financing options for companies aiming to expand, optimize operations, or manage working capital, ensuring they have the resources they need to grow sustainably.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <img
              src={wealthkit_debt_funds}
              alt="Investment Team"
              className="w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={debtvision_debt_funds}
              alt="Investment Team"
              className="w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4"> What are Debt Funds?</h2>
            <p className="text-gray-700">Debt funds are a type of investment that gives loans or debt securities to businesses. They offer a way for businesses to get funding without losing ownership, making them a low-risk investment. This stability attracts both businesses and investors. Debt funds can be set up as bonds, term loans, or credit lines, based on the business's needs.
            </p>
          </div>
        </div>
      </div>

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: fintech_debt_funds,
                title: 'Expertise in Financial Solutions',
                description: 'Our team specializes in creating debt solutions that fit your business needs, providing customized loan options to support your growth strategy.'
              },
              {
                src: finflex_debt_funds,
                title: 'Flexible Financing Options',
                description: 'Whether you need to refinance debt, expand your business, or manage cash flow, we provide flexible debt financing options designed to meet your needs.'
              },
              {
                src: risk_management_debt_funds,
                title: 'Risk Management',
                description: 'We conduct thorough risk assessments to ensure our lending decisions are ideal for low-risk investments. Our team helps you navigate market changes and secure the best terms'
              },
              {
                src: strategic_support_debt_funds,
                title: 'Strategic Support',
                description: 'We offer more than just financial capital; we provide guidance on fund management, repayment plans, and business growth to help ensure your long-term success.'
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
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">      Our Debt Funds Approach    </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: insight_debt_funds,
                title: 'Understanding Your Needs',
                description: 'We begin by analyzing your business model, financial position, and funding requirements. This helps us understand the best approach for meeting your financing goals.'
              },
              {
                src: debttech_debt_funds,
                title: 'Customized Debt Solutions',
                description: 'We provide customized debt solutions to meet your business needs, whether its working capital, growth funding, or restructuring'
              },
              {
                src: evaluation_debt_funds,
                title: 'Due Diligence & Assessment',
                description: 'We carefully assess your company’s financials, repayment ability, and market risks to provide the best debt solutions.'
              },
              {
                src: maintenance_debt_funds,
                title: 'Ongoing Monitoring & Support',
                description: 'After securing financing, we monitor your business’s performance and provide strategic support to optimize fund management for growth and stability.'
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

      {/* Industries We Invest In */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Invest In</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="font-bold">{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Benefits of Partnering with PAi Fundtech
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: funding_debt_funds,
                title: 'Capital for Growth',
                description: 'Get the funds you need to grow your business, invest in technology, or manage cash flow without giving up ownership'
              },
              {
                src: customized_debt_funds,
                title: 'Tailored Debt Solutions',
                description: 'Receive customized loan structures designed to meet your business’s specific funding needs and goals'
              },
              {
                src: risk_mitigation_debt_funds,
                title: 'Risk Mitigation',
                description: 'Our careful checks and risk management processes reduce financial and market risks, making our services a dependable choice for low-risk investments'
              },
              {
                src: endowment_debt_funds,
                title: 'Long-Term Financial Partnership',
                description: 'We focus on long-term success, providing support and guidance throughout the entire debt process'
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

export default DebtFunds;