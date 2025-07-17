import React from "react";
import Footer from "./Footer";


function Aboutus() {
  return (
        <>
    <section
      id="about"
      className="py-20 px-6 bg-gray-900 text-center animate-fade-in"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-cyan-300 transition duration-300 hover:text-white">
        About Neuroverse ✨
      </h2>

      {/* About Neuroverse Sub-section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-3xl font-bold mb-6 text-gray-200 transition duration-300 hover:text-cyan-300">
          Your Intelligent Productivity Partner
        </h3>
        <p className="text-gray-400 leading-relaxed text-lg mb-4">
          Neuroverse is your ultimate suite of <strong className="text-cyan-300">intelligent, offline-first tools</strong> engineered to revolutionize your productivity and ignite your creativity...
        </p>
        <p className="text-gray-400 leading-relaxed text-lg">
          Our mission is to help you <strong className="text-cyan-300">write better, faster, and with unwavering confidence</strong>, all without the hassle of accounts or the need for an internet connection.
        </p>
      </div>

      <hr className="border-gray-700 my-12 max-w-4xl mx-auto" />

      {/* Why Choose Neuroverse Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-3xl font-bold mb-8 text-gray-200 transition duration-300 hover:text-cyan-300">
          Why Choose Neuroverse? 🤔
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            {
              icon: "⚡",
              title: "Offline Powerhouse",
              text: "Say goodbye to internet dependency! All Neuroverse tools function flawlessly offline...",
            },
            {
              icon: "🔒",
              title: "Privacy-First Design",
              text: "We believe your work is your own. No accounts, no data sent anywhere — your data stays local.",
            },
            {
              icon: "🚀",
              title: "Boosted Productivity & Creativity",
              text: "Streamline your writing from idea to polish with smart assistance throughout.",
            },
            {
              icon: "✨",
              title: "Intuitive & User-Friendly",
              text: "Clean, elegant design that's easy to use — no tech skills required.",
            },
            {
              icon: "💰",
              title: "Cost-Effective Solution",
              text: "One-time purchase. No subscriptions. Premium productivity at your fingertips.",
              spanCols: true,
            },
          ].map(({ icon, title, text, spanCols }, i) => (
            <div
              key={i}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-700 ${
                spanCols ? "col-span-1 md:col-span-2" : ""
              }`}
            >
              <h4 className="text-xl font-semibold mb-3 text-cyan-300 transition duration-300 hover:text-white">
                {icon} {title}
              </h4>
              <p className="text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-700 my-12 max-w-4xl mx-auto" />

      {/* Our Quality & Commitment Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-3xl font-bold mb-8 text-gray-200 transition duration-300 hover:text-cyan-300">
          Our Quality & Commitment 💪
        </h3>
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          We are dedicated to providing <strong className="text-cyan-300">reliable, high-performing</strong> tools that make a real difference.
        </p>
        <ul className="text-left text-gray-400 space-y-4 text-lg">
          {[
            {
              label: "Robust Performance",
              desc: "Tested for speed and stability, even under heavy tasks.",
            },
            {
              label: "Continuous Improvement",
              desc: "Frequent updates and upgrades based on your feedback.",
            },
            {
              label: "User-Centric Development",
              desc: "Everything we build is for your writing and thinking success.",
            },
          ].map((item, idx) => (
            <li key={idx} className="flex items-start transition duration-300 hover:translate-x-1">
              <span className="text-cyan-300 mr-3 text-2xl">✓</span>
              <span>
                <strong className="text-white">{item.label}:</strong> {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-700 my-12 max-w-4xl mx-auto" />

      {/* Our Services Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-gray-200 transition duration-300 hover:text-cyan-300">
          Our Services 🛠️
        </h3>
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          Here's a glimpse into what Neuroverse offers:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { icon: "📝", title: "Intelligent Writing Aids" },
            { icon: "💡", title: "Content Generation & Brainstorming" },
            { icon: "📚", title: "Summarization & Simplification" },
            { icon: "🗂️", title: "Organization & Structuring Tools" },
            { icon: "🗣️", title: "Tone & Style Adjustment" },
            { icon: "🌍", title: "Multilingual Support (Future)" },
          ].map(({ icon, title }, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-700"
            >
              <h4 className="text-xl font-semibold mb-3 text-cyan-300 transition duration-300 hover:text-white">
                {icon} {title}
              </h4>
              <p className="text-gray-400">
                {/* Placeholder text — replace as needed */}
                Detailed features and descriptions for {title.toLowerCase()} go here.
              </p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 leading-relaxed text-lg mt-8">
          <strong className="text-cyan-300">And much more!</strong> Constant innovation is our promise.
        </p>
      </div>

      <p className="text-gray-500 mt-16 text-lg">
        Ready to unlock your full potential? Discover how Neuroverse can transform your creativity today!
      </p>
    </section>
    <Footer/>
          </>
  );
}

export default Aboutus;
