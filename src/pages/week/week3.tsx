import { motion } from "framer-motion";

function Week3() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Week 3: Emotional Intelligence in Professional Growth
        </h1>
        <p className="text-lg text-gray-600">
          This session focused on understanding emotional intelligence and its impact on workplace success.
        </p>
      </motion.div>

      {/* Video Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Session Video:
        </h2>
        <iframe
          className="w-full h-64 sm:h-80 rounded-lg shadow-md"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Emotional Intelligence Session"
          allowFullScreen
        ></iframe>
      </div>

      {/* PPT Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Presentation Slides:
        </h2>
        <iframe
          className="w-full h-96 rounded-lg shadow-md"
          src="https://drive.google.com/file/d/YOUR_PPT_ID/preview"
          title="Emotional Intelligence Presentation"
          allow="autoplay"
        ></iframe>
        <p className="mt-4 text-indigo-600 text-center">
          <a 
            href="https://drive.google.com/file/d/YOUR_PPT_ID/view" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            Open Full Presentation
          </a>
        </p>
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

export default Week3;
