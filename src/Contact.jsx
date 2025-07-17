import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Contact = () => {
  return (
    
    <>
    <Navbar/>
<section id="contact" className="p-10 bg-gray-900 text-white min-h-screen">

      <h2 className="text-3xl mt-6 font-semibold">📬 Contact Us</h2>
      <p className="text-gray-300 mt-8">
        We'd love to hear from you. Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <div className="max-w-2xl mx-auto bg-gray-800 p-8 mt-9 rounded-2xl shadow-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
              />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
              />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
              ></textarea>
          </div>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg text-white font-medium transition duration-300"
            >
            Send Message
          </button>
        </form>
      </div>
    </section>
    <Footer/>
          
              </>

  );
};

export default Contact;
