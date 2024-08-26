import React from "react";

function RecipeList({ recipes }) {
  return (
    <div className="p-4 h-screen overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="p-4 border shadow rounded-lg h-64 flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg hover:border-cyan-500"
          >
            <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
            <div className="overflow-y-auto flex-grow">
              <p className="line-clamp-8 overflow-hidden text-ellipsis">
                {recipe.instructions}
              </p>
              {/* Add an ingredients list here */}
              <ul className="mt-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-sm list-disc ml-4">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
