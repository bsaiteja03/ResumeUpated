import React from 'react';
import { motion } from 'framer-motion';

// Replace these URLs with your actual photos or keep as Unsplash placeholders
const photos = [
  'https://source.unsplash.com/random/800x600?nature,water',
  'https://source.unsplash.com/random/800x601?nature,forest',
  'https://source.unsplash.com/random/800x602?nature,mountain',
  'https://source.unsplash.com/random/800x603?nature,sky',
  'https://source.unsplash.com/random/800x604?nature,beach',
  'https://source.unsplash.com/random/800x605?nature,river',
];

const Gallery = () => (
  <section id="gallery" className="container mx-auto px-4 py-12">
    <h2 className="section-title">Photo Gallery</h2>
    <div className="grid gap-4 md:grid-cols-3">
      {photos.map((src, idx) => (
        <motion.div
          key={idx}
          className="overflow-hidden rounded-2xl shadow-lg"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src={src}
            alt={`Gallery item ${idx + 1}`}
            className="object-cover w-full h-60 md:h-64 lg:h-72"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Gallery;
