
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, Logo, MenuIcon, CloseIcon } from '../constants';
import { NavLinkItem } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const linkClasses = "text-gray-600 hover:text-primary transition duration-300";
  const activeLinkClasses = "text-primary font-semibold";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <NavLink to="/plans" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300 font-semibold">
              Book Now
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary focus:outline-none">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white shadow-lg`}>
        <nav className="flex flex-col items-center space-y-4 p-4">
          {NAV_LINKS.map((link: NavLinkItem) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `text-lg ${linkClasses} ${isActive ? activeLinkClasses : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/plans" className="w-full text-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition duration-300 font-semibold mt-4">
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
