import { useState } from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap } from "lucide-react";

function Home() {
  const [submitted, setSubmitted] = useState(false);

  const personalInfo = {
    education: [
      {
        degree: "B.Tech in Computer Science (AI & ML)",
        institution: "Graphic Era Hill University, Dehradun",
        year: "Expected: July 2027",
        description: "Specializing in AI & ML with a focus on full-stack development.",
      },
      {
        degree: "Class XII (CBSE)",
        institution: "J.P.M. Public School, Bareilly",
        year: "2023",
        description: "Completed higher secondary education with a focus on science and mathematics.",
      },
      {
        degree: "Class X (CBSE)",
        institution: "Delhi Public School, Bareilly",
        year: "2021",
        description: "Completed secondary education with distinction.",
      },
    ],
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
          Hi, I'm <span className="text-indigo-600">Atharv Gangwar</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        B.Tech student specializing in AI & ML with a strong foundation in web development and programming. Passionate about building scalable applications and full-stack development.
        </p>
      </motion.div>

      {/* Gallery Section */}
      <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/pic1.jpeg" alt="Project Image 1" className="w-full h-64 object-cover rounded-lg" />
          <img src="/images/pic2.jpeg" alt="Project Image 2" className="w-full h-64 object-cover rounded-lg" />
          <img src="/images/pic3.jpeg" alt="Project Image 3" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </motion.div>

      {/* Bio Section */}
      <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Bio</h2>
        <p className="text-lg text-gray-700">
          I am deeply committed to continuous learning and self-improvement, constantly seeking to expand my expertise in emerging technologies and new skills. I thrive on applying this knowledge to tackle real-world challenges, with a strong focus on innovation and problem-solving. My goal is to make a meaningful impact by leveraging my abilities to contribute to practical solutions in diverse fields.
        </p>
      </motion.div>

      {/* Education Section */}
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

      {/* Resume Request Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Download My Resume</h2>
        <p className="text-gray-600 mb-4">Enter your details to receive the resume.</p>

        {!submitted ? (
          <form
            action="https://formsubmit.co/atharvgangwar8@gmail.com"
            method="POST"
            className="space-y-4"
            onSubmit={() => setSubmitted(true)}
          >
            {/* Hidden Inputs for FormSubmit */}
            <input type="hidden" name="_subject" value="New Resume Download Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <button
              type="submit"
              className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium w-full"
            >
              Request Resume <Download size={20} className="ml-2 inline" />
            </button>
          </form>
        ) : (
          <div>
            <p className="text-green-600 font-semibold mb-4">
              ✅ Thank you! Your details have been submitted.
            </p>
            <a
              href="/AtharvGangwarResume.pdf"
              download
              className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium inline-flex items-center"
            >
              Download Resume <Download size={20} className="ml-2 inline" />
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Home;
