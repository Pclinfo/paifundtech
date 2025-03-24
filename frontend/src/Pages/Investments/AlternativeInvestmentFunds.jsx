import React from 'react';
import { Link } from 'react-router-dom';
import cover_alternative_investmen_funds from '../Assets/cover_alternative_investmen_funds.webp';
import alternativeInvestmentFunds from '../Assets/alternative_investmen_funds.webp';
import expertiseExperience from '../Assets/expertise_experience.webp';
import personalizedSolutions from '../Assets/personalized_solutions.webp';
import expertise from '../Assets/expertise.webp';
import commitmentExcellence from '../Assets/commitment_excellence.webp';
import customizedInvestmentStrategies from '../Assets/customized_investment_strategies.webp';
import rigorousDueDiligence from '../Assets/rigorous_due_diligence.webp';
import activeFundManagement from '../Assets/active_fund_management.webp';
import transparentReporting from '../Assets/transparent_reporting.webp';

const AlternativeInvestmentFunds = () => {
  return (
    <div className="bg-white ">
      <div className="relative h-[500px] lg:h-[600px]">

        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${cover_alternative_investmen_funds})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${cover_alternative_investmen_funds})`,
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

      {/* What Are Alternative Investment Funds */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={alternativeInvestmentFunds}
              alt="Investment Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              What Are Alternative Investment Funds?
            </h2>
            <p className="text-gray-700 mb-4">
              Alternative Investment Funds (AIF) are investment options that gather money from investors to invest in assets outside the usual categories like stocks, bonds, and cash. AIFs typically allocate funds to alternative assets such as private equity, hedge funds, venture capital, real estate, commodities, and other non-conventional investments
            </p>
            <p className="text-gray-700">
              These funds are great for investors who want to diversify their portfolios and aim for higher returns using alternative strategies.
            </p>
          </div>
        </div>
      </div>

      {/* AIF Categories */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
            Categories of Alternative Investment Funds (AIF)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Category I AIFs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">1. Category I AIFs</h3>
              <p className="text-gray-700 mb-4">
                Category I AIFs prioritize investments that positively impact the economy and society. These funds primarily focus on early-stage startups, emerging businesses, and sectors deemed beneficial by government and regulatory bodies. Their investments often include socially impactful ventures, small and medium enterprises (SMEs), and infrastructure projects
              </p>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Focus on Start-ups and Social Impact: Invest in new businesses with growth potential and a positive impact on society.</li>
                <li>High-Risk, High-Reward Potential: Early-stage ventures often involve more risk but can offer higher returns</li>
                <li>Targeted Sectors: Focus includes innovation, infrastructure, and small businesses (SMEs).</li>
              </ul>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Popularity:</h3>
              <p className="text-gray-700 mb-4">
                Category I AIFs are popular with investors seeking long-term growth in emerging markets or focusing on socially responsible investments
              </p>
            </div>

            {/* Category II AIFs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">2. Category II AIFs</h3>
              <p className="text-gray-700 mb-4">
                Category II AIFs focus on investing in companies at mid or later stages, with an emphasis on private equity, pre-IPO capital, or debt funding. These funds support businesses that have moved beyond the startup phase and need capital for growth or expansion.
              </p>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Private Equity Focus: Invest in established businesses seeking funds for growth or acquisitions</li>
                <li>Flexible Financing: Provide both equity and debt funding based on business needs.</li>
                <li>Diverse Investments: Include private equity, real estate, and distressed assets.</li>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Popularity:</h3>
                <p className="text-gray-700 mb-4">
                  Category II AIFs are popular among investors aiming for stable growth with moderate to high risk, often focusing on mature markets
                </p>
              </ul>

            </div>

            {/* Category III AIFs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">3. Category III AIFs</h3>
              <p className="text-gray-700 mb-4">
                Category III AIFs focus on large-scale investments, such as listed stocks, derivatives, and advanced trading strategies. These funds can use leverage and different trading methods to aim for higher returns, making them ideal for investors willing to take on more risk for potentially greater rewards
              </p>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Wide Investment Options: Includes various strategies, like long-only and long-short positions, across multiple asset classes</li>
                <li>Flexible and Dynamic: Uses leverage and derivatives to enhance returns in different market conditions</li>
                <li>For Experienced Investors: Best suited for those who understand market complexities and can handle volatility</li>
              </ul>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Popularity:</h3>
              <p className="text-gray-700 mb-4">
                Category III AIFs are favored by experienced investors, including hedge fund managers, because of their potential for high returns despite the higher risks involved.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Why Choose Prachida Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
          Why Should You Choose Prachida?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              src: expertiseExperience,
              title: 'Expertise & Experience',
              description: 'Our team includes experts with many years of experience in finance, technology, and management consulting'
            },
            {
              src: personalizedSolutions,
              title: 'Personalized Solutions',
              description: 'We know that each client is different, so we provide solutions designed to meet your specific goals and needs'
            },
            {
              src: commitmentExcellence,
              title: 'Commitment to Excellence',
              description: 'At Prachida, we are dedicated to offering the best service and delivering excellent results for our clients'
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

      {/* Why Invest with Prachida Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
            Why Invest in AIF with Prachida?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: expertise,
                title: 'Expertise in Alternative Investments',
                description: 'Our team has many years of experience in managing and advising on alternative investments. We carefully choose and organize our funds to meet the unique needs of each client.'
              },
              {
                src: customizedInvestmentStrategies,
                title: 'Customized Investment Strategies',
                description: 'We know that each investor has different risk levels and financial goals. Our "AIFs" services are flexible and can be adjusted to fit your specific investment needs.'
              },
              {
                src: rigorousDueDiligence,
                title: 'Rigorous Due Diligence',
                description: 'We carefully research every investment opportunity to make sure each fund is built on a strong foundation with growth potential.'
              },
              {
                src: activeFundManagement,
                title: 'Active Fund Management',
                description: 'Our fund managers closely watch and manage the portfolios, making smart decisions based on market conditions and the interests of investors'
              },
              {
                src: transparentReporting,
                title: 'Transparent Reporting',
                description: 'We believe in being fully transparent. Investors receive regular reports with detailed information about fund performance, asset distribution, and market outlook'
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

    </div>
  );
};

export default AlternativeInvestmentFunds;