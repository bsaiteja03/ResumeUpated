
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contact</h2>
        <div className="max-w-xl mx-auto card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
          <div className="mt-8 flex justify-center space-x-6 text-2xl">
            <a href="mailto:bsaiteja674@gmail.com" className="text-primary hover:text-blue-700"><i className="fa-solid fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/saitejabhagyam" className="text-[#0A66C2] hover:text-[#004182]" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="tel:+919949891598" className="text-green-600 hover:text-green-700"><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;