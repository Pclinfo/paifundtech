import React from 'react';
import { Link } from 'react-router-dom';
import red_circle_capital_venture_capital from '../Assets/red_circle_capital_venture_capital.webp'
import capital_clarity_venture_capital from '../Assets/capital_clarity_venture_capital.webp'
import innovate_invest_venture_capital from '../Assets/innovate_invest_venture_capital.webp'
import insightful_venture_capital from '../Assets/insightful_venture_capital.webp'
import mentorship_venture_capital from '../Assets/mentorship_venture_capital.webp'
import safeguard_venture_capital from '../Assets/safeguard_venture_capital.webp'
import networking_opportunities_venture_capital from '../Assets/networking_opportunities_venture_capital.webp'
import techdev_venture_capital from '../Assets/techdev_venture_capital.webp'
import retail_venture_capital from '../Assets/retail_venture_capital.webp'
import biohealth_venture_capital from '../Assets/biohealth_venture_capital.webp'
import financetech_venture_capital from '../Assets/financetech_venture_capital.webp'
import e_commerce_venture_capital from '../Assets/e_commerce_venture_capital.webp'
import automation_venture_capital from '../Assets/automation_venture_capital.webp'
import eco_friendly_venture_capital from '../Assets/eco_friendly_venture_capital.webp'


const VentureCapital = () => {
  const industries = [
    {
      title: 'Technology & Software Development',
      image: techdev_venture_capital
    },
    {
      title: 'Consumer Goods & Services',
      image: retail_venture_capital
    },
    {
      title: 'HealthTech & Biotechnology',
      image: biohealth_venture_capital
    },
    {
      title: 'FinTech & Financial Services',
      image: financetech_venture_capital
    },
    {
      title: 'E-commerce & Online Platforms',
      image: e_commerce_venture_capital
    },
    {
      title: 'Artificial Intelligence & Automation',
      image: automation_venture_capital
    },
    {
      title: 'Clean Energy & Sustainability',
      image: eco_friendly_venture_capital
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

  const ventureCapitalApproach = [
    {
      title: 'Understanding Your Business',
      description: 'We start by learning about your business, your goals, what you do, and where you want to go. This helps us figure out what kind of financial support you need.'
    },
    {
      title: 'Checking Your Business',
      description: 'We take a close look at how your business works, your finances, your market position, and find your potential to grow. This helps us decide if investing in your business is the right move.'
    },
    {
      title: 'Customized Investment Plans',
      description: 'Every business is different, so we create a plan that fits your needs. Whether you need money to start or to grow, we find the right solution for you.'
    },
    {
      title: 'Ongoing Support',
      description: 'After we invest, we stay involved in helping you. We track how things are going, give advice, and support your growth to make sure your business succeeds in the long run.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px] ">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${red_circle_capital_venture_capital})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',

          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${red_circle_capital_venture_capital})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>


        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Alternative Investment Funds Strategy with PAI Fundtech.
            </h1>
            <p className="text-lg text-white mb-8">
              We bring innovation and expertise to audits, tax solutions, and financial planning for sustainable growth.
            </p>
            <Link to="/contact-us">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Register to Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={capital_clarity_venture_capital}
              alt="Investment Team"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Venture Capital Services at PAI Fundtech</h2>
            <p className="text-gray-700">
              At PAi Fundtech, we focus on supporting new entrepreneurs and innovators. Our Venture Capital Service offers financial assistance and expert advice to startups and businesses with growth potential. We understand how crucial timely funding is for success. That’s why we provide the resources and guidance to bring your ideas to life. Work with us to transform your vision into reality.
            </p>
          </div>
        </div>
      </div>


      {/* What is Venture Capital */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">What is Venture Capital?</h2>
            <p className="text-gray-700">
              Venture capital (VC) is a type of funding for startups and rapidly growing companies with high-profit potential. It focuses on businesses with innovative ideas, strong growth potential, and plans to disrupt their industries. This funding helps these companies expand, improve their products, and accelerate development. Unlike traditional financing, VC supports ambitious ventures aiming for significant industry impact.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={innovate_invest_venture_capital}
              alt="Investment Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Why Choose PAI Fundtech for Venture Capital?Why Invest in AIF with Prachida?
          </h2>


          <div className="container mx-auto py-6">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              At PAi Fundtech, we offer more than a financial investment, providing a reliable partnership with expert guidance and a solid investment strategy. Here’s why you should choose us
            </p>
          </div>



          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: insightful_venture_capital,
                title: 'Expertise in Finding Growth Opportunities',
                description: 'Our team has years of experience in spotting startups that can change industries. We focus on businesses with great growth potential and the ability to expand'
              },
              {
                src: mentorship_venture_capital,
                title: 'Strategic Guidance & Mentorship',
                description: 'We don\'t just give funding, we work with you as a partner. We provide critical advice in growing your business, exploring new markets, and developing your team to help your company succeed.'
              },
              {
                src: safeguard_venture_capital,
                title: 'Risk Mitigation & Financial Insight',
                description: 'We understand the investment world and help reduce risks through Risk Management. We carefully check all details. We make sure your business is ready for success, even in tough market conditions.'
              },
              {
                src: networking_opportunities_venture_capital,
                title: 'Risk Mitigation & Financial Insight',
                description: 'We understand the investment world and help reduce risks through Risk Management. We carefully check all details. We make sure your business is ready for success, even in tough market conditions.'
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

      {/* Our Venture Capital Approach */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Venture Capital Approach</h2>


        <div className="container mx-auto py-2">
          <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
            Our venture capital services focus on companies in various industries that have strong potential for innovation and growth. These include
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ventureCapitalApproach.map((approach, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-4">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          ))}
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

      {/* Benefits of Partnering */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Partnering with PAi Fundtech</h2>
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

export default VentureCapital;