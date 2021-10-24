import React from 'react';
import { SetStateAction, useState } from "react";
import { Recipe } from "../models/recipe-model";
import { fetchRecipes } from "../services/ReactAPIServices";
import Results from '../components/Results';


//import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  //const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisineType, setCuisineType] = useState("");

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

  const updateQuery = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value);
  };

  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchRecipes(query, mealType, cuisineType).then(
      (recipesFromApi) => {
        setRecipes(recipesFromApi);
      }
    );
  };

  return (
    <div className="Recipes">
        <form onSubmit={getSearch} className="search-form">
          <div className="searchType">
          <h2>Search by Recipe</h2>
          <input required
            className="search-bar"
            type="text"
            onChange={updateQuery}
          />
          <p className="requriedField">*required field*</p>
          </div>

          <div className = "searchType">
            <h2>Select a Meal Type</h2>
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
            <p className="requriedField">*required field*</p>
          </div>

          <div className="searchType">
            <h2>Select a Cuisine Type</h2>
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
            <p className="requriedField">*required field*</p>
          </div>

          <div>
            <button className="search-button" type="submit">
              Search Recipes
            </button>
          </div>
        </form>


      <Results recipes={recipes} />

    </div>
  );
}

export default Recipes;
