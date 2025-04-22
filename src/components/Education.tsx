const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">

          {/* B.Tech */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold">
              Prasad V. Potluri Siddhartha Institute Of Technology
            </h3>
            <p className="text-gray-600">Bachelor Of Technology (CSE - Data Science)</p>
            <p className="text-gray-500">Expected Graduation: 2026</p>
            <p className="mt-2 text-gray-700">
              I am currently pursuing a Bachelor's degree in Computer Science and Engineering (Data Science), with a strong academic record and a CGPA of 9.33.
              <br /><br />
              Over the course of my studies, I've explored a wide range of technical subjects that have helped me build a solid foundation in both software development and data science. Some of the key courses I've completed include:
              <ul className="list-disc list-inside my-2">
                <li>Data Structures and Algorithms</li>
                <li>Database Management Systems</li>
                <li>Operating Systems</li>
                <li>Machine Learning & Deep Learning</li>
                <li>Data Analytics</li>
                <li>Computer Networks</li>
                <li>Web Technologies</li>
                <li>Artificial Intelligence</li>
              </ul>
              These courses have given me valuable insights into real-world problem solving and system-level thinking. While I know that no one is perfect, I <strong>continuously strive to improve, learn from my mistakes</strong>, and grow with every project I take on.
              <br /><br />
              I’m passionate about technology, curious by nature, and always looking for ways to push myself beyond comfort zones. I believe that learning is a journey — not a destination — and I'm excited to keep evolving into the best version of myself as a future Software Engineer.
            </p>
          </div>

          {/* Intermediate */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold">NRI Junior College</h3>
            <p className="text-gray-600">Intermediate Education – MPC (Maths, Physics, Chemistry)</p>
            <p className="text-gray-500">Completed: 2022</p>
            <p className="mt-2 text-gray-700">
              Completed my Intermediate with a focus on Mathematics, Physics, and Chemistry. This phase laid the groundwork for my analytical thinking, logical reasoning, and problem-solving abilities that I now apply in my engineering studies.
            </p>
          </div>

          {/* 10th Standard */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold">GRR Surya EM High School</h3>
            <p className="text-gray-600">Secondary School Certificate (SSC)</p>
            <p className="text-gray-500">Completed: 2020</p>
            <p className="mt-2 text-gray-700">
              Completed my 10th standard with distinction. This is where my curiosity for computers and logical thinking first sparked, eventually guiding me toward a career in technology.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
