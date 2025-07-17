import React, { useState } from 'react';
import Footer from "./Footer";

 import gaxaly from "./assets/gaxaly.jpg";


function Textsumm() {
  const [article, setArticle] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const summarizeText = (text) => {
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    const sentences = cleanedText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length <= 2) return cleanedText;
    const importantSentences = [
      sentences[0],
      sentences[Math.floor(sentences.length / 2)],
      sentences[sentences.length - 1],
    ].filter(Boolean);
    return importantSentences
      .map(s => s.trim() + (s.endsWith('.') ? '' : '.'))
      .join(' ');
  };

  const handleSummarize = async () => {
    if (!article.trim()) {
      setError('Please enter some text to summarize.');
      return;
    }

    setLoading(true);
    setError('');
    setSummary('');

    setTimeout(() => {
      try {
        const result = summarizeText(article);
        setSummary(result || "Could not generate summary");
      } catch (err) {
        setError('Error generating summary');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  return (
    <>
    <div
      className="min-h-screen relative px-4 py-8 text-gray-300 flex justify-center items-start"
      style={{
        backgroundImage: `url(${gaxaly})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0" />


      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full bg-gray-900/90 border border-gray-800 p-8 rounded-2xl shadow-lg mt-16 hover:scale-[1.01] transition-transform duration-500 ease-in-out">
        <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400">
          🚀 AI Text Summarizer (Free)
        </h1>

        <textarea
          className="w-full h-48 p-4 text-lg bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4 text-white resize-none placeholder-gray-400"
          placeholder="Paste your article, essay, or paragraph here..."
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        />

        <button
          className="w-full bg-cyan-500 text-white text-lg font-medium py-3 rounded-lg hover:bg-cyan-600 transition disabled:opacity-50"
          onClick={handleSummarize}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : 'Summarize Text'}
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-800 bg-opacity-20 rounded-lg text-red-400 text-center">
            {error}
          </div>
        )}

        {summary && (
          <div className="mt-8 transition-all duration-500 ease-in-out">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3">📝 Summary:</h2>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-gray-100 leading-relaxed">
              {summary}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Summary generated from {article.split(' ').length} words to {summary.split(' ').length} words.
            </p>
          </div>
        )}
      </div>
    </div>
    <Footer/>
          </>
  );
}

export default Textsumm
