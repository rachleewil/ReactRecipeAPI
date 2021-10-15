import { useEffect, useState } from "react";
import { Recipe } from "../models/recipe-model";
import { fetchRecipes } from "../services/RecipeAPIServices";
//import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [number, setNumber] = useState<string>("10000");

  useEffect(() => {
    fetchRecipes().then((recipesFromApi) => {
      setRecipes(recipesFromApi);
    });
  }, []);

  return (
    <div className="Recipes">
      <h2>Recipes</h2>
      <form
        className="input-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="number"
          name="number"
          value={number}
          placeholder="enter how many recipes you want to see"
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        />
        <button type="submit"> Get Recipes</button>
      </form>
      <ul>
        {recipes.slice(0, Number(number)).map((hits) => {
          return <li>{hits.recipe.label}</li>;
        })}
      </ul>
    </div>
  );
}

export default Recipes;
