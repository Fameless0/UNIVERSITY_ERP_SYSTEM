import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState(""); 
  const navigate = useNavigate();

  const handleSelection = (selectedRole) => {
    setRole(selectedRole);
    navigate(`/signin?role=${selectedRole}`); // Pass role as query param
  };

  return (
    <>
      <div className="relative flex items-center justify-center h-screen bg-gray-900 gap-5">
        <div 
          onClick={() => handleSelection("faculty")}
          className="relative h-80 w-96 mx-5 bg-[url('/faculty.png')] bg-cover bg-center text-white text-5xl text-center flex items-center justify-center cursor-pointer"
        >
          Faculty
        </div>
        <div 
          onClick={() => handleSelection("student")}
          className="relative h-80 w-96 mx-5 bg-[url('/student.jpg')] bg-cover bg-center text-white text-5xl text-center flex items-center justify-center cursor-pointer"
        >
          Student
        </div>
        <div 
          onClick={() => handleSelection("employee")}
          className="relative h-80 w-96 mx-5 bg-[url('/employee.jpg')] bg-cover bg-center text-white text-5xl text-center flex items-center justify-center cursor-pointer"
        >
          Employee
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Login;
