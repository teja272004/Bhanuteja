import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/CertificatesSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <AboutMe />
        <Education />
        <Projects />
        <Experience />
        <SkillsSection />
        <CertificatesSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;