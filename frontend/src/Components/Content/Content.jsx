import React from 'react';
import expertise_investing from '../Assets/expertise_investing.webp'
import vision_investment_banking_investing from '../Assets/vision_investment_banking_investing.webp'

const Content = () => {
  return (
    <div className="bg-gray-100 w-full px-4 py-8 md:px-8 lg:px-12">
      {/* Our Expertise Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-8">Our Expertise</h2>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-2/5">
            <img
              src={expertise_investing}
              alt="Business meeting with people looking at charts"
              className="w-full h-auto rounded shadow-md"
            />
          </div>

          <div className="w-full lg:w-3/5">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              PAI Fundtech is a forward-thinking Investment Company, specializing in delivering
              customized financial solutions designed to address the unique challenges of your business.
              We are committed to supporting you as a dependable ally throughout every phase of your
              business journey. Whether it's creating effective tax strategies to optimize savings and ensure
              compliance, providing thorough audit and assurance services, or offering innovative
              management consulting to enhance performance, we are with you every step of the way. Our
              team of highly skilled industry professionals brings diverse experience across multiple
              sectors, ensuring your business is supported with the highest standards of integrity and
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-8">Our Vision for Investment Banking</h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-3/5">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              At PAI Fundtech, we aspire to broaden our reach into investment banking,
              offering innovative financial solutions for businesses and individuals. We aim
              to foster growth through strategic advisory, capital raising, mergers and
              acquisitions, and customized investing strategies. Guided by integrity,
              excellence, and a commitment to long-term partnerships, we aspire to be a
              trusted leader in the investment industry, delivering value and ensuring
              sustainable success for our clients.
            </p>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              src={vision_investment_banking_investing}
              alt="Light bulb with the words Our Vision"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;