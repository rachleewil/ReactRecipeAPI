import React from 'react';
import { Recipe } from "../models/recipe-model";
import { FavoritesContext, useFavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom"; {/* added Link  - note no import can go below this commented line*/}


interface Props {
    recipes: Recipe[];
}


function Results({recipes}: Props) {
  const { addFavorite } = useFavoritesContext(); 
  return (
    <>
    {recipes.map((hits) => {
      return (
          <div className = "recipeCard" key = {hits.recipe.label} >
            <div className="recipeResults">
              <img src={hits.recipe.image}  width="250" height="250"/>
              <h3 id = "recipeResultsName">{hits.recipe.label}</h3>
              <p id="details"><Link to="/details">More Details</Link></p>
              <p>See the the full recipe on <b>{hits.recipe.source}</b></p>
              <a href={hits.recipe.url}>Click Here</a>
            <button className="addButton" onClick={() => addFavorite(hits)}>Add to Favorites</button>
            </div>
          </div>
      );
    })}
    </>
  )};

  export default Results;

