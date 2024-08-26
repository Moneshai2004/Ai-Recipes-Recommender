"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import IngredientForm from "./components/IngredientForm";
import RecipeList from "./components/RecipeList";
import "./globals.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (ingredients) => {
    const response = await fetch("http://localhost:5000/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients }),
    });
    const data = await response.json();
    setRecipes(data);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <Navbar />
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // Ensure video is below content
      >
        <source src="/videos/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className=" pt-5 text-3xl font-bold text-cyan-500 mb-4">
          Recipe Recommender
        </h1>
        <IngredientForm onSubmit={handleSubmit} />
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
