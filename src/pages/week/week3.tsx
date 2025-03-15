import { motion } from "framer-motion";
import { useState } from "react";

function Week2() {
  const videos = [
    { id: "1RTQDuH4A5fXeU2e7qcv7fiB3hBt5p2Tq", title: "Question 1: Tell your career objective." },
    { id: "1x_eoCMhX1jvgM0P9UtAf9p9apRbrW9b_", title: "Question 2: Why do you want to be an engineer? Elaborate reasons." },
    { id: "14BhYNpl05gbY3n072wm1ity7u-MtHF24", title: "Question 3: Tell about projects or internship you have done/are doing along with the learning." },
    { id: "1Zkmqia4q68tkRlyYFz-NmWUAjoznTe50", title: "Question 4: What would you consider a significant achievement in your life and why?" },
    { id: "15BAsRHT4bN-Jg_TIUlYyIvrzv0eUC8YP", title: "Question 5: Tell about a failure of yours which you consider to share. What have you learned from it?" },
    { id: "1w6J63m7tb-5bB81AsWEMhgJuLRbxlTBm", title: "Question 6: What are your strengths? Tell one or two instances where you have demonstrated your strengths." },
    { id: "1znLjja3fgtRaOYxa0UC9Rp6guVxEwwx3", title: "Question 7: Tell about your weaknesses. What are you doing to overcome your weaknesses?" },
    { id: "14SwM5wPm1ReACpXnaF_XzQcW8hLvu6_u", title: "Question 8: What is the most difficult moment that you have faced in your life so far? What qualities helped you to overcome the moment?" },
    { id: "19_YtS0UYiLIfSunTRr95zffryaus9j8M", title: "Question 9: Apart from academics, what else are you interested in?" },
    { id: "1HuCvquxaGN4o5zMN0LEgimIpIQXbgFkC", title: "Question 10: Give an example of an area, concept, or thing that you are absolutely passionate about." },
    { id: "1v8c-gpfWYQ3sJIEUNdP7O90E2158BmrI", title: "Question 11: Describe yourself as an individual in 5 lines." },
    { id: "1r4nRVCkqfJ0NBdrYJ37hk35IotgUcOyw", title: "Question 12: What kinds of people do you enjoy working with?" },
    { id: "1FWugknVwGOlhzU5xUDLxyIpDAypG-XoJ", title: "Question 13: What kinds of people do you not want to work with? What would you do if they became your senior in your dream job?" },
    { id: "1mPzBiTWPPhv_kHMUkAaYFDhUcHtdO2Q0", title: "Question 14: What do you expect from your first job? Prioritize and Tell in order." },
    { id: "1pt88DOKxxS5-SOHpe9CGsXaFwkDJurpU", title: "Question 15: In the past year, what have you been dissatisfied about in your performance?" },
    { id: "1cAnVHMQ7_0GxZKoVjK82yJhI_-RPxXgv", title: "Question 16: Rate yourself out of 5 in verbal communication. What are you doing to improve your communication skills?" },
    { id: "1_UM6W5oEjJcuBCB53rTvG7XeQcuu8LcQ", title: "Question 17: Who is your role model? What qualities of that person would you like to see in your personality and why?" },
    { id: "1y755_Tchkqt0eK1mweY6H-otI9SuNwfx", title: "Question 18: Tell a few lines about your friends. Do you think they help/may help you in achieving your goals? If yes, how? If no, why do you accompany them?" },
    { id: "1czh1hIlJT6UPuXrUL-al9hDlib5Sq2xG", title: "Question 19: Tell 3 leadership qualities. How many do you possess? Tell an instance where you have applied those qualities." },
    { id: "1KTNqL5-ThHEJMFbX4HzvbaUXLkNYBCac", title: "Question 20: So finally, tell us something more about yourself or introduce yourself." },
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
          This week, I recorded responses to Profiling Sheet interview questions to practice and refine my answers.
        </p>
      </motion.div>

      <div className="space-y-8">
        {videos.map((video, index) => {
          const [isPlaying, setIsPlaying] = useState(false);

          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{video.title}</h2>
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 active:scale-95 mb-4 transition duration-300 ease-in-out"
                >
                  <span className="text-lg font-semibold">Play Video</span>
                </button>
              ) : (
                <iframe
                  className="w-full h-64 sm:h-80 rounded-lg shadow-md"
                  src={`https://drive.google.com/file/d/${video.id}/preview`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Week2;
