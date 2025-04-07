import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UserForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setRole(queryParams.get("role") || "student");
  }, [location]);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted for ${role}`);

    navigate(`/erp/${role}`);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900">
      <div
        className={`relative overflow-hidden rounded-3xl w-[400px] bg-[linear-gradient(315deg,#0a30c7,#ff0f0f)] shadow-[15px_10px_60px_15px_rgba(0,0,0,0.3)] transform transition-all duration-500 ${
          isSignUp ? "h-[470px]" : "h-[400px]"
        }`}
      >
        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <form
            className="flex flex-col items-center justify-center h-full gap-4 text-white"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold underline text-blue-700">Sign In</h1>
            <label className="w-3/4 text-left">ERP:</label>
            <input className="w-3/4 px-2 py-1 text-black rounded-md" type="email" />
            <label className="w-3/4 text-left">Password:</label>
            <input className="w-3/4 px-2 py-1 text-black rounded-md" type="password" />
            <button className="px-4 py-2 mt-4 text-black bg-white rounded-md hover:bg-green-500">
              Log In
            </button>
            <p>
              Don't have an account?{" "}
              <button onClick={toggleForm} className="text-purple-900 underline hover:no-underline" type="button">
                Sign Up
              </button>
            </p>
          </form>
        </div>

        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${
            isSignUp ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <form
            className="flex flex-col items-center justify-center h-full gap-4 text-white"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold underline text-blue-700">Sign Up</h1>
            <label className="w-3/4 text-left">Username:</label>
            <input className="w-3/4 px-2 py-1 text-black rounded-md" type="text" />
            <label className="w-3/4 text-left">ERP:</label>
            <input className="w-3/4 px-2 py-1 text-black rounded-md" type="email" />
            <label className="w-3/4 text-left">Password:</label>
            <input className="w-3/4 px-2 py-1 text-black rounded-md" type="password" />
            <button className="px-4 py-2 mt-4 text-black bg-white rounded-md hover:bg-green-500">
              Register
            </button>
            <p>
              Already have an account?{" "}
              <button onClick={toggleForm} className="text-purple-900 underline hover:no-underline" type="button">
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
