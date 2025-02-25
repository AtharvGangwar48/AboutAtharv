import { motion } from "framer-motion";

function Week1() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Week 1: Introduction Video
        </h1>
        <p className="text-lg text-gray-600">
         It was an introductory session on career skills, where we were guided on how to present a professional self-introduction.
        </p>
      </motion.div>

      <div className="mb-8">
        <iframe
          className="w-full h-64 sm:h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Professional Self-Introduction"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Key Takeaways:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Understand the importance of a strong self-introduction.</li>
          <li>Learn key elements to include in a professional introduction.</li>
          <li>Practice delivering a confident and concise introduction.</li>
          <li>Gain insights on body language and tone for effective communication.</li>
        </ul>
      </div>
    </div>
  );
}

export default Week1;
