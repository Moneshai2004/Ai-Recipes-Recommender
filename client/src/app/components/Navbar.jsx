import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="mr-10 text-2xl text-white font-bold">Recipes</span>
          <div className="flex space-x-10 text-white-900">
            <a href="#">Recipe List</a>
            <a href="#">Add Recipe</a>
            <a href="#">Profile</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
