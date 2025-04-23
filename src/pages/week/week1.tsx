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
          src="https://drive.google.com/file/d/1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy/preview"
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
      <br />
      <hr />
      <br />
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Activities to demonstrate working of Left brain & Right brain:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Activity 1: Opposite Actions Game</strong><br />In this activity, we followed instructions from the facilitator—but with a twist. When they said “stand,” we had to sit. When they said “sit,” we had to stand. If they said “clap,” we had to respond by saying our name. This exercise helped us break away from automatic thinking and required us to consciously process information before reacting. It highlighted how our brain processes commands and how difficult it can be to override our natural instincts.</li>
          <li><strong>Activity 2: Word Association</strong><br />This activity involved quick thinking and creativity. One person said a word, and the next person had just five seconds to say a new word that was somehow related to the previous one. This chain continued around the group. The exercise demonstrated how the brain makes connections, encouraging both logical associations (left brain) and imaginative links (right brain).</li>
          <li><strong>Activity 3: Unusual Uses for a Pencil</strong><br />Here, we were asked to think of different ways to use a pencil—beyond just writing. From using it as a hair accessory to a mini drumstick, this activity pushed us to be creative and think outside the box. It primarily engaged the right brain, which is responsible for imagination, innovation, and abstract thinking.</li>
        </ul>
      </div>
    </div>
  );
}

export default Week1;
