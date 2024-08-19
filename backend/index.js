const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/recipe-recommender", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Recipe schema
const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

// API endpoint to get recipes based on ingredients
app.post("/api/recipes", async (req, res) => {
  const { ingredients } = req.body;
  const ingredientList = ingredients
    .split(",")
    .map((ingredient) => ingredient.trim().toLowerCase());

  const recipes = await Recipe.find({
    ingredients: { $all: ingredientList },
  });

  res.json(recipes);
});

// Start server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
