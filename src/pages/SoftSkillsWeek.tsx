import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

function SoftSkillsWeek() {
  const { weekNumber } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Week {weekNumber} - Soft Skills Session</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Interview session and reflections from week {weekNumber} of the soft skills development program.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-8 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Interview Session</h2>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src={`https://your-video-url-for-week-${weekNumber}.com`}
            className="w-full h-[400px] rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Session Notes</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600">
            Add your session notes and reflections here for week {weekNumber}.
          </p>
          {/* Add more content as needed */}
        </div>
      </motion.div>
    </div>
  );
}

export default SoftSkillsWeek;