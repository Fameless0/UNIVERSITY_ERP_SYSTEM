import React from "react";
import { Link } from "react-router-dom";

const FacultyDashboard = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold">Faculty Panel</h2>
        <ul className="mt-4 space-y-2">
          <li><Link to="/faculty/form-generator">Form Generator</Link></li>
          <li><Link to="/faculty/assignments">Assignments</Link></li>
          <li><Link to="/faculty/question-bank">Question Bank</Link></li>
        </ul>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome, Faculty!</h1>
      </main>
    </div>
  );
};

export default FacultyDashboard;
