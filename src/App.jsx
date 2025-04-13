// import React from 'react';
// import Login from "../src/components/Login"
// import UserForm from "./components/UserForm"
// import StudentDashboard from "./components/StudentDashboard"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/xyz' element={<Login />}>
//         </Route>
//         <Route path='/SignIn' element={<UserForm />}>
//         </Route>
//         <Route path='/' element={<StudentDashboard />}>
//         </Route>
//       </Routes>
//     </Router>
//   )
// }

// export default App;




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import UserForm from "./components/UserForm";
// import StudentDashboard from "./components/StudentDashboard";
// import Assignments from "./components/Assignments";
// import FeeDetails from "./components/FeeDetails";
// import LibraryDetails from "./components/LibraryDetails";
// import EventsPlacement from "./components/EventsPlacement";
// import QuestionBank from "./components/QuestionBank";
// // import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signin" element={<UserForm />} />
//         <Route path="/erp" element={<StudentDashboard />}>
//           <Route path="assignments" element={<Assignments />} />
//           <Route path="fees" element={<FeeDetails />} />
//           <Route path="library" element={<LibraryDetails />} />
//           <Route path="events" element={<EventsPlacement />} />
//           <Route path="question-bank" element={<QuestionBank />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import UserForm from "./components/UserForm";
// import StudentDashboard from "./components/StudentDashboard";
// import FacultyDashboard from "./components/FacultyDashboard";
// import Assignments from "./components/Assignments";
// import FeeDetails from "./components/FeeDetails";
// import LibraryDetails from "./components/LibraryDetails";
// import EventsPlacement from "./components/EventsPlacement";
// import QuestionBank from "./components/QuestionBank";
// import FormGenerator from "./components/FormGenerator";
// import FacultyAssignments from "./components/FacultyAssignments";
// import FacultyQuestionBank from "./components/FacultyQuestionBank";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Login and Authentication */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signin" element={<UserForm />} />

//         {/* Student ERP Dashboard */}
//         <Route path="/erp" element={<StudentDashboard />}>
//           <Route path="assignments" element={<Assignments />} />
//           <Route path="fees" element={<FeeDetails />} />
//           <Route path="library" element={<LibraryDetails />} />
//           <Route path="events" element={<EventsPlacement />} />
//           <Route path="question-bank" element={<QuestionBank />} />
//         </Route>

//         {/* Faculty Dashboard */}
//         <Route path="/faculty" element={<FacultyDashboard />}>
//           <Route path="form-generator" element={<FormGenerator />} />
//           <Route path="assignments" element={<FacultyAssignments />} />
//           <Route path="question-bank" element={<FacultyQuestionBank />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import UserForm from "./components/UserForm";
// import StudentDashboard from "./components/StudentDashboard";
// import FacultyDashboard from "./components/FacultyDashboard"; // Add Faculty Dashboard
// import EmployeeDashboard from "./components/EmployeeDashboard"; // Add Employee Dashboard

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signin" element={<UserForm />} />
//         <Route path="/erp" element={<StudentDashboard />} />
//         <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
//         <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Route>
        <Route path="/erp/faculty" element={<FacultyDashboard />}>
          <Route path="assignments" element={<FacultyAssignments />} />
          <Route path="question-bank" element={<FacultyQuestionBank />} />
        </Route>
        <Route path="/erp/employee" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
