// components/Sidebar.js
import React, { useState } from "react";

export default function Sidebar() {
  // State to manage sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle sidebar toggle
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle click events
  const handleLinkClick = (linkName) => {
    console.log(`${linkName} clicked!`);
    // Add additional logic here, like navigating to a different page or updating state
  };

  const handleCreateTask = () => {
    console.log("Create new recipes clicked!");
    // Add additional logic for creating a task
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-20 p-2 bg-blue-600 text-white rounded-md shadow-md hover:shadow-gray-500/50 transition-shadow duration-300"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Open"} Sidebar
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-white">.</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="hover:text-blue-300 text-white transition-colors duration-200"
                onClick={() => handleLinkClick("Dashboard")}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 text-white transition-colors duration-200"
                onClick={() => handleLinkClick("My Recipes")}
              >
                My Recipes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 text-white transition-colors duration-200"
                onClick={() => handleLinkClick("Calendar")}
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 text-white transition-colors duration-200"
                onClick={() => handleLinkClick("Mail")}
              >
                Mail
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 text-white transition-colors duration-200"
                onClick={() => handleLinkClick("Activity")}
              >
                Activity
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-10">
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            onClick={handleCreateTask}
          >
            Create new Recipes
          </button>
        </div>
      </div>
    </>
  );
}
