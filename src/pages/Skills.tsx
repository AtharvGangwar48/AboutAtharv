import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const skills = {
  languages: [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C', level: 80 },
    { name: 'Java', level: 70 },
  ],
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Vite.js', level: 75 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Material UI', level: 70 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'Flask', level: 65 },
  ],
  database: [
    { name: 'MongoDB', level: 90 },
    { name: 'MySQL', level: 75 },
  ],
  cloud: [
    { name: 'AWS', level: 70 },
    { name: 'GCP', level: 65 },
  ],
};

const certificates = [
  {
    name: "Google Cloud Platform (GCP)",
    issuer: "IIT Kharagpur (via NPTEL)",
    date: "2024",
    credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS131S55320001503947914",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFsQn59kCIxng/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714119741952?e=2147483647&v=beta&t=oenSgSdTHPiJsmu4Hhe1tKpt1jEwdSHTs_iwfiC-Bsc"
  },
  {
    name: "AWS Certification",
    issuer: "AWS Skillbuilder",
    date: "2025",
    credentialUrl: "https://drive.google.com/drive/folders/1CeuRq12iFRpUw8pBFP0OsScmvw0ENlyQ?usp=drive_link",
    image: "https://i.ytimg.com/vi/04wNw5N17hU/maxresdefault.jpg"
  },
  {
    name: "Full-Stack Web Development",
    issuer: "Apna College",
    date: "2024",
    credentialUrl: "https://www.apnacollege.in/certificate_v2/65f5884f347fff4fbf00b319/user/65390eeb7f0cfa5cea04ce23",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20231110115359/Roadmap-to-Mern-stack-developer-copy-(3).webp"
  }
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-indigo-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Technical skills and certifications based on my experience.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {Object.entries(skills).map(([category, skillset], index) => (
          <motion.div key={category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">{category}</h2>
            {skillset.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-16">
        <div className="flex items-center mb-8">
          <Award size={24} className="text-indigo-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Certificates & Licenses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={cert.image} alt={cert.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-2">Issued by {cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">Issued: {cert.date}</p>
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium">Verify Credential</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
