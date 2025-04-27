import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import DashboardConfigEditor from "./components/DashboardConfigEditor";
>>>>>>> back
import Login from "./components/Login";
import UserForm from "./components/UserForm";
import StudentDashboard from "./components/StudentDashboard";
import FacultyDashboard from "./components/FacultyDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Assignments from "./components/Assignments";
import FeeDetails from "./components/FeeDetails";
import LibraryDetails from "./components/LibraryDetails";
import EventsPlacement from "./components/EventsPlacement";
import QuestionBank from "./components/QuestionBank";
import FacultyAssignments from "./components/FacultyAssignments";
import FacultyQuestionBank from "./components/FacultyQuestionBank";
import Result from "./components/Result";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<UserForm />} />
        <Route path="/erp/student" element={<StudentDashboard />}>
          <Route path="assignments" element={<Assignments />} />
          <Route path="fees" element={<FeeDetails />} />
          <Route path="library" element={<LibraryDetails />} />
          <Route path="events" element={<EventsPlacement />} />
          <Route path="question-bank" element={<QuestionBank />} />
          <Route path="results" element={<Result />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
        <Route path="/erp/faculty" element={<FacultyDashboard />}>
          <Route path="assignments" element={<FacultyAssignments />} />
          <Route path="question-bank" element={<FacultyQuestionBank />} />
        </Route>
        <Route path="/erp/employee" element={<EmployeeDashboard />} />
<<<<<<< HEAD
=======
        <Route path="/dashboard-config/:type" element={<DashboardConfigEditor />} />
        <Route path="/dashboard-config/:type" element={<DashboardConfigEditor />} />
>>>>>>> back
      </Routes>
    </Router>
  );
}

export default App;