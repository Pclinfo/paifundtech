import React from 'react';
import { Link } from 'react-router-dom';
import riskshield_risk_management from '../Assets/riskshield_risk_management.webp'
import insurance_risk_management from '../Assets/insurance_risk_management.webp'
import risktoolkit_risk_management from '../Assets/risktoolkit_risk_management.webp'
import customized_fund_strategies_risk_management from '../Assets/customized_fund_strategies_risk_management.webp'
import riskproficiency_risk_management from '../Assets/riskproficiency_risk_management.webp'
import regulatory_compliance_risk_management from '../Assets/regulatory_compliance_risk_management.webp'
import multifaceted_risk_management from '../Assets/multifaceted_risk_management.webp'
import operational_transparency_risk_management from '../Assets/operational_transparency_risk_management.webp'
import goals_risk_management from '../Assets/goals_risk_management.webp'
import risk_analysis_risk_management from '../Assets/risk_analysis_risk_management.webp'
import portfolio_risk_management from '../Assets/portfolio_risk_management.webp'
import optimization_risk_management from '../Assets/optimization_risk_management.webp'
import life_insurance_risk_management from '../Assets/life_insurance_risk_management.webp'
import health_insurance_risk_management from '../Assets/health_insurance_risk_management.webp'
import pc_insurance_risk_management from '../Assets/pc_insurance_risk_management.webp'
import reinsurance_risk_Management from '../Assets/reinsurance_risk_Management.webp'
import insurtech_risk_management from '../Assets/insurtech_risk_management.webp'
import solvency_risk_management from '../Assets/solvency_risk_management.webp'
import expert_insights_risk_management from '../Assets/expert_insights_risk_management.webp'
import regulatory_adherence_risk_management from '../Assets/regulatory_adherence_risk_management.webp'
import tailored_strategies_risk_management from '../Assets/tailored_strategies_risk_management.webp'
import reliable_partnership_risk_management from '../Assets/reliable_partnership_risk_management.webp'



const InsuranceFunds = () => {
  const industries = [
    {
      title: ' Life Insurance',
      image: life_insurance_risk_management
    },
    {
      title: ' Health Insurance',
      image: health_insurance_risk_management
    },
    {
      title: 'Property and Casualty Insurance',
      image: pc_insurance_risk_management
    },
    {
      title: 'Reinsurance',
      image: reinsurance_risk_Management
    },
    {
      title: 'Specialized Insurance Products',
      image: insurtech_risk_management
    }
  ];



  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${riskshield_risk_management})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${riskshield_risk_management})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Enhance Your Insurance Fund Services and Insurance Investments with PAI Fundtech's Expertise.
            </h1>
            <p className="text-lg text-white mb-8">
              Leading the way in financial solutions tailored to meet the unique needs of your insurance funds.
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
            <h2 className="text-3xl font-bold mb-4">Insurance Fund Services at PAI Fundtech</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At PAI Fundtech, we help businesses manage risk and achieve financial stability through our Risk Management services and Insurance Fund services. We develop solutions customized to the specific requirements of insurance firms and investors. We focus on driving growth and long-term success. Depend on us for the expert insights your business needs.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <img
              src={insurance_risk_management}
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
              src={risktoolkit_risk_management}
              alt="Investment Team"
              className="w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4"> What Are Insurance Funds?</h2>
            <p className="text-gray-700">Insurance investment funds collect money from insurance companies to earn returns while making sure they can meet the needs of policyholders. These funds are meant to balance risk and reward, focusing on protecting assets and earning steady returns. By investing in different types of assets, insurance investment funds help provide financial security and follow the rules of the insurance industry
            </p>
          </div>
        </div>
      </div>

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">    Why Choose PAI Fundtech for Insurance Fund Services?      </h2>


          <div className="container mx-auto py-6">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              At PAI Fundtech, we offer unparalleled expertise in managing Insurance Investments, providing a blend of financial acumen and industry insight. Here’s what sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: customized_fund_strategies_risk_management,
                title: 'Customized Fund Strategies',
                description: 'Our team works closely with clients to design Risk Management services that align with their risk appetite, regulatory requirements, and long-term goals. We ensure a personalized approach that addresses specific needs.'
              },
              {
                src: riskproficiency_risk_management,
                title: 'Risk Management Expertise',
                description: 'With a deep understanding of the insurance sector, we provide robust Risk Management solutions. Our analytical tools and methodologies help mitigate potential risks while optimizing returns.'
              },
              {
                src: regulatory_compliance_risk_management,
                title: 'Regulatory Compliance',
                description: 'We stay up-to-date with evolving industry regulations, ensuring all investments adhere to compliance standards. This reduces legal risks and maintains the integrity of your operations'
              },
              {
                src: multifaceted_risk_management,
                title: 'Diversified Portfolio Management',
                description: 'We create diversified investment portfolios that balance growth and stability. By investing across asset classes, we help Insurance Investments achieve consistent returns while safeguarding against market volatility'
              },
              {
                src: operational_transparency_risk_management,
                title: 'Operational Transparency',
                description: 'At PAI Fundtech, we believe in fostering trust through transparency. Our clients receive detailed performance reports and regular updates, ensuring complete visibility into fund activities'
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
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">      Our Approach to Insurance Funds    </h2>


          <div className="container mx-auto py-6">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              We adopt a strategic and structured approach to insurance fund management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: goals_risk_management,
                title: 'Understanding Your Objectives',
                description: 'We begin by understanding your organization’s goals, financial needs, and operational challenges. This allows us to create a solution that closely matches your vision.'
              },
              {
                src: risk_analysis_risk_management,
                title: 'Comprehensive Risk Assessment',
                description: 'Our thorough due diligence process identifies potential risks and assesses market conditions. This ensures informed decision-making and effective investment strategies.'
              },
              {
                src: portfolio_risk_management,
                title: 'Strategic Asset Allocation',
                description: 'We develop a balanced asset allocation plan, investing in equities, bonds, real estate, and other instruments to meet return objectives while maintaining liquidity and compliance'
              },
              {
                src: optimization_risk_management,
                title: 'Continuous Monitoring & Adjustment',
                description: 'Our team continually monitors market trends and adjusts the portfolio as needed. This proactive approach ensures optimal performance and adaptability to changing conditions'
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
              Our Insurance Investment services are designed to support insurance providers across various sectors, including
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
                src: solvency_risk_management,
                title: 'Enhanced Financial Stability',
                description: 'Ensure steady returns to meet policyholder commitments and operational costs'
              },
              {
                src: expert_insights_risk_management,
                title: 'Expert Insights',
                description: 'Leverage our deep industry knowledge and market expertise'
              },
              {
                src: regulatory_adherence_risk_management,
                title: 'Regulatory Adherence',
                description: 'Navigate complex regulations with confidence through our compliance support.'
              },
              {
                src: tailored_strategies_risk_management,
                title: 'Tailored Strategies',
                description: 'Align investments with organizational goals for long-term success.'
              },
              {
                src: reliable_partnership_risk_management,
                title: 'Reliable Partnership',
                description: 'Work with a trusted partner committed to your growth and financial security.'
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

export default InsuranceFunds;