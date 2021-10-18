import { SetStateAction, useEffect, useState } from "react";
import { Recipe } from "../models/recipe-model";
import { fetchRecipes } from "../services/ReactAPIServices";

//import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const updateSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  useEffect(() => {
    fetchRecipes(query).then((recipesFromApi) => {
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
