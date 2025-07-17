import React, { useState } from "react";
import gaxaly from "./assets/gaxaly.jpg";
import Footer from "./Footer";


function Readtime() {
  const [text, setText] = useState("");

  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const wordsPerMinute = 200;
  const readingTime = wordCount / wordsPerMinute;
  const minutes = Math.floor(readingTime);
  const seconds = Math.round((readingTime - minutes) * 60);

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
      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-cyan-400 drop-shadow">
            ⏱️ Reading Time Estimator
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Estimate how long it takes to read your text — all in your browser
          </p>
        </header>

        <section className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-2xl max-w-3xl mx-auto transition-all hover:shadow-cyan-500/20">
          <textarea
            className="w-full h-48 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition resize-none"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center text-gray-300">
            <div className="bg-cyan-900/50 px-6 py-4 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-cyan-300">Word Count</h3>
              <p className="text-3xl font-bold">{wordCount}</p>
            </div>
            <div className="bg-cyan-800/50 px-6 py-4 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-cyan-300">
                Estimated Reading Time
              </h3>
              <p className="text-3xl font-bold">
                {minutes} min {seconds} sec
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
          </>
  );
}

export default Readtime;
