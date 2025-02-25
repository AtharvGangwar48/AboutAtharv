import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const personalInfo = {
    name: "Your Name",
    title: "Full Stack Developer",
    email: "your.email@example.com",
    location: "City, Country",
    about: "A passionate full-stack developer with X years of experience in building web applications. I specialize in React, Node.js, and cloud technologies.",
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "University Name",
        year: "2018-2022",
        description: "Graduated with honors, specialized in web technologies and distributed systems."
      }
    ],
    experience: [
      {
        title: "Senior Developer",
        company: "Company Name",
        period: "2022-Present",
        description: "Leading development of enterprise web applications using React and Node.js."
      }
    ]
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume file URL
    const resumeUrl = '/path/to/your/resume.pdf';
    window.open(resumeUrl, '_blank');
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
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
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Briefcase size={24} className="text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          </div>
          {personalInfo.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.period}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-8 mb-16"
      >
        <div className="flex items-center mb-6">
          <Award size={24} className="text-indigo-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Project</h2>
        </div>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src="https://your-project-url.com"
            className="w-full h-[400px] rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-600 mb-4">
          A brief description of your featured project and the technologies used to build it.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          View More Projects <ArrowRight size={16} className="ml-2" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;