import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
  ];

  const email = 'mnbtsharma@gmail.com';
  const subject = 'Contact from Your Portfolio';
  const body = 'Hi, I\'d like to get in touch with you!';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.h1 
            className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            M N Bhanu Teja Sharma
          </motion.h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map(item => (
              <a 
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href={mailtoLink}
              className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
              <FaEnvelope className="text-sm" /> Contact Me
            </a>

            <button
              onClick={() => window.open('/bhanutejasarma.pdf', '_blank')}
              className="flex items-center gap-1 bg-gray-800 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-900 transition"
            >
              <FaDownload className="text-sm" /> Download CV
            </button>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none text-gray-700 hover:text-blue-600 transition"
            >
              <div className="space-y-1">
                <span className={`block h-0.5 w-6 bg-current transform transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={mailtoLink}
                className="flex items-center gap-2 text-blue-600 px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <FaEnvelope /> Contact Me
              </a>
              <button
                onClick={() => {
                  window.open('/bhanutejasarma.pdf', '_blank');
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <FaDownload /> Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
