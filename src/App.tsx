import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import SoftSkills from './pages/SoftSkills';
import SoftSkillsWeek from './pages/SoftSkillsWeek';
import SoftSkillsWeek1 from './pages/week/week1';
import SoftSkillsWeek2 from './pages/week/week2';
import SoftSkillsWeek3 from './pages/week/week3';
import SoftSkillsWeek4 from './pages/week/week4';
import SoftSkillsWeek5 from './pages/week/week5';
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
            <Route path="/softskills/week1" element={<SoftSkillsWeek1 />} />
            <Route path="/softskills/week2" element={<SoftSkillsWeek2 />} />
            <Route path="/softskills/week3" element={<SoftSkillsWeek3 />} />
            <Route path="/softskills/week4" element={<SoftSkillsWeek4 />} />
            <Route path="/softskills/week5" element={<SoftSkillsWeek5 />} />
            <Route path="/softskills/week:weekNumber" element={<SoftSkillsWeek />} />
            <Route path="*" element={<h1 className='text-center mt-10 text-xl'>Page Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
