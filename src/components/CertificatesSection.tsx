import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Machine Learning (NPTEL, IIT Kharagpur)',
    score: '83%',
    link: 'https://drive.google.com/file/d/15P6_kDDUbJCV2vBIKuQOcMNMKzNwnEYw/view?usp=drive_link',
  },
  {
    title: 'Database Management Systems (NPTEL, IIT Kharagpur)',
    score: '70%',
    link: 'https://drive.google.com/file/d/1JiNZbFsdDqzy4Uya9Lxl4245TiqO7lVw/view?usp=sharing',
  },
  {
    title: 'Principles of Generative AI (Infosys SpringBoard)',
    link: 'https://drive.google.com/file/d/1ehvPwO8iVjU5Ud8nMoir4SYFU8mY8KZl/view?usp=sharing',
  },
  {
    title: 'Artificial Intelligence (Infosys SpringBoard)',
    link: 'https://drive.google.com/file/d/1ScapDQxHR9QmDiLu2wb_ageYFmZwPN4m/view?usp=sharing',
  },
];

const CertificatesSection: React.FC = () => {
  return (
    <div id = "certificates" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
            {cert.score && <p className="text-sm text-gray-600 mt-1">Score: {cert.score}</p>}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline text-sm font-medium"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
