import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mt-6 bg-gradient-to-b from-[rgba(23,29,45,0.5)] to-[rgba(4,11,29,0.5)] py-4 px-6 rounded-[200px] mx-auto w-[70%] md:w-[68%] lg:w-[55%] xl:w-[40%] 2xl:w-[40%] border border-[#FFFFFF1F]">
      <div className="gradient-circle"></div>

      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Hamburger menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-23 left-0 right-0 bg-[#020617] py-4 px-6 rounded-lg`}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-300 text-[14px]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/template"
                className="text-white hover:text-gray-300 text-[14px]"
              >
                Template
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="text-white hover:text-gray-300 text-[14px]"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white hover:text-gray-300 text-[14px]"
              >
                About
              </a>
            </li>
            <li>
              <button className=" cursor-pointer text-white px-4 py-2 rounded-xl  inline-block md:hidden shadow-[inset_0px_0px_8px_0px_#0099FF]">
                Try it now
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a href="/" className="text-white hover:text-gray-300 text-[14px]">
              Home
            </a>
          </li>
          <li>
            <a
              href="/template"
              className="text-white hover:text-gray-300 text-[14px]"
            >
              Template
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="text-white hover:text-gray-300 text-[14px]"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white hover:text-gray-300 text-[14px]"
            >
              About
            </a>
          </li>
        </ul>

        {/* Try it now button - desktop */}
        <button className="cursor-pointer hidden md:block text-white px-4 py-2 rounded-xl shadow-[inset_0px_0px_8px_0px_#0099FF]">
          Try it now
        </button>
      </nav>
    </header>
  );
};

export default Header;
