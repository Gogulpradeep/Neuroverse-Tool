import React, { useState } from "react";
import gaxaly from "./assets/gaxaly.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const errors = {};
 const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /^.{1,}$/;


    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 6 characters and contain letters and numbers.";
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Hardcoded login for testing
      if (email === "admin@neuroverse.com" && password === "neuro123") {
        alert("Logged in successfully!");
        // Instead of navigate, you can simulate navigation like:
        console.log("Redirecting to /home...");
      } else {
        setErrors({ general: "Invalid email or password." });
      }
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${gaxaly})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center drop-shadow">
          Login to Neuroverse
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 border ${
                errors.email ? "border-red-500" : "border-white/30"
              } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: null });
              }}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 border ${
                errors.password ? "border-red-500" : "border-white/30"
              } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: null });
              }}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* General Error */}
          {errors.general && (
            <p className="text-red-400 text-sm text-center">{errors.general}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-600/40 text-white font-semibold text-lg"
          >
            Log In
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center text-sm text-gray-300">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Sign up
            </a>
          </p>
          <p className="mt-2">
            <a href="#" className="text-cyan-400 hover:underline">
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
