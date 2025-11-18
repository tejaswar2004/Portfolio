import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDownloadCV = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(personalInfo.resumeLink);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // Extract filename from resumeLink path
      const filename = personalInfo.resumeLink.split('/').pop();
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback to direct link if fetch fails
      window.open(personalInfo.resumeLink, '_blank');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-secondary-bg shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-mono text-accent-1 cursor-pointer hover:opacity-80 transition-opacity"
        >
          {personalInfo.name}
          {/* <span className="text-text-primary">.</span> */}
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70} // Adjust offset based on navbar height
              className="text-text-secondary hover:text-accent-1 font-mono transition-colors cursor-pointer"
              activeClass="text-accent-1"
              spy={true}
            >
              {item.name}
            </ScrollLink>
          ))}
          <button
            onClick={handleDownloadCV}
            className="px-4 py-2 font-mono border-2 border-accent-1 text-accent-1 rounded hover:bg-accent-1 hover:text-primary-bg transition-all duration-300"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent-1 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-secondary-bg mt-2 py-2"
        >
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="block px-4 py-3 text-text-secondary hover:text-accent-1 hover:bg-primary-bg font-mono transition-colors cursor-pointer"
              activeClass="text-accent-1 bg-primary-bg"
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
          <button
            onClick={(e) => {
              handleDownloadCV(e);
              setIsOpen(false);
            }}
            className="block text-center mt-2 mx-4 px-4 py-3 font-mono border-2 border-accent-1 text-accent-1 rounded hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 w-full"
          >
            Resume
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;