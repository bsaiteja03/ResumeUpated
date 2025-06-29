import React, { useState } from 'react';
// Using normal anchor links for single-page scrolling
import { motion } from 'framer-motion';

const navLinks = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#experience', label: 'Experience' },
  { to: '#projects', label: 'Projects' },
  { to: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/90 backdrop-blur-lg shadow-md z-50"
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <a href="#home" className="text-2xl font-bold text-primary tracking-tight">
          Sai Teja Bhagyam
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link.to}
              href={link.to}
              className="font-semibold text-gray-700 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setOpen(!open)}
        >
          <i className="fas fa-bars"></i>
        </button>
        {open && (
          <div className="absolute top-16 right-4 bg-white rounded-xl shadow-lg flex flex-col space-y-4 p-4 md:hidden">
            {navLinks.map(link => (
              <a
                key={link.to}
                href={link.to}
                className="text-gray-700 font-semibold hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;