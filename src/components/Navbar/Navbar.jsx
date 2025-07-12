import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./components/MenuItem";
import MobileMenuItem from "./components/MobileMenuItem";
import LanguageSwitcher from "./components/LanguageSwitcher";
import navitemlist from "../../dataJson/navitemlist.json";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav>
      <div className="container mx-auto px-4 font-medium">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <img src="/logo-removebg.png" alt="Logo" className="size-16 scale-125" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:block"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <ul className="flex space-x-4">
              {navitemlist.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay={300 + (index * 100)}
                >
                  <MenuItem item={item} />
                </div>
              ))}
            </ul>
          </nav>

          <div
            className="flex"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {/* langyage Info */}
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-transform duration-200 hover:scale-110"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-20"
            data-aos="fade-down"
            data-aos-duration="400"
          >
            <ul className="space-y-2">
              {navitemlist.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-duration="400"
                  data-aos-delay={index * 100}
                >
                  <MobileMenuItem
                    item={item}
                    activeSubmenu={activeSubmenu}
                    toggleSubmenu={toggleSubmenu}
                    onClose={handleMobileMenuClose}
                  />
                </div>
              ))}
              {/* <li className="px-4 py-3 text-black bg-red-300">
                <LanguageSwitcher  />
              </li> */}
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
