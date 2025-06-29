import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Shriram Life Insurance',
    location: 'Hyderabad, India',
    title: 'Deputy Manager',
    period: 'Feb 2024 - Till date',
    details: [
      'Assessed chatbot and digital service improvements to enhance user interactions.',
      'Managed vendor onboarding, negotiations, and project timelines.',
      'Monitored updates, tracked productivity, and identified areas for improvement.',
      'Focused on continuous enhancement of customer experience.'
    ]
  },
  {
    company: 'Go Digital Now',
    location: 'Hyderabad, India',
    title: 'Business Development',
    period: 'May 2023 - Aug 2023',
    details: [
      'Generated new business leads and contributed to client base growth.',
      'Streamlined business processes for operational efficiency.',
      'Developed and presented business proposals.',
      'Mentored team members and organized brand events.'
    ]
  },
  {
    company: 'Algonox Technologies',
    location: '',
    title: 'Software Developer Intern',
    period: 'Feb 2021 - Nov 2022',
    details: [
      'Developed and implemented unattended bots to automate business processes.',
      'Tested, maintained, and managed bot performance.',
      'Created and executed comprehensive test cases for bot validation.'
    ]
  }
];

const skills = [
  { name: 'Project Management Tools', value: 'Jira, Project 360, Zoho Projects, Craft.io' },
  { name: 'Scripting Languages', value: 'C, Python' },
  { name: 'UX/UI Tools', value: 'Miro, Figma' },
  { name: 'RPA Certification', value: 'Automation Anywhere Advanced Level' },
  { name: 'Marketing Tools', value: 'Zoho CRM & Workflows' }
];

const Experience = () => (
  <section className="container mx-auto px-4 py-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Experience & Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="card">
                <h4 className="text-xl font-semibold">{exp.title} <span className="text-gray-500">({exp.period})</span></h4>
                <p className="text-primary font-semibold">{exp.company}</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Technical Skills</h3>
          <ul className="space-y-4">
            {skills.map((skill, idx) => (
              <li key={idx} className="card flex flex-col">
                <span className="font-semibold">{skill.name}:</span>
                <span className="text-gray-700">{skill.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Experience;