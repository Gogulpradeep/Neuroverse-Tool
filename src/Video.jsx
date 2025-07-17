import React, { useRef, useState } from "react";
import backgroundVideo from "./assets/Un.mp4";
import Footer from "./Footer";


function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);

      setTimeout(() => {
        setIsJoined(true);
      }, 7000);
    }
  };

  return (
        <>
    <div className="relative px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src={backgroundVideo}
      
      />

      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
       <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
  Choose an affordable plan that’s packed with the best features for <strong>engaging your performance</strong>, <strong>creating customer loyalty</strong>, and <strong>driving sales</strong>.
</p>
</div>

      {/* Box Area */}
      <div className="mx-auto mt-16 flex justify-center">
        <div
          className={`rounded-3xl bg-gray-900 p-8 ring-1 ring-gray-900/10 sm:p-10 transform transition-all duration-[7000ms] ease-in 
            ${isPlaying ? "scale-110 rotate-1 shadow-2xl opacity-95" : "scale-100 rotate-0 shadow-md opacity-100"}
          `}
        >
          {isJoined ? (
            // Success Message (styled like pricing box)
            <>
              <h3 className="text-base font-semibold text-green-400">Success</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold text-white">🎉 Congrats!</span>
              </p>
              <p className="mt-6 text-base text-gray-300">
                You’ve now joined the <span className="text-indigo-400 font-semibold">Infinite of Intelligence</span>.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li className="flex gap-x-3">✔ Personalized dashboard access</li>
                <li className="flex gap-x-3">✔ AI-powered learning recommendations</li>
                <li className="flex gap-x-3">✔ Premium course unlock</li>
                <li className="flex gap-x-3">✔ Early feature access</li>
                <li className="flex gap-x-3">✔ Community support</li>
                <li className="flex gap-x-3">✔ And much more…</li>
              </ul>
              <p className="mt-8 text-center text-sm text-gray-400">
                Start exploring and make the most of your journey.
              </p>
            </>
          ) : (
            // Pricing Card
            <>
              <h3 className="text-base font-semibold text-indigo-400">Enterprise</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold text-white">$99</span>
                <span className="text-base text-gray-400">/month</span>
              </p>
              <p className="mt-6 text-base text-gray-300">
                Dedicated support and infrastructure for your company.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li className="flex gap-x-3">✔ Unlimited products</li>
                <li className="flex gap-x-3">✔ Unlimited subscribers</li>
                <li className="flex gap-x-3">✔ Advanced analytics</li>
                <li className="flex gap-x-3">✔ Dedicated support representative</li>
                <li className="flex gap-x-3">✔ Marketing automations</li>
                <li className="flex gap-x-3">✔ Custom integrations</li>
              </ul>
              <button
                onClick={handlePlayVideo}
                className="mt-8 block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-indigo-500 sm:mt-10"
              >
                Get started today
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    <Footer/>
          </>
  );
}

export default Video;
