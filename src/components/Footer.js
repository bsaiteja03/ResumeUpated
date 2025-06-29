import React from 'react';

const Footer = () => (
  <footer className="bg-white/90 py-6 mt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
    <div>
      &copy; {new Date().getFullYear()} Sai Teja Bhagyam &middot; All rights reserved.
    </div>
    <div className="mt-2">
      <a href="mailto:bsaiteja674@gmail.com" className="mx-2 hover:text-primary"><i className="fa-solid fa-envelope"></i></a>
      <a href="https://www.linkedin.com/in/saitejabhagyam" className="mx-2 hover:text-[#0A66C2]" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      <a href="tel:+919949891598" className="mx-2 hover:text-green-600"><i className="fa-solid fa-phone"></i></a>
    </div>
  </footer>
);

export default Footer;