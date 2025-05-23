import React from "react";

function Week6() {
  const gdData = {
    title: "Do's and Don'ts of a Group Discussion (GD)",
    doAndDonts: {
      do: [
        "Be prepared with knowledge about the topic.",
        "Listen carefully to others before contributing.",
        "Be respectful of others’ opinions and viewpoints.",
        "Speak clearly and confidently.",
        "Support your ideas with facts and examples.",
        "Encourage participation from all members.",
      ],
      dont: [
        "Interrupt others while they are speaking.",
        "Overpower the conversation or dominate the discussion.",
        "Use offensive or disrespectful language.",
        "Stick only to your point of view without considering others.",
        "Be unprepared or make vague statements.",
        "Engage in side conversations or distractions.",
      ],
    },
    typesOfGDs: [
      {
        name: "Topic-based GD",
        description:
          "A group discusses a specific topic, typically related to current events or societal issues.",
      },
      {
        name: "Case Study-based GD",
        description:
          "Participants solve a problem presented in the form of a case study.",
      },
      {
        name: "Debate-based GD",
        description:
          "Two opposing views are presented, and each group tries to convince the other.",
      },
      {
        name: "Role Play-based GD",
        description:
          "Participants take on specific roles and discuss a topic from their assigned perspectives.",
      },
    ],
    ideaGenerationTechniques: [
      {
        name: "Brainstorming",
        description:
          "A free-flowing session where participants suggest ideas without judgment.",
      },
      {
        name: "Mind Mapping",
        description:
          "Visual representation of ideas that helps organize thoughts and discover connections.",
      },
      {
        name: "SWOT Analysis",
        description:
          "Analyzing a topic or problem by evaluating its Strengths, Weaknesses, Opportunities, and Threats.",
      },
      {
        name: "Reverse Thinking",
        description:
          "Looking at the problem from an opposite or unconventional angle to find new ideas.",
      },
      {
        name: "Six Thinking Hats",
        description:
          "A method where each participant adopts one of six different perspectives to solve the problem.",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Group Discussion Tips and Techniques
      </h1>

      {/* Image Before Do's and Don'ts */}
      <div className="flex justify-center my-6">
        <img
          src="/images/Group_Discussion.jpg"
          alt="Group discussion"
          className="w-full max-w-lg rounded shadow"
        />
      </div>

      <section id="dos-donts" className="mt-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Do's and Don'ts of a GD
        </h2>
        <div className="flex space-x-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-green-600 mb-2">Do's</h3>
            <ul className="text-gray-700">
              {gdData.doAndDonts.do.map((item, index) => (
                <li key={index} className="mb-2">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-red-600 mb-2">Don'ts</h3>
            <ul className="text-gray-700">
              {gdData.doAndDonts.dont.map((item, index) => (
                <li key={index} className="mb-2">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="types-of-gds" className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Different Types of GDs
        </h2>
        <ul className="space-y-4">
          {gdData.typesOfGDs.map((gd, index) => (
            <li key={index}>
              <h3 className="text-xl font-semibold text-gray-900">
                {gd.name}
              </h3>
              <p className="text-gray-700">{gd.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="idea-generation" className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Idea Generation Techniques
        </h2>
        <ul className="space-y-4">
          {gdData.ideaGenerationTechniques.map((technique, index) => (
            <li key={index}>
              <h3 className="text-xl font-semibold text-gray-900">
                {technique.name}
              </h3>
              <p className="text-gray-700">{technique.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Week6;
