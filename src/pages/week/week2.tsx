import { motion } from "framer-motion";

function Week2() {
  const videos = [
    { id: "VIDEO_ID_1", title: "Question 1: Tell me about yourself" },
    { id: "VIDEO_ID_2", title: "Question 2: Why should we hire you?" },
    { id: "VIDEO_ID_3", title: "Question 3: What are your strengths and weaknesses?" },
    { id: "VIDEO_ID_4", title: "Question 4: Where do you see yourself in 5 years?" },
    { id: "VIDEO_ID_5", title: "Question 5: Describe a challenging situation and how you handled it." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Week 2: Answering Common Interview Questions
        </h1>
        <p className="text-lg text-gray-600">
          This week, I recorded responses to five key interview questions to practice and refine my answers.
        </p>
      </motion.div>

      <div className="space-y-8">
        {videos.map((video, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{video.title}</h2>
            <iframe
              className="w-full h-64 sm:h-80 rounded-lg shadow-md"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Week2;
