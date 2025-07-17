

import React from "react";
import gaxaly from "./assets/gaxaly.jpg";
import { Link } from "react-router-dom"; 
import Footer from "./Footer";


function Homepage() {


  return (
        <>
    <div className="bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white font-sans min-h-screen">
      

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src={gaxaly}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-4 drop-shadow-md">
            Welcome to Neuroverse
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl font-light tracking-wide">
            Where Intelligence Meets Infinity
          </p>
          <p className="text-md md:text-lg text-gray-300 mb-8 max-w-xl">
   Unlock the power of AI to enhance your writing, summarize complex texts, fix grammar, and more — login required to access tools.
          </p>
          <Link to="/tools">
          <button
         
         className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition"
         >
            Explore Now
          </button>
            </Link>
        </div>
      </section>

   
   
    </div>
    <Footer/>
          </>
  );
}

export default Homepage;  