import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 mb-6">
          Hey there! I'm M N Bhanu Teja Sharma, a passionate Computer Science student on a journey to become a skilled Software Engineer. Whether it's crafting sleek web applications, solving real-world problems with Machine Learning, or diving deep into the world of Software Development, I'm all about learning, building, and growing.

I love turning ideas into interactive experiences using modern web technologies, and I'm constantly exploring new tools to level up my skills. My goal? To join a forward-thinking team where I can contribute, innovate, and make an impact.

If you're into creativity, clean code, or just want to collaborate on something cool — let's connect!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/teja272004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tejasharma41/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="/pp.jpg"
            alt="BhanuTeja"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;