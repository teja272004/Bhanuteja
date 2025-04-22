const Projects = () => {
  const projects = [
    {
      title: "MERN Stack Chat Application",
      description:
        "Built a real-time messaging platform with AI-powered chat and user authentication. Integrated WebSockets for instant messaging and deployed on Render.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      link: "https://chatify-frontend-a1hh.onrender.com",
    },
    {
      title: "Handwritten Digit Prediction",
      description:
        "Developed a classification model for handwritten digits using preprocessing, feedforward layers, and activation functions. Implemented using ANN.",
      technologies: ["Python", "Artificial Neural Networks", "Matplotlib"],
      link: "https://github.com/teja272004/HandWrittenDigit",
    },
    {
      title: "Web Scraping for House Price Prediction",
      description:
        "Extracted real estate data from Makaan.com, cleaned and structured it, and built a regression model to predict house prices. Focused on data extraction, feature engineering, and evaluation.",
      technologies: ["Python", "BeautifulSoup", "scikit-learn"],
      link: "https://github.com/teja272004/HousePricePrediction",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
