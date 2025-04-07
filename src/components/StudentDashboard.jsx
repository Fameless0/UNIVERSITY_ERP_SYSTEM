import { Outlet, NavLink } from "react-router-dom";
import { Bell, User } from "lucide-react";

const Card = ({ title, children }) => (
  <div className="bg-white/10 p-6 rounded-2xl">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Sidebar = () => (
  <div className="bg-white/20 p-6 rounded-2xl min-h-screen w-64">
    <ul className="space-y-4">
      {[
        { path: "/erp", label: "Dashboard" },
        { path: "/erp/assignments", label: "Assignments" },
        { path: "/erp/fees", label: "Fee Details" },
        { path: "/erp/library", label: "Library Details" },
        { path: "/erp/events", label: "Events / Placement" },
        { path: "/erp/question-bank", label: "Question Bank" },
        { path: "/erp/results", label: "All Results" },
        { path: "/erp/feedback", label: "Help / Feedback" },
      ].map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `block ${isActive ? "text-blue-400 font-bold" : ""}`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const Dashboard = () => (
  <div className="p-6 text-white w-full">
    <h1 className="text-2xl font-bold mb-6">DASHBOARD</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Today's Schedule">
        <ul className="space-y-2">
          <li>9:30 - 10:30 <span className="font-bold">Big Data</span></li>
          <li>10:30 - 11:30 <span className="font-bold">AEC - III</span></li>
          <li>11:30 - 12:30 <span className="font-bold">Software Testing</span></li>
          <li>12:30 - 01:30 <span className="font-bold">Library</span></li>
        </ul>
        <p className="mt-4 text-sm text-center">END OF THE DAY</p>
      </Card>
      <Card title="Today's Attendance">
        <div className="text-4xl font-bold text-center">70%</div>
      </Card>
      <Card title="Overall Attendance">
        <div className="text-4xl font-bold text-center">82.5%</div>
      </Card>
    </div>
  </div>
);

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">STUDENT ERP</h1>
          <div className="flex gap-4">
            <Bell className="cursor-pointer" />
            <User className="cursor-pointer" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;










/*
import React from "react";
import { Bell, User, Settings, LogOut } from "lucide-react";

const Card = ({ title, children }) => (
  <div className="bg-white/10 p-6 rounded-2xl">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">DASHBOARD</h1>
        <div className="flex gap-4">
          <Bell className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Today's Schedule">
          <ul className="space-y-2">
            <li>9:30 - 10:30 <span className="font-bold">Big Data</span></li>
            <li>10:30 - 11:30 <span className="font-bold">AEC - III</span></li>
            <li>11:30 - 12:30 <span className="font-bold">Software Testing</span></li>
            <li>12:30 - 01:30 <span className="font-bold">Library</span></li>
          </ul>
          <p className="mt-4 text-sm text-center">END OF THE DAY</p>
        </Card>

        <Card title="Today's Attendance">
          <div className="text-4xl font-bold text-center">70%</div>
        </Card>

        <Card title="Overall Attendance">
          <div className="text-4xl font-bold text-center">82.5%</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card title="Calendar">
          <p className="text-center">[Calendar UI Placeholder]</p>
        </Card>
      </div>

      <div className="fixed bottom-6 left-6 flex gap-4">
        <Settings className="cursor-pointer" />
        <LogOut className="cursor-pointer" />
      </div>
    </div>
  );
};

export default StudentDashboard;






import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Bell, User, Settings, LogOut } from "lucide-react";

const Card = ({ title, children }) => (
  <div className="bg-white/10 p-6 rounded-2xl">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Sidebar = () => (
  <div className="bg-white/20 p-6 rounded-2xl min-h-screen w-64">
    <ul className="space-y-4">
      <li><Link to="/" className="block">Dashboard</Link></li>
      <li><Link to="/assignments" className="block">Assignments</Link></li>
      <li><Link to="/fee-details" className="block">Fee Details</Link></li>
      <li><Link to="/library-details" className="block">Library Details</Link></li>
      <li><Link to="/events" className="block">Events / Placement</Link></li>
      <li><Link to="/question-bank" className="block">Question Bank</Link></li>
      <li><Link to="/results" className="block">All Results</Link></li>
      <li><Link to="/feedback" className="block">Help / Feedback</Link></li>
    </ul>
  </div>
);

const Dashboard = () => (
  <div className="p-6 text-white w-full">
    <h1 className="text-2xl font-bold mb-6">DASHBOARD</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Today's Schedule">
        <ul className="space-y-2">
          <li>9:30 - 10:30 <span className="font-bold">Big Data</span></li>
          <li>10:30 - 11:30 <span className="font-bold">AEC - III</span></li>
          <li>11:30 - 12:30 <span className="font-bold">Software Testing</span></li>
          <li>12:30 - 01:30 <span className="font-bold">Library</span></li>
        </ul>
        <p className="mt-4 text-sm text-center">END OF THE DAY</p>
      </Card>
      <Card title="Today's Attendance">
        <div className="text-4xl font-bold text-center">70%</div>
      </Card>
      <Card title="Overall Attendance">
        <div className="text-4xl font-bold text-center">82.5%</div>
      </Card>
    </div>
  </div>
);

const StudentDashboard = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">STUDENT ERP</h1>
            <div className="flex gap-4">
              <Bell className="cursor-pointer" />
              <User className="cursor-pointer" />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assignments" element={<Card title="Assignments">Assignments Content</Card>} />
            <Route path="/fee-details" element={<Card title="Fee Details">Fee Details Content</Card>} />
            <Route path="/library-details" element={<Card title="Library Details">Library Details Content</Card>} />
            <Route path="/events" element={<Card title="Events / Placement">Events Content</Card>} />
            <Route path="/question-bank" element={<Card title="Question Bank">Question Bank Content</Card>} />
            <Route path="/results" element={<Card title="All Results">Results Content</Card>} />
            <Route path="/feedback" element={<Card title="Help / Feedback">Feedback Content</Card>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default StudentDashboard;


*/