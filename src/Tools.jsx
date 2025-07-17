import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


import Video from "./Video";

const tools = [
  {
    title: "Text Summarizer",
    description: "Summarize long articles into concise bullet points for quick understanding.",
    emoji: "📝",
  },
  {
    title: "Grammar Checker",
    description: "Automatically detect and correct grammar, punctuation, and spelling errors.",
    emoji: "✅",
  },
  {
    title: "Paraphraser",
    description: "Rephrase your sentences while preserving meaning to enhance clarity and originality.",
    emoji: "🔁",
  },
  {
    title: "Word Counter",
    description: "Count words, characters, and estimate reading time efficiently.",
    emoji: "🔢",
  },
  {
    title: "Read Time Estimator",
    description: "Predict how long it will take an average reader to finish your content.",
    emoji: "⏱️",
  },
  {
    title: "Tone Detector",
    description: "Analyze the emotional tone of your text: formal, informal, positive, or critical.",
    emoji: "🎭",
  },
];

const paths = [
  "/tools/summarizer",
  "/tools/grammar",
  "/tools/paraphraser",
  "/tools/counter",
  "/tools/read-time",
  "/tools/tone",
];

const Tools = () => {
  return (
    <>
      <section className="p-10 bg-gray-900 text-white min-h-screen">
        <h2 className="text-3xl mt-8 font-semibold">🧰 Explore Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-9 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link
              key={tool.title}
              to={paths[index]}
              className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer block"
              title={tool.title}
            >
              <div className="text-4xl mb-2">{tool.emoji}</div>
              <h3 className="text-xl font-bold mb-1">{tool.title}</h3>
              <p className="text-sm text-gray-300">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Video/>
      <Footer />
    </>
  );
};

export default Tools;
