import React from 'react';
import customized_solutions_investing from '../Assets/customized_solutions_investing.webp'
import industry_expertise_investing from '../Assets/industry_expertise_investing.webp'
import innovative_approach_investing from '../Assets/innovative_approach_investing.webp'


const Internship = () => {
  return (
    <div className="bg-gray-100 w-full px-4 py-12 md:px-8 lg:px-16">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-3">
          Why Choose PAI Fundtech?
        </h2>

        <p className="text-center text-gray-800 mb-12 max-w-3xl mx-auto">
          We focus on more than providing solutions; we cultivate enduring partnerships. Here's why companies choose us as their preferred partner:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Customized Solutions */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-40 h-40 mb-4">
              <img
                src={customized_solutions_investing}
                alt="People working with gears illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Customized Solutions</h3>
            <p className="text-sm text-center text-gray-700">
              We recognize that each business has its own identity, and we provide solutions uniquely crafted to meet your specific challenges and goals. Our methods focus on delivering clear, measurable results that align seamlessly with your objectives.
            </p>
          </div>

          {/* Card 2: Industry Expertise */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-40 h-40 mb-4">
              <img
                src={industry_expertise_investing}
                alt="Team of industry professionals illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Industry Expertise</h3>
            <p className="text-sm text-center text-gray-700">
              Our team of experts offers extensive industry insights across sectors like finance, manufacturing, technology, and retail. This ensures you receive top-tier expertise and practical advice relevant to your industry.
            </p>
          </div>

          {/* Card 3: Innovative Approach */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-40 h-40 mb-4">
              <img
                src={customized_solutions_investing}
                alt="Person with digital innovation elements illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Innovative Approach</h3>
            <p className="text-sm text-center text-gray-700">
              We utilize the latest tools and technologies to offer cutting-edge solutions, helping businesses stay competitive in an ever-evolving market. We assist in future-proofing operations by embracing automation, digital transformation, and advanced analytics.
            </p>
          </div>
        </div>

        {/* Bottom card - Takes full width on mobile, half on tablet, and one-third on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center md:col-start-1 md:col-end-2 lg:col-start-1 lg:col-end-2">
            <div className="w-40 h-40 mb-4">
              <img
                src={innovative_approach_investing}
                alt="Client partnership illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Client-Focused Approach</h3>
            <p className="text-sm text-center text-gray-700">
              Everything we do is driven by your success. We focus on building strong partnerships and offering personalized, hands-on support throughout your business journey. Every client is given the utmost attention and ensures they receive customized service at all times
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;