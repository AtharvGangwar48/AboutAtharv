import { motion } from 'framer-motion';
import {  Download,  GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const personalInfo = {
    name: "Atharv Gangwar",
    title: "Full Stack Developer | AI & ML Enthusiast",
    about: "B.Tech student specializing in AI & ML with a strong foundation in web development and programming. Passionate about building scalable applications and full-stack development.",
    education: [
      {
        degree: "B.Tech in Computer Science (AI & ML)",
        institution: "Graphic Era Hill University, Dehradun",
        year: "Expected: July 2027",
        description: "Specializing in Artificial Intelligence and Machine Learning with a focus on web technologies."
      },
      {
        degree: "Class XII (CBSE)",
        institution: "J.P.M. Public School, Bareilly",
        year: "2023",
        description: "Completed higher secondary education with a focus on science and mathematics."
      },
      {
        degree: "Class X (CBSE)",
        institution: "Delhi Public School, Bareilly",
        year: "2021",
        description: "Completed secondary education with distinction."
      }
    ]
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/AtharvGangwarResume.pdf'; // Ensure the file is in the public directory
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'AtharvGangwarResume.pdf'; // Force download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">{personalInfo.name}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {personalInfo.about}
        </p>
        <button
          onClick={handleDownloadResume}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mb-12"
        >
          Download Resume
          <Download size={20} className="ml-2" />
        </button>
      </motion.div>

      <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/pic1.jpeg" alt="Project Image 1" className="w-full h-64 object-cover rounded-lg" />
          <img src="/images/pic2.jpeg" alt="Project Image 2" className="w-full h-64 object-cover rounded-lg" />
          <img src="/images/pic3.jpeg" alt="Project Image 3" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </motion.div>


      <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <div className="flex items-center mb-6">
          <GraduationCap size={24} className="text-indigo-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        </div>
        {personalInfo.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500 text-sm">{edu.year}</p>
            <p className="text-gray-600 mt-2">{edu.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Bio</h2>
        <p className="text-lg text-gray-700 mb-6">I am originally from Bareilly, have lived in Kota, and am currently based in Dehradun while pursuing a B.Tech in Computer Science. I have a strong passion for learning emerging technologies, with hands-on experience in JavaScript development and MongoDB. Through multiple projects, I have honed my skills in full-stack development and scalable application design.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center flex flex-wrap justify-center gap-4"
      >
        <Link to="/skills" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          See Tech Skills
        </Link>
        <Link to="/projects" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          See Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
