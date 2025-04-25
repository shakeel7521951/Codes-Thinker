import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };

  const navLinkClass = `group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300`;
  const underlineSpan = (
    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#01b5e8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  );

  return (
    <nav className="bg-[#060145] shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.svg" alt="TOJO Global Logo" className="h-10 w-auto" />
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4 text-2xl">
              <a href="#" className={navLinkClass}>Home {underlineSpan}</a>
              <a href="#" className={navLinkClass}>About {underlineSpan}</a>
              <a href="#" className={navLinkClass}>Services {underlineSpan}</a>
              <a href="#" className={navLinkClass}>Clients {underlineSpan}</a>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleCompany}
                  className={`${navLinkClass} flex items-center`}
                >
                  Company
                  {isCompanyOpen ? (
                    <FaChevronUp className="ml-1 h-3 w-3 cursor-pointer" />
                  ) : (
                    <FaChevronDown className="ml-1 h-3 w-3 cursor-pointer" />
                  )}
                  {underlineSpan}
                </button>

                {isCompanyOpen && (
                <div className="absolute z-10 left-0 mt-2 w-42 rounded-md shadow-lg border border-[#15A2D5] bg-gradient-to-b from-[#1A58A0] to-[#384C84] py-4 gap-3 flex flex-col items-center text-center">
                <a
                  href="#"
                  className="px-2 py-2 text-white text-base font-medium w-[70%] bg-[#818CB6] hover:bg-[#1A58A0] hover:border hover:border-[#15A2D5] rounded-lg transition duration-200"
                >
                  Leadership
                </a>
                <a
                  href="#"
                  className="mt-1 px-2 py-2 text-white text-base font-medium w-[70%] bg-[#818CB6] hover:bg-[#1A58A0] hover:border hover:border-[#15A2D5] rounded-lg transition duration-200"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="mt-1 px-2 py-2 text-white text-base font-medium w-[70%] bg-[#818CB6] hover:bg-[#1A58A0] hover:border hover:border-[#15A2D5] rounded-lg transition duration-200"
                >
                  Contact
                </a>
              </div>
              
              
                
                )}
              </div>

              <a href="#" className={navLinkClass}>Packages {underlineSpan}</a>
            </div>
          </div>

          {/* Book a Call Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="text-white px-4 py-2 border border-[#15A2D5] rounded-full text-lg font-medium 
                hover:bg-gradient-to-r hover:from-[#c508ff] hover:to-[#18c9ff] transition-all duration-300"
            >
              Book a Intro Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#01b5e8] focus:outline-none"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 flex flex-col items-center">
            {['Home', 'About', 'Services', 'Clients'].map((item) => (
              <a
                key={item}
                href="#"
                className="w-full max-w-xs text-center px-3 py-2 rounded-md text-lg font-medium text-white hover:text-[#01b5e8] hover:bg-gray-50/10 transition-colors duration-200"
              >
                {item}
              </a>
            ))}

            {/* Mobile Company Dropdown */}
            <div className="w-full max-w-xs">
              <button
                onClick={toggleCompany}
                className="w-full flex justify-center items-center px-3 py-2 rounded-md text-lg font-medium text-white hover:text-[#01b5e8] hover:bg-gray-50/10 transition-colors duration-200 relative"
              >
                Company
                <span className="absolute right-4">
                  {isCompanyOpen ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4" />}
                </span>
              </button>

              {isCompanyOpen && (
                <div className="mt-1 space-y-1">
                  {['Leadership', 'Careers', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2 text-center rounded-md text-lg font-medium text-white hover:text-[#01b5e8] hover:bg-gray-50/10 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {['Packages'].map((item) => (
              <a
                key={item}
                href="#"
                className="w-full max-w-xs text-center px-3 py-2 rounded-md text-lg font-medium text-white hover:text-[#01b5e8] hover:bg-gray-50/10 transition-colors duration-200"
              >
                {item}
              </a>
            ))}

            {/* CTA Button */}
            <div className="w-full max-w-xs pt-2">
              <a
                href="#"
                className="block w-full text-center px-4 py-2 border border-[#15A2D5] rounded-full text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#c508ff] hover:to-[#18c9ff] transition-all duration-300"
              >
                Book a Intro Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
