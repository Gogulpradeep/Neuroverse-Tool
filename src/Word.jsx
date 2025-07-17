import React, { useState } from "react";
import gaxaly from "./assets/gaxaly.jpg";
import Footer from "./Footer";

function Word() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = (text.match(/[^\.!\?]+[\.!\?]+/g) || []).length;

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
            🧠 Neuroverse
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            AI-powered text statistics — all in your browser
          </p>
        </header>

        <section className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-2xl transition-all hover:shadow-cyan-500/20 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-cyan-300">Word Counter</h2>
          <textarea
            className="w-full h-40 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center">
            <div className="bg-cyan-900/50 px-6 py-4 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-cyan-300">Words</h3>
              <p className="text-3xl font-bold">{wordCount}</p>
            </div>
            <div className="bg-cyan-800/50 px-6 py-4 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-cyan-300">Characters</h3>
              <p className="text-3xl font-bold">{charCount}</p>
            </div>
            <div className="bg-cyan-700/50 px-6 py-4 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-cyan-300">Sentences</h3>
              <p className="text-3xl font-bold">{sentenceCount}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
          </>
  );
}

export default Word;
