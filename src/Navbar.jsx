import React, { useState } from "react";
import { Link } from "react-router-dom";
import wormhole from "./assets/WORMHOLE.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
        
        {/* Left: Logo and Site Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={wormhole} alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-cyan-400">Neuroverse</span>
        </Link>

        {/* Right: Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-cyan-300">Home</Link>
             <Link to="/about" className="hover:text-cyan-300">About Us</Link>
   
          <Link to="/tools" className="hover:text-cyan-300">Tools</Link>
          <Link to="/contact" className="hover:text-cyan-300">Contact Us</Link>
          <Link
            to="/login"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition"
          >
            Log In
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 pb-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-cyan-300">Home</Link>
           <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-cyan-300">About Us</Link>
      
          <Link to="/tools" onClick={() => setOpen(false)} className="block hover:text-cyan-300">Tools</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-cyan-300">Contact Us</Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block bg-cyan-500 text-center py-2 rounded-lg hover:bg-cyan-600"
          >
            Log In
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;   