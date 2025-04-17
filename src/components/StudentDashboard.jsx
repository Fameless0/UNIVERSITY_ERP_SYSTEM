import { useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import BellIcon from "../assets/icons/bell.png";
import UserIcon from "../assets/icons/profile.png";
import SettingsIcon from "../assets/icons/settings.png";
import ExitIcon from "../assets/icons/logout.png";

const Card = ({ title, children }) => (
  <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
    <h2 className="text-lg font-semibold mb-3 text-white">{title}</h2>
    {children}
  </div>
);

const CircularProgress = ({ value }) => {
  const percentage = Math.min(Math.max(value, 0), 100);
  const radius = 20;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-28 h-28 mx-auto">
      <svg width="100%" height="100%" viewBox="0 0 48 48" className="rotate-90">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.35s" }}
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">{percentage}%</span>
      </div>
    </div>
  );
};

const CalendarCard = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const currentDate = today.getDate();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card title="Calendar">
      <div className="grid grid-cols-7 gap-x-0 gap-y-3 text-center text-[11px] text-white">
        {weekdays.map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const date = i + 1;
          const dateObj = new Date(year, month, date);
          const dayOfWeek = dateObj.getDay();
          const isPast = date < currentDate;

          return (
            <div
              key={date}
              className={`w-9 h-9 mx-auto rounded-full flex flex-col items-center justify-center 
              ${dayOfWeek === 0 ? "bg-orange-500" : "bg-white"} ${
                isPast ? "opacity-40" : ""
              } text-black leading-tight`}
            >
              <span className="text-sm">{date}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

const Sidebar = () => (
  <div className="bg-white/20 p-6 rounded-2xl h-[420px] w-64 ml-6 mt-10">
    <ul className="text-white divide-y divide-white/30">
      {[
        { path: "/erp/student", label: "Dashboard" },
        { path: "/erp/student/assignments", label: "Assignments" },
        { path: "/erp/student/fees", label: "Fee Details" },
        { path: "/erp/student/library", label: "Library Details" },
        { path: "/erp/student/events", label: "Events / Placement" },
        { path: "/erp/student/question-bank", label: "Question Bank" },
        { path: "/erp/student/results", label: "All Results" },
        { path: "/erp/student/feedback", label: "Help / Feedback" },
      ].map((item) => (
        <li key={item.path} className="py-3">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex justify-center items-center gap-2 ${isActive ? "font-bold text-white" : ""}`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="text-white text-xl leading-none">•</span>}
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const SettingsModal = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState("");

  const handleReset = () => {
    alert(`New password: ${newPassword}`);
    setNewPassword("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[300px]">
        <h2 className="text-xl font-semibold mb-4 text-black">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          className="w-full mb-4 px-2 py-1 border rounded text-black"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1 text-white bg-gray-500 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-800"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const SettingsCard = ({ onOpenModal, onLogout }) => (
  <div className="ml-6 mt-4 w-64">
    <Card>
      <div className="flex justify-center items-center gap-6">
        <img
          src={SettingsIcon}
          alt="Settings"
          className="w-8 h-8 cursor-pointer hover:opacity-80"
          onClick={onOpenModal}
        />
        <img
          src={ExitIcon}
          alt="Exit"
          className="w-8 h-8 cursor-pointer hover:opacity-80"
          onClick={onLogout}
        />
      </div>
    </Card>
  </div>
);

const StudentDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname === "/erp/student";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogout = () => {
    // Optional: clear session/localStorage
    navigate("/");
  };
  return (
    <div
      className="min-h-screen flex"
      style={{
        background: "linear-gradient(300deg,rgba(67, 10, 199, 0.96),rgba(255, 35, 15, 0.95))",
      }}
    >
      <div className="mt-6 flex flex-col">
        <Sidebar />
        <SettingsCard onOpenModal={() => setIsModalOpen(true)} onLogout={handleLogout} />
      </div>

      <div className="border-l-2 border-white/20 h-full"></div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-white">DASHBOARD</h1>
          <div className="flex gap-4 items-center">
            <img src={BellIcon} alt="Notifications" className="w-10 h-10 cursor-pointer hover:opacity-80" />
            <img src={UserIcon} alt="User Profile" className="w-10 h-10 cursor-pointer hover:opacity-80" />
          </div>
        </div>

        <Outlet />

        {isDashboard && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card title="Today's Schedule">
                <ul className="space-y-2 text-white text-sm">
                  <li className="flex justify-between border-b-2 border-white py-1">
                    <span>9:30 - 10:30</span>
                    <span className="font-semibold">Big Data</span>
                  </li>
                  <li className="flex justify-between border-b-2 border-white py-1">
                    <span>10:30 - 11:30</span>
                    <span className="font-semibold">AEC - III</span>
                  </li>
                  <li className="flex justify-between border-b-2 border-white py-1">
                    <span>11:30 - 12:30</span>
                    <span className="font-semibold">Software Testing</span>
                  </li>
                  <li className="flex justify-between border-b-2 border-white py-1">
                    <span>12:30 - 01:30</span>
                    <span className="font-semibold">Library</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-center text-white/70">END OF THE DAY</p>
              </Card>

              <CalendarCard />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Today's Attendance">
                <div className="flex items-center justify-center p-4">
                  <CircularProgress value={70} />
                </div>
              </Card>

              <Card title="Overall Attendance">
                <div className="flex items-center justify-center p-4">
                  <CircularProgress value={82.5} />
                </div>
              </Card>
            </div>
          </>
        )}
      </div>

      {isModalOpen && <SettingsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default StudentDashboard;
