import React from "react";
import { Link } from "react-router-dom";

function EmployeeDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Employee Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <Link
          to="/employee/attendance"
          className="bg-blue-600 p-4 rounded-md text-center hover:bg-blue-700"
        >
          Attendance
        </Link>
        <Link
          to="/employee/leave"
          className="bg-green-600 p-4 rounded-md text-center hover:bg-green-700"
        >
          Leave Requests
        </Link>
        <Link
          to="/employee/payroll"
          className="bg-purple-600 p-4 rounded-md text-center hover:bg-purple-700"
        >
          Payroll
        </Link>
        <Link
          to="/employee/announcements"
          className="bg-yellow-600 p-4 rounded-md text-center hover:bg-yellow-700"
        >
          Announcements
        </Link>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
