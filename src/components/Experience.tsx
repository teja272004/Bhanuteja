const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold">Infosys SpringBoard</h3>
            <p className="text-gray-600">Intern</p>
            <p className="text-gray-500">Oct 2024 - Dec 2024</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>
                Collaboratively developed an <strong>'Anomaly Detection in Crowd'</strong> system as part of a team, leveraging advanced algorithms to identify irregular patterns in crowd behavior.
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1L016Mg6TUqx336_P7EtuB-AmETrE5-cr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  View Certificate →
                </a>
              </li>
            </ul>
          </div>
          {/* Add more experience items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
