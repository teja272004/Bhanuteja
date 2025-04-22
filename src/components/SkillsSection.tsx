import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const skills: string[] = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js',
    'C', 'C++', 'Python', 'Java',
    'Machine Learning', 'Deep Learning', 'Artificial Intelligence',
    'Power BI'
  ];

  return (
    <div id = "skills" className="skills-section container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card p-5 bg-white shadow-lg rounded-xl text-center text-blue-600 font-semibold text-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
