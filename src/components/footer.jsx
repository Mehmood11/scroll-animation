import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-white py-12 w-full px-6 md:w-[1000px]">
      <div className="container mx-auto px-4">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info - Left Side */}
          <div className="mb-8 md:mb-0 flex-1">
            <div className="flex items-center mb-4">
              <img src={logo} width={"50px"} alt="Aminify Logo" />
              <h2 className="text-2xl font-bold ml-2">Aminify</h2>
            </div>
            <p className="text-gray-400">
              1234 Innovation Blvd, Suite 567
              <br />
              Tech City, TC 98766, United States.
            </p>
            <p className="text-gray-400 mt-2">(555) 123-4567</p>
            <p className="text-gray-400">contact@animify.com</p>
          </div>

          {/* Right Side - Three Sections */}
          <div className="flex flex-col sm:flex-row flex-wrap  gap-10 lg:gap-20 md:justify-end flex-1">
            {/* Home Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Home</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    404
                  </a>
                </li>
              </ul>
            </div>

            {/* Other Pages Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Other Pages</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Log In
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Forgot Password
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms & Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* My Work Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">My Work</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Drillsible
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Upwork
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Awww.wards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aminify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
