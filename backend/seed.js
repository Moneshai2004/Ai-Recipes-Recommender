const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");

mongoose.connect("mongodb://localhost:27017/recipe-recommender", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const recipes = [
  {
    name: "Idli",
    ingredients: ["rice", "urad dal", "water", "salt"],
    instructions:
      "Soak rice and urad dal, grind to a batter, ferment overnight, and steam in idli molds.",
  },
  {
    name: "Dosa",
    ingredients: ["rice", "urad dal", "fenugreek seeds", "salt", "oil"],
    instructions:
      "Soak rice, urad dal, and fenugreek, grind to a batter, ferment, and cook on a griddle.",
  },
  {
    name: "Vada",
    ingredients: [
      "urad dal",
      "onion",
      "green chilies",
      "curry leaves",
      "salt",
      "oil",
    ],
    instructions:
      "Soak urad dal, grind to a batter, mix with chopped onions and spices, shape into donuts, and deep fry.",
  },
  {
    name: "Upma",
    ingredients: [
      "semolina",
      "onion",
      "green chilies",
      "mustard seeds",
      "curry leaves",
      "water",
      "salt",
      "oil",
    ],
    instructions:
      "Roast semolina, sauté onions and spices, add water and bring to a boil, add semolina and cook until fluffy.",
  },
  {
    name: "Pongal",
    ingredients: [
      "rice",
      "moong dal",
      "black pepper",
      "cumin seeds",
      "ghee",
      "curry leaves",
      "cashews",
    ],
    instructions:
      "Cook rice and dal together, temper spices in ghee, mix and garnish with cashews.",
  },
  {
    name: "Rasam",
    ingredients: [
      "tamarind",
      "tomatoes",
      "rasam powder",
      "mustard seeds",
      "curry leaves",
      "garlic",
      "water",
      "salt",
    ],
    instructions:
      "Boil tamarind and tomatoes with spices, temper with mustard seeds and curry leaves.",
  },
  {
    name: "Sambar",
    ingredients: [
      "toor dal",
      "tamarind",
      "vegetables",
      "sambar powder",
      "mustard seeds",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Cook dal and vegetables, add tamarind extract and sambar powder, temper with mustard seeds and curry leaves.",
  },
  {
    name: "Avial",
    ingredients: [
      "mixed vegetables",
      "coconut",
      "green chilies",
      "cumin seeds",
      "yogurt",
      "curry leaves",
      "coconut oil",
    ],
    instructions:
      "Cook vegetables, grind coconut with spices, mix with yogurt, and garnish with curry leaves.",
  },
  {
    name: "Puliyogare",
    ingredients: [
      "rice",
      "tamarind",
      "peanuts",
      "sesame seeds",
      "mustard seeds",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Cook rice, prepare tamarind paste with spices, mix with rice and garnish with peanuts.",
  },
  {
    name: "Lemon Rice",
    ingredients: [
      "rice",
      "lemon juice",
      "turmeric",
      "mustard seeds",
      "chana dal",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Cook rice, temper spices, add lemon juice and mix with rice.",
  },
  {
    name: "Curd Rice",
    ingredients: [
      "rice",
      "yogurt",
      "mustard seeds",
      "curry leaves",
      "ginger",
      "salt",
      "oil",
    ],
    instructions: "Cook rice, mix with yogurt, temper spices, and combine.",
  },
  {
    name: "Bisi Bele Bath",
    ingredients: [
      "rice",
      "toor dal",
      "tamarind",
      "vegetables",
      "bisi bele bath powder",
      "mustard seeds",
      "oil",
    ],
    instructions:
      "Cook rice and dal with vegetables, mix with tamarind extract and spice powder, and temper.",
  },
  {
    name: "Masala Dosa",
    ingredients: [
      "rice",
      "urad dal",
      "potatoes",
      "onion",
      "turmeric",
      "mustard seeds",
      "curry leaves",
    ],
    instructions:
      "Make dosa batter, prepare potato masala, cook dosas, and fill with masala.",
  },
  {
    name: "Appam",
    ingredients: ["rice", "coconut milk", "yeast", "sugar", "salt"],
    instructions:
      "Ferment rice and coconut batter, cook in appam pan until crispy edges form.",
  },
  {
    name: "Puttu",
    ingredients: ["rice flour", "coconut", "water", "salt"],
    instructions:
      "Mix rice flour with water, layer with coconut in puttu steamer, and steam.",
  },
  {
    name: "Neer Dosa",
    ingredients: ["rice", "coconut", "water", "salt"],
    instructions:
      "Soak rice, grind with coconut, and cook thin crepes on a griddle.",
  },
  {
    name: "Kuzhi Paniyaram",
    ingredients: [
      "idli batter",
      "onion",
      "green chilies",
      "mustard seeds",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Mix chopped onions and spices in idli batter, pour into paniyaram pan, and cook until golden.",
  },
  {
    name: "Rava Kesari",
    ingredients: [
      "semolina",
      "sugar",
      "ghee",
      "cardamom",
      "saffron",
      "cashews",
    ],
    instructions:
      "Roast semolina, add boiling water, mix in sugar, ghee, and cardamom, and garnish with cashews.",
  },
  {
    name: "Adai",
    ingredients: [
      "rice",
      "toor dal",
      "chana dal",
      "urad dal",
      "red chilies",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Soak and grind rice and dals with spices, cook on a griddle until golden.",
  },
  {
    name: "Kootu",
    ingredients: [
      "vegetables",
      "moong dal",
      "coconut",
      "green chilies",
      "cumin seeds",
      "curry leaves",
    ],
    instructions:
      "Cook vegetables and dal, grind coconut with spices, and mix together.",
  },
  {
    name: "Chettinad Chicken",
    ingredients: [
      "chicken",
      "onion",
      "tomato",
      "coconut",
      "chettinad masala",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Marinate chicken, cook with onions, tomatoes, and masala, and finish with coconut.",
  },
  {
    name: "Kara Kuzhambu",
    ingredients: [
      "tamarind",
      "onion",
      "tomato",
      "vegetables",
      "kuzhambu powder",
      "mustard seeds",
      "oil",
    ],
    instructions:
      "Prepare tamarind base, cook with vegetables and spices, and temper with mustard seeds.",
  },
  {
    name: "Chicken 65",
    ingredients: [
      "chicken",
      "ginger garlic paste",
      "red chili powder",
      "corn flour",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Marinate chicken in spices and corn flour, deep fry, and garnish with curry leaves.",
  },
  {
    name: "Meen Moilee",
    ingredients: [
      "fish",
      "coconut milk",
      "onion",
      "green chilies",
      "turmeric",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Cook fish in a spiced coconut milk base with onions and curry leaves.",
  },
  {
    name: "Mutton Biryani",
    ingredients: [
      "mutton",
      "basmati rice",
      "onion",
      "tomato",
      "yogurt",
      "biryani masala",
      "ghee",
    ],
    instructions:
      "Cook mutton with spices, layer with rice, and cook on low heat until done.",
  },
  {
    name: "Keerai Masiyal",
    ingredients: [
      "spinach",
      "toor dal",
      "onion",
      "tomato",
      "garlic",
      "mustard seeds",
      "oil",
    ],
    instructions:
      "Cook spinach and dal with onions and tomatoes, mash together, and temper with spices.",
  },
  {
    name: "Vatha Kuzhambu",
    ingredients: [
      "tamarind",
      "vathal (dried vegetables)",
      "sambar powder",
      "mustard seeds",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Prepare tamarind base, cook with vathal and spices, and temper with mustard seeds.",
  },
  {
    name: "Thayir Vadai",
    ingredients: [
      "urad dal",
      "yogurt",
      "green chilies",
      "mustard seeds",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Fry vadais, soak in water, then in spiced yogurt, and temper with mustard seeds.",
  },
  {
    name: "Kootu Curry",
    ingredients: [
      "chana dal",
      "yam",
      "raw banana",
      "coconut",
      "black pepper",
      "curry leaves",
    ],
    instructions:
      "Cook vegetables and dal, grind coconut with spices, and mix together.",
  },
  {
    name: "Masala Vadai",
    ingredients: [
      "chana dal",
      "onion",
      "green chilies",
      "fennel seeds",
      "curry leaves",
      "oil",
    ],
    instructions:
      "Grind soaked dal with spices, mix with chopped onions, shape, and deep fry.",
  },
  // Add more sample recipes here
];

Recipe.insertMany(recipes)
  .then(() => {
    console.log("Recipes added");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error(err);
  });
