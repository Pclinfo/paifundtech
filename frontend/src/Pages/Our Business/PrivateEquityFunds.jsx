import React from 'react';
import { Link } from 'react-router-dom';
import cover_fund_management from '../Assets/cover_fund_management.webp'
import private_equity_fund_management from '../Assets/private_equity_fund_management.webp'
import equity_fund_management from '../Assets/equity_fund_management.webp'
import insight_fund_management from '../Assets/insight_fund_management.webp'
import supervision_fund_management from '../Assets/supervision_fund_management.webp'
import complete_review_fund_management from '../Assets/complete_review_fund_management.webp'
import connectivity_fund_management from '../Assets/connectivity_fund_management.webp'
import awareness_fund_management from '../Assets/awareness_fund_management.webp'
import analysis_fund_management from '../Assets/analysis_fund_management.webp'
import strategies_fund_management from '../Assets/strategies_fund_management.webp'
import engagement_fund_management from '../Assets/engagement_fund_management.webp'
import techsolutions_fund_management from '../Assets/techsolutions_fund_management.webp'
import biohealthtech_cover_fund_management from '../Assets/biohealthtech_cover_fund_management.webp'
import manufacturing_fund_management from '../Assets/manufacturing_fund_management.webp'
import finsolutions_fund_management from '../Assets/finsolutions_fund_management.webp'
import builtassets_fund_management from '../Assets/builtassets_fund_management.webp'
import commercetech_fund_management from '../Assets/commercetech_fund_management.webp'
import retail_fund_management from '../Assets/retail_fund_management.webp'
import capital_infusion_fund_management from '../Assets/capital_infusion_fund_management.webp'
import strategic_guidance_fund_management from '../Assets/strategic_guidance_fund_management.webp'
import sustained_fund_management from '../Assets/sustained_fund_management.webp'
import established_fund_management from '../Assets/established_fund_management.webp'




const PrivateEquityFunds = () => {
  const industries = [
    {
      title: 'Technology & Software Development ',
      image: techsolutions_fund_management
    },
    {
      title: ' HealthTech & Biotechnology',
      image: biohealthtech_cover_fund_management
    },
    {
      title: 'Manufacturing & Industrial',
      image: manufacturing_fund_management
    },
    {
      title: 'Financial Services & FinTech',
      image: finsolutions_fund_management
    },
    {
      title: 'Real Estate & Infrastructure',
      image: builtassets_fund_management
    },
    {
      title: 'Retail & E-commerce',
      image: commercetech_fund_management
    },
    {
      title: 'Consumer Goods & Services',
      image: retail_fund_management
    }
  ];




  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${cover_fund_management})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${cover_fund_management})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner with PAI Fundtech for Advanced Private Equity Fund Strategies.
            </h1>
            <p className="text-lg text-white mb-8">
              Shaping the future of investments through innovative research, expert financial insights, and customized strategies that drive success
            </p>
            <Link to="/contact-us">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Register to Explore
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* What is Hedge Funds */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Private Equity Funds at PAI Fundtech</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At PAi Fundtech, we help businesses in various industries grow by providing the financial support and advice they need. Our Private Equity Funds service is designed to assist established companies that want to expand, improve their operations, or explore new opportunities. Whether you're aiming to lead the market, enhance your operations, or make strategic acquisitions, we provide the expertise and funding to support your growth.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <img
              src={private_equity_fund_management}
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
              src={equity_fund_management}
              alt="Investment Team"
              className="w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4"> What is Private Equity?</h2>
            <p className="text-gray-700">Private equity (PE) involves investing in well-established companies that have the potential for significant growth and value creation. Unlike venture capital, which focuses on early-stage businesses, private equity investments are aimed at companies that are already earning revenue but need extra capital to grow, restructure, or expand into new markets. These companies often receive help with management and operations to speed up growth and increase value
            </p>
          </div>
        </div>
      </div>

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">  Why Choose PAI Fundtech for Private Equity Investment?        </h2>

          <div className="container mx-auto py-6">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              At PAi Fundtech, we do more than provide capital. We work with you as a partner to help you find new opportunities and achieve lasting success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: insight_fund_management,
                title: 'Expertise in Identifying Growth Potential',
                description: 'Our team is skilled at finding successful businesses with strong potential for growth or improvement. We focus on businesses that have a solid market presence and clear opportunities to grow, such as through acquisitions, expanding to new locations, or improving operations'
              },
              {
                src: supervision_fund_management,
                title: 'Hands-On Management Support',
                description: 'We don’t just provide funding; we actively help shape your company’s future. Our team advises on operations, strategy, and management to help your business succeed. This support can include restructuring plans or preparing for equity financing opportunities'
              },
              {
                src: complete_review_fund_management,
                title: 'Complete Review',
                description: 'We carefully examine your company’s finances, operations, and market position. We also consider your growth plans, strengths, and risks to ensure each investment is wise and aligns with your business goals'
              },
              {
                src: connectivity_fund_management,
                title: 'Access to Our Network',
                description: 'We have a wide network of industry experts, investors, and partners who can help your business grow. Whether youre entering new markets or building important partnerships, our network is a valuable resource for your companys growth.'
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
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">    Our Private Equity Approach      </h2>


          <div className="container mx-auto py-6">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              At PAI Fundtech, we take a tailored and hands-on approach to private equity investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: awareness_fund_management,
                title: 'Understanding Your Business',
                description: 'We start by getting a clear understanding of your company’s operations, challenges, and growth goals. This helps us create an investment strategy that fits your specific needs and objectives'
              },
              {
                src: analysis_fund_management,
                title: 'Due Diligence & Strategic Assessment',
                description: 'We carefully review your companys financials, market position, and how well it operates. We take the time to understand your business model, growth potential, and the wider market to make smart decisions'
              },
              {
                src: strategies_fund_management,
                title: 'Custom Investment Plans',
                description: 'We understand that every business is different. Thats why we provide investment strategies tailored to your needs, whether you need funding to improve operations, expand into new regions. This may involve looking into equity financing options to match your growth plan'
              },
              {
                src: engagement_fund_management,
                title: 'Active Involvement & Support',
                description: 'After we invest, we stay involved in your company’s growth. We offer ongoing support, such as guidance on operations, management advice, and access to our network, to help your business succeed in the long run.'
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
          <div className="container mx-auto py-6">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              Our private equity funds focus on well-established companies in various industries that have strong growth potential. Some of the sectors we target are
            </p>
          </div>
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
                src: capital_infusion_fund_management,
                title: 'Capital Infusion',
                description: 'Secure the necessary funds for expansion, acquisitions, and operational improvements'
              },
              {
                src: strategic_guidance_fund_management,
                title: 'Strategic Guidance',
                description: 'Use our expertise to improve your processes, expand into new markets, and create more value'
              },
              {
                src: sustained_fund_management,
                title: 'Long-Term Growth Focus',
                description: 'We are committed to supporting your business for sustainable growth and profitability'
              },
              {
                src: established_fund_management,
                title: 'Proven Track Record',
                description: 'With years of experience in fund management, we have successfully worked with companies to help them reach their full potential.'
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

export default PrivateEquityFunds;