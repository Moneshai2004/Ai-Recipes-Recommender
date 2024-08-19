import React from "react";

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id} className="p-4 border-b">
              <h3 className="text-xl font-bold">{recipe.name}</h3>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
