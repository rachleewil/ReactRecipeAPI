import { SetStateAction, useEffect, useState } from "react";
import { Recipe, RecipeResponse } from "../models/recipe-model";
import axios from "axios";
// import { fetchRecipes } from "../services/RecipeAPIServices";
//import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const apiURL = `https://api.edamam.com/api/recipes/v2/?q=${query}`;
  const apiKey = "&app_key=126cd0194e99a7e5da2de2d10c24bbde";
  const apiId = "&app_id=b725930f";
  const apiType = "&type=public";
  const url = `${apiURL}${apiType}${apiId}${apiKey}`;

  function fetchRecipes(): Promise<Recipe[]> {
    return axios.get<RecipeResponse>(url).then((response) => response.data.hits);
  }

  const updateSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  useEffect(() => {
    fetchRecipes().then((recipesFromApi) => {
      setRecipes(recipesFromApi);
    });
  }, [query]);

  return (
    <div className="Recipes">
      <h1>Recipes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search Recipes
        </button>
      </form>
      {recipes.map((hits) => {
        return <li>{hits.recipe.label} </li>;
      })}
    </div>
  );
}

export default Recipes;
