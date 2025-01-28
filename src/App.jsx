import React, { useState } from 'react';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900">
      <div
        className={`relative overflow-hidden rounded-3xl w-[400px] bg-gradient-to-r from-red-600 to-yellow-500 shadow-lg transform transition-all duration-500 ${isSignUp ? 'h-[500px]' : 'h-[400px]'
          }`}
      >
        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${isSignUp ? '-translate-x-full' : 'translate-x-0'
            }`}
        >
          <form className="flex flex-col items-center justify-center h-full gap-4 text-white">
            <h1 className="text-3xl font-bold underline text-blue-700">Sign In</h1>
            <label className="w-3/4 text-left">Email:</label>
            <input
              className="w-3/4 px-2 py-1 text-black rounded-md"
              type="email"
              required
            />
            <label className="w-3/4 text-left">Password:</label>
            <input
              className="w-3/4 px-2 py-1 text-black rounded-md"
              type="password"
              required
            />
            <button
              className="px-4 py-2 mt-4 text-black bg-white rounded-md hover:bg-green-500"
              type="submit"
            >
              Log In
            </button>
            <p>
              Don't have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-purple-900 underline hover:no-underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>

        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${isSignUp ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <form className="flex flex-col items-center justify-center h-full gap-4 text-white">
            <h1 className="text-3xl font-bold underline text-blue-700">Sign Up</h1>
            <label className="w-3/4 text-left">Username:</label>
            <input
              className="w-3/4 px-2 py-1 text-black rounded-md"
              type="text"
              required
            />
            <label className="w-3/4 text-left">Email:</label>
            <input
              className="w-3/4 px-2 py-1 text-black rounded-md"
              type="email"
              required
            />
            <label className="w-3/4 text-left">Password:</label>
            <input
              className="w-3/4 px-2 py-1 text-black rounded-md"
              type="password"
              required
            />
            <button
              className="px-4 py-2 mt-4 text-black bg-white rounded-md hover:bg-green-500"
              type="submit"
            >
              Register
            </button>
            <p>
              Already have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-purple-900 underline hover:no-underline"
              >
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
