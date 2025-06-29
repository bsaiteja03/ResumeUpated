import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section className="container mx-auto px-4 py-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">About Me</h2>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-lg leading-relaxed">
        <p>
          I am an enthusiastic and detail-oriented professional with a strong foundation in both technology and business. 
          With a B.Tech in Computer Science & Engineering and an MBA specializing in Operations Management, 
          I am passionate about leveraging modern technologies to optimize processes, improve productivity, and drive operational efficiency.
        </p>
        <ul className="mt-6 space-y-2">
          <li><b>Location:</b> Hyderabad, India</li>
          <li><b>Education:</b> MBA (Woxsen University, 2022-2024), B.Tech (KL University Hyderabad, 2017-2021)</li>
          <li><b>Certifications:</b> Automation Anywhere Advanced RPA</li>
        </ul>
      </div>
    </motion.div>
  </section>
);

export default About;