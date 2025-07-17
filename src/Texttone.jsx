import React, { useState } from "react";
import { Link } from "react-router-dom";
import gaxaly from "./assets/gaxaly.jpg";
import Footer from "./Footer";


const positiveWords = [
  "good", "happy", "great", "excellent", "awesome", "fantastic",
  "love", "nice", "wonderful", "amazing", "joy", "pleased"
];

const negativeWords = [
  "bad", "sad", "terrible", "horrible", "awful", "hate",
  "worst", "angry", "disgusting", "annoyed", "upset", "mad"
];

function Texttone() {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("");

  const detectTone = (input) => {
    const words = input.toLowerCase().split(/\s+/);
    let pos = 0, neg = 0;

    words.forEach((word) => {
      if (positiveWords.includes(word)) pos++;
      if (negativeWords.includes(word)) neg++;
    });

    if (pos > neg) return "Positive 😊";
    if (neg > pos) return "Negative 😞";
    if (input.trim() === "") return "";
    return "Neutral 😐";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setTone(detectTone(value));
  };

  return (
    <>
      <div
        className="min-h-screen relative text-white p-6 overflow-hidden"
        style={{
          backgroundImage: `url(${gaxaly})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay Blur */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0" />

        {/* Animated Glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto max-w-3xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-cyan-400 drop-shadow">
              🎭 Text Tone Detector
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              Detect the emotional tone of your text instantly
            </p>

            {/* Link added here */}
            <Link
              to="/tools"
              className="text-cyan-400 hover:underline mt-4 inline-block"
            >
              ← Back to Tools
            </Link>
          </header>

          <section className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-2xl transition-all hover:shadow-cyan-500/20">
            <textarea
              rows="6"
              className="w-full p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition resize-none"
              placeholder="Type your text here..."
              value={text}
              onChange={handleChange}
            />

            {tone && (
              <div className="mt-6 text-center text-lg font-semibold text-cyan-300">
                Detected Tone: <span className="text-white">{tone}</span>
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Texttone;
