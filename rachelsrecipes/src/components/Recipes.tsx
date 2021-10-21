import { SetStateAction, useState } from "react";
import { Recipe } from "../models/recipe-model";
import { fetchRecipes } from "../services/ReactAPIServices";

//import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  //const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [calories, setCalories] = useState("");

  // const updateSearch = (e: { target: { value: SetStateAction<string> } }) => {
  //   setSearch(e.target.value);
  // };

  const updateMealType = (e: { target: { value: SetStateAction<string> } }) => {
    setMealType(e.target.value);
  };

  const updateCuisineType = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCuisineType(e.target.value);
  };

  const updateCalories = (e: { target: { value: SetStateAction<string> } }) => {
    setCalories(e.target.value);
  };

  const updateQuery = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value);
  };

  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchRecipes(query, mealType, cuisineType, calories).then(
      (recipesFromApi) => {
        setRecipes(recipesFromApi);
      }
    );
  };

  return (
    <div className="Recipes">
      <h2>Search by Recipe</h2>
      <p className="requriedField">*required field*</p>
      <form onSubmit={getSearch} className="search-form">
        <input required
          className="search-bar"
          type="text"
          onChange={updateQuery}
        />
        <div>
          <h2>Select a Meal Type</h2>
          <p className="requriedField">*required field*</p>
          <select required
            className="mealType"
            onChange={updateMealType}
          >
            <option value="">Please Select</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>

        <div>
          <h2>Select a Cuisine Type</h2>
          <p className="requriedField">*required field*</p>
          <select required
            className="cuisineType"
            onChange={updateCuisineType}
          >
            <option value="">Please Select</option>
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="British">British</option>
            <option value="Caribbean">Caribbean</option>
            <option value="Central Europe">Central Europe</option>
            <option value="Chinese">Chinese</option>
            <option value="Eastern Europe">Eastern Europe</option>
            <option value="French">French</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Kosher">Kosher</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Nordic">Nordic</option>
            <option value="South American">South American</option>
            <option value="South East Asian">South East Asian</option>
          </select>
        </div>

        <div>
          <h2>Calorie Range</h2>
          <p className="requriedField">*required field*</p>
          <input required
            className="calories"
            onChange={updateCalories}
          >
          </input>
        </div>

        <div>
          <button className="search-button" type="submit">
            Search Recipes
          </button>
        </div>
      </form>

      {recipes.map((hits) => {
        return (
          <>
            <li>{hits.recipe.label} </li>
            <li>{hits.recipe.mealType}</li>
            <li>{hits.recipe.cuisineType}</li>
            <li>{hits.recipe.calories}</li>
          </>
        );
      })}
    </div>
  );
}

export default Recipes;
