import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen text-white p-6"  style={{
      background: "linear-gradient(315deg, #0a30c7, #ff0f0f)",
    }}>
      <h1 className="text-3xl font-bold text-center mb-10">Employee Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        <Link to="/student" className="w-full max-w-xs">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-all shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Student</h2>
            <p className="text-white/70">Manage ERP of Students</p>
          </div>
        </Link>

        <Link to="/faculty" className="w-full max-w-xs">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-all shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Faculty</h2>
            <p className="text-white/70">Manage ERP of faculties</p>
          </div>
        </Link>

        <Link to="/staff" className="w-full max-w-xs">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-all shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Staff</h2>
            <p className="text-white/70">Manage ERP of Staff</p>
          </div>
        </Link>
=======
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (dashboardType) => {
    navigate(`/dashboard-config/${dashboardType}`);
  };

  return (
    <div
      className="min-h-screen text-white p-6"
      style={{
        background: "linear-gradient(315deg, #0a30c7, #ff0f0f)",
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-10">Employee Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        
        <div
          onClick={() => handleNavigate("student")}
          className="w-full max-w-xs backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-all shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Student</h2>
          <p className="text-white/70">Manage Student Dashboard</p>
        </div>

        <div
          onClick={() => handleNavigate("faculty")}
          className="w-full max-w-xs backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-all shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Faculty</h2>
          <p className="text-white/70">Manage Faculty Dashboard</p>
        </div>

        <div
          onClick={() => handleNavigate("staff")}
          className="w-full max-w-xs backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-all shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Staff</h2>
          <p className="text-white/70">Manage Staff Dashboard</p>
        </div>

>>>>>>> back
      </div>
    </div>
  );
};

export default EmployeeDashboard;
