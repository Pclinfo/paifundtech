import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import financial_advisor from '../Assets/financial_advisor.webp';
import banner from '../Assets/Loan/banner.jpg';
import buyingOrRefinancingCommercialRealEstate from '../Assets/Loan/Buying or Refinancing Commercial Real Estate.webp';
import commercialMortgages from '../Assets/Loan/Commercial Mortgages.webp';
import compilanceDiagnistics from '../Assets/Loan/Compilance diagnist.webp';
import debtSyndicationAndEquityAssistance from '../Assets/Loan/Debt syndication and equity assistance.webp';
import expandingOrRenovatingYourBusinessPremises from '../Assets/Loan/Expanding or Renovating Your Business Premises.webp';
import loanAgainstBond from '../Assets/Loan/Loan against bond.webp';
import loanAgainstShares from '../Assets/Loan/Loan against shares.webp';
import payrollAdministration from '../Assets/Loan/Payroll Administration.webp';
import projectFinance from '../Assets/Loan/Project Finance.webp';
import publicInfrastructureProjects from '../Assets/Loan/public infrastructure projects.webp';
import quickProcessingWithMinimalDocumentation from '../Assets/Loan/Quick Processing with Minimal Documentation.webp';
import retainOwnershipAndBenefitsOfYourSecurities from '../Assets/Loan/Retain Ownership and Benefits of Your Securities.webp';
import riskAndAnalysis from '../Assets/Loan/risk and analysis.webp';
import structuredFundingForPropertyInvestments from '../Assets/Loan/Structured Funding for Property Investments.webp';
import GetStarted from '../../Components/GetStarted/GetStarted';

const Loan = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Unlock Instant Liquidity with PAI Fundtech Loans - Strategic Financial Solutions</title>
        <meta
          name="description"
          content="Unlock instant liquidity with PAI Fundtech loans against shares, mutual funds, and bonds. Ideal for individuals, HNIs, and businesses seeking strategic financial solutions without liquidating investments. Our loans offer quick processing, compliance diagnostics, payroll administration, and project finance options."
        />
        <meta
          name="keywords"
          content="PAI Fundtech, loans, shares, mutual funds, bonds, instant liquidity, financial solutions, HNIs, business support, commercial mortgages, accounting, compliance diagnostics, payroll administration, project finance, large-scale infrastructure, industrial projects, public infrastructure projects, debt syndication, equity assistance, risk analysis, structured funding, power plants, roads, renewable energy, capital-intensive initiatives"
        />
        <meta property="og:title" content="Unlock Instant Liquidity with PAI Fundtech Loans - Strategic Financial Solutions" />
        <meta property="og:description" content="Unlock instant liquidity with PAI Fundtech loans against shares, mutual funds, and bonds. Ideal for individuals, HNIs, and businesses seeking strategic financial solutions without liquidating investments. Our loans offer quick processing, compliance diagnostics, payroll administration, and project finance options." />
        <meta property="og:image" content={financial_advisor} />
        <meta property="og:url" content="https://paifundtech.com/financial-services/loan" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unlock Instant Liquidity with PAI Fundtech Loans - Strategic Financial Solutions" />
        <meta name="twitter:description" content="Unlock instant liquidity with PAI Fundtech loans against shares, mutual funds, and bonds. Ideal for individuals, HNIs, and businesses seeking strategic financial solutions without liquidating investments. Our loans offer quick processing, compliance diagnostics, payroll administration, and project finance options." />
        <meta name="twitter:image" content={financial_advisor} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px] bg-gradient-to-r from-gray-100 to-gray-200">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Empower Your Financial Journey with <br />PAI Fundtech
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8">
              Strategic Financial Solutions, Trusted Expertise.<br />
              Redefining finance — intelligent, secure, and built around your vision.
            </p>
            <Link to="/contact-us">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Register to Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Rest of the content remains the same */}

      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-800 max-w-4xl mx-auto text-center sm:text-left leading-relaxed">
            Unlock the hidden value of your investments without having to liquidate them. At PAI Fundtech, we offer loans against your shares, mutual funds, and bonds — giving you instant liquidity while your assets continue to generate returns.
            We help you raise capital without selling your long-term wealth-building instruments. Our solutions are tailored for individuals, HNIs, and businesses seeking efficient and quick financial support.
          </p>
        </div>
      </div>

      {/* Loan Against Shares Section */}
      <div className="container mx-auto py-12 px-4">
        <h4 className="text-center text-3xl font-bold text-black mb-12">
              Loan Against Securities
          </h4>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 order-2 md:order-1">
            
            <h2 className="text-black text-xl sm:text-2xl font-bold mb-4 pt-8"> Shares</h2>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Your equity investments can now work double time. With our loan against shares service, you can pledge listed shares and receive instant credit.
            </p>
            <p className="text-black text-xl sm:text-2xl font-bold mb-4 pt-8">Key Features:</p>
            <ul className="list-disc list-inside text-gray-700 ml-8 mb-16">
              <li className="relative">Secure a loan by pledging approved listed stocks</li>
              <li className="relative">Instant overdraft limit based on market value</li>
              <li className="relative">Continued ownership and dividend earnings</li>
              <li className="relative">Easy top-up and flexible tenure</li>
            </ul>
            <p className="text-gray-700 text-lg sm:text-xl">
              This option is ideal for those needing short-term liquidity without exiting the stock market.
            </p>
          </div>

          <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <img
              src={loanAgainstShares}
              alt="Loan Against Shares - Unlock Instant Liquidity with PAI Fundtech"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Loan Against Bonds Funds Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img
              src={loanAgainstBond}
              alt="Loan Against Bonds - Structured Loans for Corporate and Government Bonds with PAI Fundtech"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8 order-1 md:order-2">
            <h2 className="text-black text-xl sm:text-2xl font-bold mb-4 pt-8">Bonds</h2>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              If you hold corporate or government bonds, we offer structured loans against these debt
              instruments. It’s a smart way to leverage fixed-income securities for immediate financing
              needs.
            </p>
            <p className="text-black text-xl sm:text-2xl font-bold mb-4 pt-8">Key Features:</p>
            <ul className="list-disc list-inside text-gray-700 ml-8 mb-8">
              <li className="relative">Attractive interest rates with high LTV (Loan-to-Value) ratios</li>
              <li className="relative">No requirement to sell your bonds</li>
              <li className="relative">Applicable for individual investors, corporates, and institutions</li>
              <li className="relative">Transparent terms and seamless disbursal process</li>
            </ul>
            <p className="text-gray-700 text-lg sm:text-xl">
              A loan against bonds can help you finance large purchases, business opportunities, or bridge working capital needs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Accounting and Business Support</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                src: quickProcessingWithMinimalDocumentation,
                title: 'Quick Processing with Minimal Documentation',
                description: 'Streamlined application process with reduced paperwork'
              },
              {
                src: retainOwnershipAndBenefitsOfYourSecurities,
                title: 'Retain Ownership and Benefits of Your Securities',
                description: 'Maintain control and benefits of your investment portfolio'
              },
              {
                src: payrollAdministration,
                title: 'Payroll Administration',
                description: 'Efficient payroll processing and management'
              },
              {
                src: compilanceDiagnistics,
                title: 'Compliance Diagnostics',
                description: 'Comprehensive compliance checks and diagnostics'
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
        <p className='text-center mx-40 text-lg sm:text-xl leading-relaxed pt-4'>We help you raise capital without selling your long-term wealth-building instruments. Our 
                solutions are tailored for individuals, HNIs, and businesses seeking efficient and quick 
                financial support.</p>
      </div>
      

      <div className="bg-gray-300 py-16">
        <p className="text-center mx-4 text-lg sm:text-xl font-bold  ">
          Whether you need funds for business expansion, emergencies, or personal goals, PAI Fundtech helps you leverage your portfolio smartly and securely.
        </p>
      </div>

      {/* Commercial Mortgages Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-center text-3xl font-bold text-black mb-12">
          Commercial Mortgages
        </h2>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-xl font-bold text-black mb-4">
              What is a Commercial Mortgage?
            </h3>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              A commercial mortgage is a type of mortgage that is used to finance the construction, renovation, or expansion of a business. It is typically used to finance the cost of building, renovating, or expanding a business.
            </p>
            <p className="text-black text-xl sm:text-2xl font-bold mb-4 pt-8">
              Key Features:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-8 mb-8">
              <li className="relative">
                Financing for the construction, renovation, or expansion of a business
              </li>
              <li className="relative">
                Low interest rates compared to conventional mortgages
              </li>
              <li className="relative">Flexible tenure options</li>
              <li className="relative">No collateral requirement</li>
            </ul>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={commercialMortgages}
              alt="Expert Financial Accounting Services for Commercial Mortgages - PAI Fundtech"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <p className="text-center mx-4 text-lg sm:text-xl leading-relaxed">
          Fuel your business growth with our tailored commercial mortgage solutions. We provide
          financing for a wide range of commercial properties including offices, warehouses, retail
          spaces, and industrial units. Our mortgage solutions are designed to meet the specific needs
          of your business.
        </p>
      </div>

      {/* Commercial Mortgages Grid Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {[
            {
              src: buyingOrRefinancingCommercialRealEstate,
              title: 'Buying or Refinancing Commercial Real Estate',
              description: 'Flexible options for acquiring or refinancing business properties'
            },
            {
              src: expandingOrRenovatingYourBusinessPremises,
              title: 'Expanding or Renovating Your Business Premises',
              description: 'Solutions for growing or improving your business space'
            },
            {
              src: structuredFundingForPropertyInvestments,
              title: 'Structured Funding for Property Investments',
              description: 'Tailored funding solutions for your real estate projects'
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

      {/* Project Finance Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-center text-3xl font-bold text-black mb-12">
          Project Finance
        </h2>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-xl font-bold text-black mb-4">
              What is Project Finance?
            </h3>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Project finance is a long-term financing solution for large-scale infrastructure and industrial projects. It is typically based on the projected cash flows of the project rather than the balance sheets of its sponsors.
            </p>
            <p className="text-black text-xl sm:text-2xl font-bold mb-4 pt-8">
              Key Features:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-8 mb-8">
              <li className="relative">
                Financing for large-scale infrastructure and industrial projects
              </li>
              <li className="relative">
                Risk allocation among multiple stakeholders
              </li>
              <li className="relative">Non-recourse or limited recourse financing</li>
              <li className="relative">Tailored repayment schedules</li>
            </ul>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={projectFinance}
              alt="Expert Project Finance Services - PAI Fundtech"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <p className="text-center mx-4 my-8 text-lg sm:text-xl leading-relaxed">
          Secure long-term funding for your large-scale infrastructure or industrial projects with PAI Fundtech’s specialized Project Finance services. We provide structured financial solutions for businesses looking to develop power plants, roads, renewable energy projects, and other capital-intensive initiatives.
        </p>
      </div>

      {/* Project Finance Grid Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {[
            {
              src: publicInfrastructureProjects,
              title: 'Feasibility assessment & financial structuring',
              description: 'Financing for roads, bridges, and other public infrastructure projects'
            },
            {
              src: debtSyndicationAndEquityAssistance,
              title: 'Debt syndication and equity assistance',
              description: 'Support for renewable energy and power generation projects'
            },
            {
              src: riskAndAnalysis,
              title: 'Risk analysis and regulatory compliance',
              description: 'Funding for large-scale industrial and manufacturing projects'
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

      <GetStarted />
    </div>
  );
};

export default Loan;
