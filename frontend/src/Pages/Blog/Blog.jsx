import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const shorts = [
    'mhNvMhxO9DM',
    '0-LeoyisGTg',
    'G1sHwpGHLWk',
    'AsozzUhWZLM',
    'ox0sLHApLWY',
    'cdkTMtgDLKQ'
  ];

  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const scrollAmount = 320;

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10); // added -10 buffer
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      // Check scroll position slightly later (after scroll happens)
      setTimeout(checkScrollPosition, 300);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      checkScrollPosition();
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile view renders videos vertically
  if (isMobile) {
    return (
      <div className="m-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-3">Blog</h1>
        <p className="text-base mb-4">Welcome to the Blog page!</p>
        <p>At PAI FundTech, we are committed to delivering customized financial solutions that address the unique challenges of our clients. Our blog serves as a platform to share insights, updates, and thought leadership in the realm of financial services and portfolio management.</p>
        
        <div className="flex flex-col space-y-4">
          {shorts.map((id, index) => (
            <div
              key={index}
              className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}?playsinline=1&rel=0`}
                title={`YouTube Short ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Link to="/" className="text-blue-600 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  // Tablet and Desktop view
  return (
    <div className="m-4 md:mt-16 flex flex-col relative">
      <h1 className="text-3xl font-bold md:text-2xl mb-4 md:mb-6">Welcome to the PAI FundTech Blog</h1>
      {/* Shorts Scroll Area with Buttons */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll('left')}
          disabled={atStart}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 shadow-lg ${
            atStart ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100'
          }`}
        >
          <FaArrowLeft size={16} className="md:text-lg" />
        </button>
        
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex space-x-3 md:space-x-6 overflow-hidden px-8 md:px-10"
          style={{ scrollBehavior: 'smooth' }}
        >
          {shorts.map((id, index) => (
            <div
              key={index}
              className={`${
                isTablet ? 'min-w-[220px] h-80' : 'min-w-[300px] h-96 md:h-[500px]'
              } rounded-lg shadow-lg overflow-hidden flex-shrink-0`}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}?playsinline=1&rel=0`}
                title={`YouTube Short ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        
        {/* Right Button */}
        <button
          onClick={() => scroll('right')}
          disabled={atEnd}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 shadow-lg ${
            atEnd ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100'
          }`}
        >
          <FaArrowRight size={16} className="md:text-lg" />
        </button>
      </div>
      <div className=' m-6 p-2'>
        <p className='text-base md:text-lg mb-4 md:mb-6'>At <strong>PAI FundTech</strong>, we are committed to delivering customized financial solutions that address the unique challenges of our clients. Our blog serves as a platform to share insights, updates, and thought leadership in the realm of financial services and portfolio management.</p>
      <p className='text-base md:text-lg'>We hope you enjoy our blog and find it valuable in your financial journey.</p>
      </div>
    </div>
  );
};

export default Blog;