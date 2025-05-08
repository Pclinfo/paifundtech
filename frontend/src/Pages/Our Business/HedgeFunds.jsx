import React from 'react';
import { Link } from 'react-router-dom';
import cover_hedge_fund_management from '../Assets/cover_hedge_fund_management.webp'
import hedge_fund_management from '../Assets/hedge_fund_management.webp'
import partnership_hedge_fund_management from '../Assets/partnership_hedge_fund_management.webp'
import hedgefundology_hedge_fund_management from '../Assets/hedgefundology_hedge_fund_management.webp'
import mitigation_hedge_fund_management from '../Assets/mitigation_hedge_fund_management.webp'
import techanalytics_hedge_fund_management from '../Assets/techanalytics_hedge_fund_management.webp'
import compliance_hedge_fund_management from '../Assets/compliance_hedge_fund_management.webp'
import versatile_hedge_fund_management from '../Assets/versatile_hedge_fund_management.webp'
import clarity_hedge_fund_management from '../Assets/clarity_hedge_fund_management.webp'
import portfolio_optimization_hedge_fund_management from '../Assets/portfolio_optimization_hedge_fund_management.webp'
import operational_excellence_hedge_fund_management from '../Assets/operational_excellence_hedge_fund_management.webp'
import tracking_hedge_fund_management from '../Assets/tracking_hedge_fund_management.webp'
import securities_hedge_fund_management from '../Assets/securities_hedge_fund_management.webp'
import property_hedge_fund_management from '../Assets/property_hedge_fund_management.webp'
import derivatives_hedge_fund_management from '../Assets/derivatives_hedge_fund_management.webp'
import private_equity_hedge_fund_management from '../Assets/private_equity_hedge_fund_management.webp'
import emerging_markets_hedge_fund_management from '../Assets/emerging_markets_hedge_fund_management.webp'
import GetStarted from '../../Components/GetStarted/GetStarted';
import { Helmet } from 'react-helmet';



const HedgeFunds = () => {
  const industries = [
    {
      title: ' Equities & Fixed Income',
      image: securities_hedge_fund_management
    },
    {
      title: ' Real Estate Investments',
      image: property_hedge_fund_management
    },
    {
      title: 'Commodities & Derivatives',
      image: derivatives_hedge_fund_management
    },
    {
      title: 'Private Equity',
      image: private_equity_hedge_fund_management
    },
    {
      title: 'Emerging Markets',
      image: emerging_markets_hedge_fund_management
    }
  ];

  const benefitsOfPartnering = [
    {
      title: 'Capital Infusion',
      description: 'Get the funds you need to grow your business, invest in new technology, hire skilled people, and enter new markets.'
    },
    {
      title: 'Strategic Partnerships',
      description: 'Use our connections with investors, partners, and advisors to get important industry advice and opportunities.'
    },
    {
      title: 'Long-Term Focus',
      description: 'We are dedicated to helping businesses grow steadily and sustainably over time.'
    },
    {
      title: 'Track Record of Success',
      description: 'With years of experience in Venture Capital, we\'ve helped many startups and growing companies reach their potential.'
    }
  ];


  return (
    <div className="bg-white">
      <Helmet>
        <title>Hedge Funds | PAI Fundtech</title>
        <meta name="description" content="Hedge Funds | PAI Fundtech" />
        <meta name="keywords" content="Hedge Funds, PAI Fundtech, Hedge Fund Management, Hedge Fund Services, Hedge Fund Advisory, Hedge Fund Strategy" />
        <meta name="author" content="PAI Fundtech" /> 
        <meta property="og:title" content="Hedge Funds | PAI Fundtech" />
        <meta property="og:description" content="Hedge Funds | PAI Fundtech" />
        <meta property="og:image" content="https://www.paifundtech.com/images/cover_hedge_fund_management.webp" />
        <meta property="og:url" content="https://www.paifundtech.com/our-business/hedge-funds" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hedge Funds | PAI Fundtech" />
        <meta name="twitter:description" content="Hedge Funds | PAI Fundtech" />
        <meta name="twitter:image" content="https://www.paifundtech.com/images/cover_hedge_fund_management.webp" />
        <meta name="twitter:url" content="https://www.paifundtech.com/our-business/hedge-funds" />
        <link rel="canonical" href="https://www.paifundtech.com/our-business/hedge-funds" />
        <meta name="robots" content="index, follow" />


      </Helmet>
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px] ">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${cover_hedge_fund_management})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${cover_hedge_fund_management})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Trusted Partner for Hedge Fund Services with Proven Expertise
            </h1>
            <p className="text-lg text-white mb-8">
              Strategic insights and expert guidance to optimize your hedge fund success and long-term growth.
            </p>
            <Link to="/contact-us">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Register to Explore
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* First Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Hedge Fund Services at PAI Fundtech</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At PAI Fundtech, we offer expert advice and practical solutions for managing hedge funds. Our services help fund managers navigate complex markets, improve returns, and handle risks with effective Risk Management strategies. We understand hedge funds deeply and provide the insights and resources needed to succeed in a competitive environment.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <img
              src={hedge_fund_management}
              alt="Investment Team"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={partnership_hedge_fund_management}
              alt="Investment Team"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">What are Hedge Funds?</h2>
            <p className="text-gray-700">
              Hedge funds are investment options where wealthy individuals and institutions pool their money to aim for high returns using various strategies. Unlike regular investment funds, hedge funds borrow money, bet against stocks, and use financial contracts to take advantage of market opportunities. They are flexible and focus on making money, regardless of how the market performs, rather than just trying to beat specific market benchmarks.
            </p>
          </div>
        </div>
      </div>

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Why Choose PAI Fundtech for Hedge Fund Services?
          </h2>

          <div className="container  mx-auto py-2">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              At PAI Fundtech, we do more than just provide basic fund administration. We work closely with hedge fund managers to create solutions that meet their specific needs. Here's why fund managers trust us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: hedgefundology_hedge_fund_management,
                title: 'Hedge Fund Strategy Expertise',
                description: 'Our team has strong knowledge of different hedge fund strategies, such as long/short equity, global macro, and arbitrage. We assist you in adjusting your strategy to match market trends for ongoing success.'
              },
              {
                src: mitigation_hedge_fund_management,
                title: 'Effective Risk Management',
                description: 'Risk Management is crucial for hedge fund operations. We provide effective tools and frameworks to assess risks, minimize exposure, and safeguard your portfolio'
              },
              {
                src: techanalytics_hedge_fund_management,
                title: 'Advanced Technology & Analytics',
                description: 'Make use of the latest tools and analytics for managing portfolios, tracking performance, and making informed decisions. Our technology-focused method helps you stay competitive in a data-driven industry.'
              },
              {
                src: compliance_hedge_fund_management,
                title: 'Regulatory Compliance Support',
                description: 'Navigating regulatory requirements can be difficult. We help you stay compliant with global standards and reporting rules, so you can focus on improving performance'
              },
              {
                src: versatile_hedge_fund_management,
                title: 'Flexible Solutions for Every Fund',
                description: 'We provide flexible solutions to meet the unique needs of your fund, whether you are a new manager or an established fund. Our services are designed to fit the size, strategy, and goals of your fund.'
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
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Our Hedge Fund Approach
          </h2>

          <div className="container  mx-auto py-2">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              We work together with fund managers and provide complete support for Hedge Fund Management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: clarity_hedge_fund_management,
                title: 'Understanding Your Vision',
                description: 'We start by understanding your goals, investment approach, and operational requirements. This way, we ensure our services match your funds strategy.'
              },
              {
                src: portfolio_optimization_hedge_fund_management,
                title: 'Portfolio Optimization',
                description: 'Our experts analyze your portfolio to identify improvements, provide diversification options, and recommend risk management strategies to help maximize your returns.'
              },
              {
                src: operational_excellence_hedge_fund_management,
                title: 'Operational Excellence',
                description: 'We provide back-office support and fund administration services to make sure your operations run smoothly and transparently'
              },
              {
                src: tracking_hedge_fund_management,
                title: 'Ongoing Performance Monitoring',
                description: 'We provide real-time reports and analytics to help you track performance and make smart investment choices'
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
          <div className="container  mx-auto py-2">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              PAI Fundtech provides Hedge Fund Management services across various sectors, including
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
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Benefits of Partnering with PAI Fundtech
          </h2>


          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: hedgefundology_hedge_fund_management,
                title: 'Custom Solutions',
                description: 'Get personalized services that match your funds strategy and growth path.'
              },
              {
                src: portfolio_optimization_hedge_fund_management,
                title: 'Industry Expertise',
                description: 'Gain the benefit of working with a team that has significant experience in the hedge fund industry and Risk Management.'
              },
              {
                src: tracking_hedge_fund_management,
                title: 'Efficiency & Transparency',
                description: 'Benefit from simplified processes and clear reporting.'
              },
              {
                src: compliance_hedge_fund_management,
                title: 'Global Reach',
                description: 'Use our network to find opportunities in markets around the world.'
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

      {/* Benefits of Partnering */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Partnering with PAI Fundtech</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsOfPartnering.map((benefit, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Section */}
      <GetStarted />

      {/* Footer */}
    </div>
  );
}

export default HedgeFunds;