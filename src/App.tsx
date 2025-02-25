import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import SoftSkills from './pages/SoftSkills';
import SoftSkillsWeek from './pages/SoftSkillsWeek';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/softskills/overview" element={<SoftSkills />} />
            <Route path="/softskills/week:weekNumber" element={<SoftSkillsWeek />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;