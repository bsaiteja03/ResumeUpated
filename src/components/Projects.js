import React from 'react';
import { motion } from 'framer-motion';

const academicProjects = [
  {
    title: 'Handloom Materials Business Digital Site Product Management',
    period: 'Feb 2024 - April 2024',
    description: [
      'Led design and management of an AI-driven platform for the handloom saree industry.',
      'Implemented user-centric UI/UX strategies for online shopping.',
      'Collaborated with cross-functional teams to align project goals with market needs.',
      'Launched and optimized the platform, driving industry growth and user satisfaction.'
    ],
    tools: 'Craft.io, Figma, Miro, Jira'
  },
  {
    title: 'Digital Product Design Food Ordering Mobile Application',
    period: 'Feb 2024 - April 2024',
    description: [
      'Led digital product design for a student-focused restaurant app.',
      'Developed user personas and wireframes using Figma.',
      'Facilitated ideation workshops and usability testing.'
    ],
    tools: 'Craft.io, Figma, Miro, Jira'
  },
  {
    title: 'Professional Services: Marketing And Advertising Agency',
    period: 'Sept 2023 - Jan 2024',
    description: [
      'Analyzed service operations and workflow challenges in agencies.',
      'Used project management tools and AI for process optimization.',
      'Surveyed employees to identify pain points and best practices.'
    ],
    tools: 'Jira, Zoho CRM, Automation tools'
  },
  {
    title: 'Customer Relationship Manager Tool - Zoho',
    period: 'Sept 2023 - Jan 2024',
    description: [
      'Developed personalized workflows in Zoho CRM for customer management.',
      'Integrated Zoho Forms and Calendly for data collection and scheduling.',
      'Used Hotjar for website analytics and optimization.'
    ],
    tools: 'Zoho CRM, Zoho Form, Calendly, HotJar'
  }
];

const personalProjects = [
  {
    title: 'Magicspin – Recycling & Sustainability',
    period: 'Feb 2024 - April 2024',
    description: [
      'Focused on recycling textiles and sustainability initiatives.',
      'Collaborated with local vendors and managed social media.',
      'Currently developing the MVP for the project.'
    ],
    tools: 'Figma, Wordpress, Hotjar, Zoho Form, Zoho Projects, Zoho CRM'
  }
];

const Projects = () => (
  <section className="container mx-auto px-4 py-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-primary mb-4">Academic Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {academicProjects.map((proj, idx) => (
            <div key={idx} className="card">
              <h4 className="text-xl font-semibold">{proj.title}</h4>
              <span className="text-gray-500">{proj.period}</span>
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                {proj.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <div className="mt-2 text-sm text-primary font-semibold">Tools: {proj.tools}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-primary mb-4">Personal Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {personalProjects.map((proj, idx) => (
            <div key={idx} className="card">
              <h4 className="text-xl font-semibold">{proj.title}</h4>
              <span className="text-gray-500">{proj.period}</span>
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                {proj.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <div className="mt-2 text-sm text-primary font-semibold">Tools: {proj.tools}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default Projects;