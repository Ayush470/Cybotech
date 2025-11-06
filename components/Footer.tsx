import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterCybotechLogo, MapPinIcon, PhoneIcon, EnvelopeIcon } from './icons/Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex items-center space-x-3 mb-4">
              <FooterCybotechLogo className="h-14 w-14" />
              <span className="text-xl font-bold text-white">Cybotech Campus</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              We give students the right skills for today's jobs in computers and English. Come join us and build a great career with our friendly teachers and support for life.
            </p>
          </div>
          
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-slate-400 hover:text-pinterest-red transition-colors">About Us</NavLink></li>
              <li><NavLink to="/courses" className="text-slate-400 hover:text-pinterest-red transition-colors">Our Courses</NavLink></li>
              <li><NavLink to="/contact" className="text-slate-400 hover:text-pinterest-red transition-colors">Contact Us</NavLink></li>
              <li><NavLink to="/verify" className="text-slate-400 hover:text-pinterest-red transition-colors">Verify Certificate</NavLink></li>
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 mt-1 text-pinterest-red flex-shrink-0" />
                <span>S.N. Singh Complex, Nawada Road, Hisua, Nawada, Bihar - 805103</span>
              </li>
              <li className="flex items-start space-x-3">
                <PhoneIcon className="w-5 h-5 mt-1 text-pinterest-red flex-shrink-0" />
                <div>
                  <a href="tel:9199244322" className="hover:text-pinterest-red transition-colors">9199244322</a>, <a href="tel:7667822389" className="hover:text-pinterest-red transition-colors">7667822389</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <EnvelopeIcon className="w-5 h-5 mt-1 text-pinterest-red flex-shrink-0" />
                <a href="mailto:cybotechcampus3@gmail.com" className="hover:text-pinterest-red transition-colors break-all">cybotechcampus3@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-800/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center text-sm text-slate-400">
          <p>&copy; {currentYear} Cybotech Campus. All Rights Reserved.</p>
          <div className="mt-2 sm:mt-0">
            <NavLink to="/privacy" className="hover:text-pinterest-red transition-colors">Privacy Policy</NavLink>
            <span className="mx-2">|</span>
            <NavLink to="/terms" className="hover:text-pinterest-red transition-colors">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;