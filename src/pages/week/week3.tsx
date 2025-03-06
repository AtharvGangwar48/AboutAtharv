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
          Week 3: Sell your Vision
        </h1>
        <p className="text-lg text-gray-600">
          We took part in an activity that required us to work together as a team, devise a strategy, and present a product to an audience—all within a 20-minute timeframe.
        </p>
      </motion.div>

      {/* Video Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Session Video:
        </h2>
        <iframe
          className="w-full h-64 sm:h-80 rounded-lg shadow-md"
          src="https://drive.google.com/file/d/14UZRNEP0cZkG7r_PsZKDBqqiMVhIKeub/preview"
          title="Emotional Intelligence Session"
          allowFullScreen
        ></iframe>
      </div>

      {/* PPT Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Presentation Slides:
        </h2>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS2x2bpoAm3EwMjdPjW3HYYL39r3wGwlkPcAYco47140OX8JpXprhLH_AqUSkinkg/embed?start=false&loop=false&delayms=3000" width="780" height="300"></iframe>
        <p className="mt-4 text-indigo-600 text-center">
          <a 
            href="https://docs.google.com/presentation/d/1dDOPpNwo0Qq3pyQ8Oayu8I4XzZU7GLZi/edit?usp=sharing&ouid=116156010022272725855&rtpof=true&sd=true" 
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
          We participated in an activity where we had to:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Collaboratively form a team</li>
          <li>Strategize</li>
          <li>Present a product to an audience within a 20-minute timeframe</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Key points:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>It was a challenging task.</li>
          <li>Not all team members were confident.</li>
          <li>The initial start was not good.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Key Takeaways:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Team collaboration and clear communication are crucial under pressure.</li>
          <li>Confidence can be built through preparation and support from teammates.</li>
          <li>Time management is essential when working with tight deadlines.</li>
          <li>Flexibility and adaptability are key when things don't go as planned.</li>
        </ul>
      </div>
    </div>
  );
}

export default Week3;
