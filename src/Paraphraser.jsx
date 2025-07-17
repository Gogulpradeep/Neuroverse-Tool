import React, { useState } from "react";
import gaxaly from "./assets/gaxaly.jpg";
import Footer from "./Footer";


const synonymMap = {
  quick: "fast",
  brown: "dark",
  fox: "animal",
  jumps: "leaps",
  lazy: "idle",
  dog: "canine",
  happy: "joyful",
  sad: "unhappy",
  good: "great",
};

const Paraphraser = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleParaphrase = () => {
    const words = inputText.split(" ");
    const paraphrasedWords = words.map((word) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
      const synonym = synonymMap[cleanWord];
      return synonym ? synonym : word;
    });
    setOutputText(paraphrasedWords.join(" "));
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
      <div className="relative z-10 max-w-7xl mx-auto max-w-3xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-cyan-400 drop-shadow">
            🔄 Paraphraser (Lite)
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Simple synonym replacement — all in your browser
          </p>
        </header>

        <section className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-2xl transition-all hover:shadow-cyan-500/20">
          <textarea
            className="w-full h-40 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition resize-none mb-4"
            placeholder="Enter your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            />
          <button
            onClick={handleParaphrase}
            className="w-full bg-cyan-500 hover:bg-cyan-600 rounded-md py-2 font-medium transition"
            >
            Paraphrase
          </button>

          {outputText && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-2 text-cyan-300">
                Output:
              </h2>
              <div className="p-4 bg-gray-800 rounded-md border border-gray-700 whitespace-pre-wrap text-gray-100 min-h-[80px]">
                {outputText}
              </div>
            </>
          )}
        </section>
      </div>

    </div>
        <Footer/>
          </>
    
    
  );
};

export default Paraphraser;
