import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Video, ArrowRight } from 'lucide-react';

function SoftSkills() {
  const weeks = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Soft Skills Development</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Track my journey in developing essential soft skills through weekly interview sessions and reflections.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {weeks.map((week) => (
          <motion.div
            key={week}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: week * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <Video className="text-indigo-600 mr-3" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Week {week}</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Interview session and reflection for week {week} of the soft skills development program.
            </p>
            <Link
              to={`/softskills/week${week}`}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              View Session <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SoftSkills;