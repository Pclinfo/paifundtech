import React from 'react';
import { Link } from 'react-router-dom';
import smartconnect_project_funds from '../Assets/smartconnect_project_funds.webp';
import seedling_project_funds from '../Assets/seedling_project_funds.webp';
import project_funds from '../Assets/project_funds.webp';
import evaluation_project_funds from '../Assets/evaluation_project_funds.webp';
import strategic_support_project_funds from '../Assets/strategic_support_project_funds.webp';
import financial_acumen_project_funds from '../Assets/financial_acumen_project_funds.webp';
import connectivity_project_funds from '../Assets/connectivity_project_funds.webp';
import clarifying_project_funds from '../Assets/clarifying_project_funds.webp';
import appraisal_project_funds from '../Assets/appraisal_project_funds.webp';
import tailored_project_funds from '../Assets/tailored_project_funds.webp';
import maintenance_project_funds from '../Assets/maintenance_project_funds.webp';
import infrastructure_development_project_funds from '../Assets/infrastructure_development_project_funds.webp';
import renewable_energy_project_funds from '../Assets/renewable_energy_project_funds.webp';
import real_estate_developments_project_funds from '../Assets/real_estate_developments_project_funds.webp';
import technology_implementation_project_funds from '../Assets/technology_implementation_project_funds.webp';
import healthcare_biotech_initiatives_project_funds from '../Assets/healthcare_biotech_initiatives_project_funds.webp';
import edutainment_project_funds from '../Assets/edutainment_project_funds.webp';
import growth_project_funds from '../Assets/growth_project_funds.webp';
import secured_financial_backing_project_funds from '../Assets/secured_financial_backing_project_funds.webp';
import strategic_collaboration_project_funds from '../Assets/strategic_collaboration_project_funds.webp';
import sustainable_growth_project_funds from '../Assets/sustainable_growth_project_funds.webp';
import proven_expertise_project_funds from '../Assets/proven_expertise_project_funds.webp';
import GetStarted from '../../Components/GetStarted/GetStarted';
import { Helmet } from 'react-helmet';

const ProjectFunds = () => {
  const industries = [
    {
      title: 'Infrastructure Development',
      image: infrastructure_development_project_funds,
      alt: 'Infrastructure Development funding solutions'
    },
    {
      title: 'Renewable Energy Projects',
      image: renewable_energy_project_funds,
      alt: 'Renewable Energy Projects investment options'
    },
    {
      title: 'Real Estate Developments',
      image: real_estate_developments_project_funds,
      alt: 'Real Estate Developments financial support'
    },
    {
      title: 'Technology Implementation',
      image: technology_implementation_project_funds,
      alt: 'Technology Implementation project funding'
    },
    {
      title: 'Healthcare and Biotech Initiatives',
      image: healthcare_biotech_initiatives_project_funds,
      alt: 'Healthcare and Biotech Initiatives financial assistance'
    },
    {
      title: 'Educational and Social Development Programs',
      image: edutainment_project_funds,
      alt: 'Educational and Social Development Programs investment strategies'
    },
    {
      title: 'Industrial and Manufacturing Expansions',
      image: growth_project_funds,
      alt: 'Industrial and Manufacturing Expansions project financing'
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Project Funds Services | PAI Fundtech</title>
        <meta name="description" content="Discover customized financial solutions for your project objectives and vision at PAI Fundtech. We specialize in infrastructure development, renewable energy, real estate, technology, healthcare, and more." />
        <meta name="keywords" content="project funds, PAI Fundtech, funding solutions, project objectives, infrastructure development, renewable energy, real estate, technology implementation, healthcare biotech, educational social development, industrial manufacturing expansions" />
        <meta name="author" content="PAI Fundtech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Project Funds Services | PAI Fundtech" />
        <meta property="og:description" content="Discover customized financial solutions for your project objectives and vision at PAI Fundtech. We specialize in infrastructure development, renewable energy, real estate, technology, healthcare, and more." />
        <meta property="og:image" content={smartconnect_project_funds} />
        <meta property="og:url" content="https://yourwebsite.com/project-funds" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Funds Services | PAI Fundtech" />
        <meta name="twitter:description" content="Discover customized financial solutions for your project objectives and vision at PAI Fundtech. We specialize in infrastructure development, renewable energy, real estate, technology, healthcare, and more." />
        <meta name="twitter:image" content={smartconnect_project_funds} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px] ">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${smartconnect_project_funds})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${smartconnect_project_funds})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Optimize Project Funds Services for Lasting Impact with PAI Fundtech
            </h1>
            <p className="text-lg text-white mb-8">
              Delivering customized financial solutions that align with your project objectives and vision.
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
            <h2 className="text-3xl font-bold mb-4">Project Funds Services at PAI Fundtech</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At PAI Fundtech, we focus on supporting projects that promote innovation and deliver long-term value. Our Project Funds Service offers the financial help and advice needed to turn your ideas into successful projects. We understand that getting funding on time is key to making your project happen, and we are here to provide the resources and expertise to help you succeed.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <img
              src={seedling_project_funds}
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
              src={project_funds}
              alt="Investment Team"
              className="w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">What are Project Funds?</h2>
            <p className="text-gray-700">
              Project funds are financial resources set aside to support specific projects with clear goals and timelines. These funds are important for covering costs related to development, implementation, and ongoing operations, helping projects be completed smoothly and successfully. Unlike traditional funding methods, project funds are designed for initiatives that need careful planning, execution, and resource management.
            </p>
          </div>
        </div>
      </div>

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Why Choose PAI Fundtech for Project Funding?</h2>

          <div className="container mx-auto py-6">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              At PAI Fundtech, we do more than just provide funding; we become your strategic partner and offer a complete approach to project financing. Here’s what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: evaluation_project_funds,
                title: 'Expertise in Project Evaluation',
                description: 'Our team has extensive experience in analyzing investment strategies, their potential impact, and financial needs. We find projects with strong chances for success and long-term value creation.'
              },
              {
                src: strategic_support_project_funds,
                title: 'Strategic Support',
                description: 'We offer guidance and insights throughout the entire project, from planning to execution. Our experts help with resource management, cash flow management, risk assessment, and improving performance.'
              },
              {
                src: financial_acumen_project_funds,
                title: 'Financial Acumen',
                description: 'We have a strong understanding of the funding landscape and create financial solutions tailored to your projects specific needs, ensuring resources are used efficiently.'
              },
              {
                src: connectivity_project_funds,
                title: 'Access to a Robust Network',
                description: 'Our large network of investors, partners, and industry experts provides opportunities for collaboration, extra funding, and helpful guidance to help your project succeed.'
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
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Our Approach to Project Funding</h2>

          <div className="container mx-auto py-6">
            <p className="text-gray-800 max-w-4xl mx-auto text-center py-2">
              At PAI Fundtech, we take a structured and hands-on approach to ensure your project's success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: clarifying_project_funds,
                title: 'Understanding Your Objectives',
                description: 'We start by understanding the purpose, scope, and goals of your project. By aligning with your vision, we can offer funding solutions that meet your specific needs.'
              },
              {
                src: appraisal_project_funds,
                title: 'Comprehensive Due Diligence',
                description: 'We carefully review every part of your project, such as financial plans, resource needs, and possible risks, to make smart funding choices.'
              },
              {
                src: tailored_project_funds,
                title: 'Customized Funding Strategies',
                description: 'Each project is different. We create investment ideas and funding strategies that match your project’s size, timeline, and goals.'
              },
              {
                src: maintenance_project_funds,
                title: 'Ongoing Support and Monitoring',
                description: 'We don’t just provide funding; we stay involved throughout the project, offering guidance, monitoring progress, and ensuring milestones are met.'
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
              We specialize in funding projects across diverse sectors that demonstrate innovation and measurable impact, including:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={industry.image}
                  alt={industry.alt}
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
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Benefits of Partnering with PAI Fundtech</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: secured_financial_backing_project_funds,
                title: 'Secured Financial Backing',
                description: 'Ensure your project has the resources to meet goals. Investment strategies optimize resource use for financial success.'
              },
              {
                src: strategic_collaboration_project_funds,
                title: 'Strategic Collaboration',
                description: 'Use our expertise to tackle challenges and achieve greater results. Proper cash flow management makes sure resources are available for smooth operations.'
              },
              {
                src: sustainable_growth_project_funds,
                title: 'Sustainable Growth',
                description: 'Focus on long-term outcomes with a partner committed to your success.'
              },
              {
                src: proven_expertise_project_funds,
                title: 'Proven Expertise',
                description: 'Benefit from our track record of supporting impactful and successful projects.'
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
      <GetStarted />
    </div>
  );
}

export default ProjectFunds;
