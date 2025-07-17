import React, { useState } from "react";
import { motion } from "framer-motion";

function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000); // Reset message after 5s
    }
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-gray-300 pt-16 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        {/* Brand Info */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Neuroverse</h2>
          <p className="text-sm leading-relaxed">
            AI writing, made offline. Improve grammar, summarize content, and tailor tone—all in your hands.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white transition hover:scale-110 duration-300" title="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition hover:scale-110 duration-300" title="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" className="hover:text-white transition hover:scale-110 duration-300" title="Discord"><i className="fab fa-discord"></i></a>
            <a href="#" className="hover:text-white transition hover:scale-110 duration-300" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#tools" className="hover:text-cyan-400 transition">Our Tools</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Community</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition">Docs</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Support</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Status Page</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>Email: <a href="mailto:support@neuroverse.com" className="hover:text-cyan-400">support@neuroverse.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-cyan-400">+1 (234) 567-890</a></li>
            <li>Location: San Francisco, CA</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Weekly AI writing tips & updates in your inbox.</p>
          <form onSubmit={handleNewsletterSubmit} className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded transition shadow-lg hover:shadow-cyan-400/30"
            >
              Join Now
            </button>
            {subscribed && (
              <p className="text-green-400 text-sm">Thanks for subscribing!</p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Neuroverse. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Sitemap</a>
          <button
            onClick={handleScrollToTop}
            className="hover:text-white underline transition"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
