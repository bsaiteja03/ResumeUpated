import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <section id="home" className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">Sai Teja Bhagyam</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
        MBA (Operations Management) | B.Tech (CSE) <br />
        Enthusiastic, detail-oriented, and passionate about leveraging technology and business to optimize processes and drive operational efficiency.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="mailto:bsaiteja674@gmail.com" className="btn-primary">
          <i className="fa-solid fa-envelope mr-2"></i>Email Me
        </a>
        <a href="https://www.linkedin.com/in/saitejabhagyam" target="_blank" rel="noopener noreferrer" className="btn-primary bg-[#0A66C2] hover:bg-[#004182]">
          <i className="fab fa-linkedin mr-2"></i>LinkedIn
        </a>
        <a href="tel:+919949891598" className="btn-primary bg-green-600 hover:bg-green-700">
          <i className="fa-solid fa-phone mr-2"></i>Call
        </a>
      </div>
      <p className="text-gray-600">
        <span className="font-semibold">Email:</span> bsaiteja674@gmail.com <br />
        <span className="font-semibold">Phone:</span> +91 99498 91598
      </p>
    </motion.div>
  </section>
);

export default Home;