import React, { useState } from "react";
import gaxaly from "./assets/gaxaly.jpg";
import Footer from "./Footer";



function Grammar() {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [stats, setStats] = useState({
    corrections: 0,
    wordCount: 0,
    characterCount: 0
  });

  const checkGrammar = () => {
    let corrections = 0;
    let result = text;

    result = result.replace(/\bi\b/g, (match) => {
      corrections += match === 'i' ? 1 : 0;
      return 'I';
    });

    result = result.replace(/([.!?]\s+)([a-z])/g, (match, p1, p2) => {
      corrections += 1;
      return p1 + p2.toUpperCase();
    });

    result = result.replace(/\s+/g, ' ').trim();

    if (result.length > 0 && result[0] !== result[0].toUpperCase()) {
      corrections += 1;
      result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    result = result.replace(/,(\S)/g, ', $1');

    const wordCount = result.trim() === '' ? 0 : result.trim().split(/\s+/).length;
    const characterCount = result.length;

    setCorrectedText(result);
    setStats({
      corrections,
      wordCount,
      characterCount
    });
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-cyan-400 drop-shadow">🧠 Neuroverse</h1>
          <p className="text-lg text-gray-300 mt-2">AI-powered grammar correction — all in your browser</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Grammar Checker */}
          <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-2xl transition-all hover:shadow-cyan-500/20">
            <h2 className="text-xl font-semibold mb-2 text-cyan-300">Grammar Checker</h2>
            <textarea
              className="w-full h-48 p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
              placeholder="Paste your text here for grammar checking..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
              onClick={checkGrammar}
              className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md w-full transition-colors font-medium"
            >
              Check Grammar
            </button>

            {correctedText && (
              <div className="mt-6">
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="bg-cyan-900/50 px-3 py-1 rounded-full">{stats.corrections} corrections</div>
                  <div className="bg-cyan-800/50 px-3 py-1 rounded-full">{stats.wordCount} words</div>
                  <div className="bg-cyan-700/50 px-3 py-1 rounded-full">{stats.characterCount} chars</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-md border border-gray-700">
                  <h3 className="font-semibold mb-2 text-cyan-300">Corrected Text:</h3>
                  <p className="text-gray-100 whitespace-pre-wrap">{correctedText}</p>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-cyan-300">How It Works</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Corrects lowercase 'i' to 'I'</li>
              <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Capitalizes sentences after punctuation</li>
              <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Fixes missing spaces after commas</li>
              <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Removes extra spaces between words</li>
              <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Capitalizes the first letter of your text</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <h3 className="font-medium mb-2 text-cyan-300">Limitations</h3>
              <p className="text-sm text-gray-500">
                This is a basic grammar checker that runs entirely in your browser.
                For advanced grammar checking, consider using professional tools.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Neuroverse | Made with ❤️
        </footer>
      </div>
    </div>
    <Footer/>
          </>
  );
}

export default Grammar;
