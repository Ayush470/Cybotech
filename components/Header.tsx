import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CybotechLogo, MenuIcon, XIcon, HomeIcon, UsersIcon, BookOpenIcon, PhoneIcon, BadgeCheckIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home', icon: <HomeIcon className="w-5 h-5" /> },
    { to: '/about', text: 'About', icon: <UsersIcon className="w-5 h-5" /> },
    { to: '/courses', text: 'Courses', icon: <BookOpenIcon className="w-5 h-5" /> },
    { to: '/contact', text: 'Contact', icon: <PhoneIcon className="w-5 h-5" /> },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <CybotechLogo className="h-14 w-14" />
              <span className="text-xl font-bold text-slate-800 tracking-tight">Cybotech Campus</span>
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-pinterest-red'
                        : 'text-slate-700 hover:text-pinterest-red'
                    }`
                  }
                >
                  {link.icon}
                  <span>{link.text}</span>
                </NavLink>
              ))}
              <NavLink
                to="/verify"
                className="flex items-center space-x-2 bg-pinterest-red text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pinterest-red-hover transition-all duration-300 transform hover:scale-105"
                title="Verify Your Certificate"
              >
                <BadgeCheckIcon className="w-5 h-5" />
                <span>Verify Certificate</span>
              </NavLink>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 hover:text-pinterest-red focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              title={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-red-50 text-pinterest-red' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ))}
            <NavLink
              to="/verify"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 bg-pinterest-red text-white mx-3 my-2 px-3 py-2 rounded-md text-base font-medium justify-center hover:bg-pinterest-red-hover"
            >
              <BadgeCheckIcon className="w-5 h-5" />
              <span>Verify Certificate</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;