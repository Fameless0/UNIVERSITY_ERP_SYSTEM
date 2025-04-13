import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-5">Student ERP</h2>
      <ul>
        <li className="mb-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold relative before:content-['•'] before:absolute before:left-[-20px] before:text-white before:text-xl"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold relative before:content-['•'] before:absolute before:left-[-20px] before:text-white before:text-xl"
                : ""
            }
          >
            Students
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold relative before:content-['•'] before:absolute before:left-[-20px] before:text-white before:text-xl"
                : ""
            }
          >
            Courses
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold relative before:content-['•'] before:absolute before:left-[-20px] before:text-white before:text-xl"
                : ""
            }
          >
            Attendance
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/exams"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold relative before:content-['•'] before:absolute before:left-[-20px] before:text-white before:text-xl"
                : ""
            }
          >
            Exams
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/fees"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold relative before:content-['•'] before:absolute before:left-[-20px] before:text-white before:text-xl"
                : ""
            }
          >
            Fees
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
