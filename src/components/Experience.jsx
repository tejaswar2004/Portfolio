import React from 'react';
import SectionTitle from './SectionTitle';
import { FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Development Engineer in Test (SDET) – Full-Time",
    organization: "Jivox Software Pvt Ltd",
    duration: "Oct 2025 – Present",
    points: [
      "Working on automation and validation of campaign creation, tag generation, and TTD DSP integrations in Davinci.",
      "Enhancing test frameworks using Selenium, Cucumber (BDD), and Page Object Model (POM).",
      "Collaborating with cross-functional teams to ensure feature reliability and seamless DSP integration.",
      "Performing regression and sanity testing to maintain high product quality in production releases."
    ],
    icon: <FaBriefcase className="text-accent-1 w-5 h-5" />,
  },
  {
    role: "Software Development Engineer in Test (SDET) – Intern",
    organization: "Jivox Software Pvt Ltd",
    duration: "Oct 2024 – Sep 2025",
    points: [
      "Worked on end-to-end testing of The Trade Desk (TTD) and A-DSP campaign setup automation.",
      "Tested and validated GEN-AI transformation flows, creative variant previews, and tag generation.",
      "Raised and verified 20+ valid bugs ensuring no critical issues reached production.",
      "Contributed to the automation of Media Channel Settings and Feed Campaign flows.",
      "Collaborated with developers and QA teams for feature enhancements and faster issue resolution."
    ],
    icon: <FaLaptopCode className="text-accent-1 w-5 h-5" />,
  },
];

const experienceItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="experience-title">Experience</SectionTitle>

        <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16">
          {/* Vertical timeline line */}
          <div className="absolute left-[calc(1rem-0.5px)] sm:left-[calc(1.25rem-0.5px)] top-0 h-full w-0.5 bg-primary-bg rounded-full"></div>

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 flex"
              custom={index}
              variants={experienceItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-secondary-bg rounded-full border-2 border-accent-1 flex items-center justify-center mr-4 sm:mr-6 relative z-10">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-grow p-4 sm:p-6 bg-primary-bg rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2">
                  <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-accent-1 font-mono">{item.role}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary/80 font-mono mt-1 sm:mt-0">{item.duration}</p>
                </div>
                <p className="text-sm sm:text-md text-accent-2/90 font-semibold mb-2 sm:mb-3">{item.organization}</p>
                
                <ul className="list-disc list-inside space-y-1.5 text-text-secondary pl-1">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-xs sm:text-sm leading-relaxed sm:leading-normal">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
