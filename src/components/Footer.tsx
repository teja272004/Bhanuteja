import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold">© {year} M N Bhanu Teja Sharma</p>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </li>
        </motion.ul>

        {/* Socials */}
        <motion.div
          className="flex space-x-4 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/teja272004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tejasharma41/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mnbtsharma@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
