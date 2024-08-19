import React, { useState } from "react";

function IngredientForm({ onSubmit }) {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(ingredients);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients, separated by commas"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Find Recipes
      </button>
    </form>
  );
}

export default IngredientForm;
