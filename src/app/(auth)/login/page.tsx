"use client";
import { FormEvent, useState } from "react";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState<string>("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // TODO: perform login action
    console.log("Logging in with:", { email, password });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r to-blue-600 text-white font-english">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-center text-teal-600">
          Login to Your Account
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-lg text-lg font-semibold hover:bg-teal-700 active:scale-95 transition duration-300 cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-teal-500 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}
