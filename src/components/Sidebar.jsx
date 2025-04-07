import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-5">Student ERP</h2>
      <ul>
        <li className="mb-3">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>
            Dashboard
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/students" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>
            Students
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/courses" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>
            Courses
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/attendance" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>
            Attendance
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/exams" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>
            Exams
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/fees" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>
            Fees
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
