import React from 'react';
import { Link } from 'react-router-dom';
import earth_investing from '../Assets/earth_investing.webp'

const Hero = () => {
  return (
    <div className="relative bg-black w-full">
      {/* Hero Section with Background Image */}
      <div className="relative h-[500px] lg:h-[600px] bg-gradient-to-r from-gray-800 to-gray-900">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${earth_investing})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.7,
          }}
        ></div>

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage: `url(${earth_investing})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.7,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionizing Alternative Investments with Technology
            </h1>
            <p className="text-lg text-white mb-8">
              Seamless Technology for Smarter Alternative Investments.
            </p>
            <Link to="/contact-us">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Register to Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Description Section */}
      <div className="w-full bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-800 max-w-4xl mx-auto text-center sm:text-left">
            At PAI Fundtech (Prachida Alternative Investment Fundtech), we are committed to equipping companies with the
            comprehensive financial capabilities needed to thrive in a highly competitive landscape. As an innovative asset
            Management Company, we leverage our expertise in Tax, Audit & Assurance, and Management Consulting to provide
            actionable insights and expert guidance, enabling you to streamline processes, overcome compliance challenges, and
            achieve sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;