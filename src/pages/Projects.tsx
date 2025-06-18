import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Content Detector',
    description: 'Our AI Content Detector prototype uses a hybrid algorithm of Hashing, Trie, Heap, and Dynamic Programming (Edit Distance). It analyzes smaller datasets, accurately identifying AI-generated content through multiple algorithmic signals. API detects AI-generated content from JSON-formatted text input. It analyzes the text using its algorithm and returns a structured response with an AI-generation verdict and a confidence score.',
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg',
    technologies: ['Python', 'DSA', 'DAA', 'NLP', 'React', 'Typescript'],
    github: 'https://github.com/AtharvGangwar48/AI_Content_Detector_Backend',
    demo: 'https://ai-generated-content-eta.vercel.app/',
  },
  {
    title: 'Smart Data Preprocessor',
    description: 'A java based web application that stores data in MongoDB database after preprocessing your data(As per your requirements). We successfully implemented the file upload feature, allowing users to upload CSV files for preprocessing. The parsing and data cleaning processes were developed, ensuring that users can effectively prepare their data for analysis.',
    image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg',
    technologies: ['JAVA', 'SpringBoot', 'JavaFX', 'Apache Commons CSV', 'HTML', 'MongoDB'],
    github: 'https://github.com/AtharvGangwar48/Smart_Preprocessor',
    demo: 'https://github.com/AtharvGangwar48/Smart_Preprocessor/blob/main/README.md',
  },
  {
    title: 'SUART : Question-Answering System works NLP and TF-IDF Similarity',
    description: 'This project develops a Flask-based question-answering system using Natural Language Processing (NLP) to generate intelligent responses. By applying techniques like tokenization, lemmatization, and vectorization, the system processes user queries and compares them with a preloaded text corpus. It uses TF-IDF and cosine similarity to identify relevant answers, providing accurate, context-aware responses. The system is designed for practical use in automated customer service, knowledge management, and education, showcasing how Flask and NLP can be combined for real-world problem-solving.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'Natural Language Tool Kit (NLTK)', 'HTML', 'CSS'],
    github: 'https://github.com/AtharvGangwar48/Suart-Basic',
    demo: 'https://github.com/AtharvGangwar48/Suart-Basic/blob/main/ReasearchPaper.pdf',
  },
  {
    title: 'BookIT-by-atharv',
    description: 'This project is a custom-built Airbnb clone, developed to showcase my web development skills. The backend is powered by MongoDB, Express, and Node.js, with version control managed through Git and GitHub. I deployed the application on Render, ensuring all APIs follow RESTful principles and support full CRUD functionality. The project is structured using the MVC (Model-View-Controller) design pattern for organized and maintainable code.',
    image: 'https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaScript', 'NodeJS', 'EJS', 'MongoDB', 'Express'],
    github: 'https://github.com/AtharvGangwar48/BookIT-by-Atharv',
    demo: 'https://bookit-by-atharv.onrender.com/listings',
  },
  {
    title: 'RICO TRADE : A clone application of Zerodha & Kite',
    description: 'RicoTrade is a feature-rich trading platform inspired by Zerodha, replicating Kite for a hands-on experience in trading functionalities. Built with React and Vite.js, the project uses Material UI, Bootstrap, and FontAwesome for UI, and Chart.js for dynamic charts. Note: It’s not responsive, so use a large screen. Hosted on Render with GitHub for version control, this project gave me valuable experience in full-stack deployment, UI/UX design, and real-world development workflows.',
    image: 'https://images.pexels.com/photos/5833756/pexels-photo-5833756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Node', 'Vite', 'MongoDB', 'Material UI', 'Chart.js'],
    github: 'https://github.com/AtharvGangwar48/RicoTrade-Frontend',
    demo: 'https://ricotrade.onrender.com/',
  },
];

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Here are some of the personal projects I've worked on. Each project showcases my skills and technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code for ${project.title}`}
                    className="inline-flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo for ${project.title}`}
                    className="inline-flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={project.image}
                    alt={`${project.title} Image`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
