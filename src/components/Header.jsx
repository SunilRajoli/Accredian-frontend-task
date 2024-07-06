// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container py-3 w-full">
        <div className=" bg-[#1A73E826] p-3 text-center">
          <div className="text-xl font-semibold text-gray-700">
            Navigate your ideal career path with tailored expert advice
            <a href="#" className="text-blue-500 ml-2">Contact expert</a>
          </div>
        </div>
        <nav className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 pl-20" />
            <select className="border border-gray-300 rounded py-2 mx-10 bg-[#1A73E8] text-white">
              <option>Courses</option>
              <option>Course 1</option>
              <option>Course 2</option>
              <option>Course 3</option>
            </select>
          </div>
          <div className="flex space-x-9 mr-12">
            <a href="#" className="text-gray-700 py-2">Refer & Earn</a>
            <a href="#" className="text-gray-700 py-2">Resources</a>
            <a href="#" className="text-gray-700 py-2">About us</a>
            <a href="https://accredian.com/login" className="text-gray-700 py-2 px-5 bg-[#94A3B833]">Login</a>
            <a href="https://trial.accredian.com/" className="bg-blue-500 text-white py-2 px-4 rounded">Try for Free</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
