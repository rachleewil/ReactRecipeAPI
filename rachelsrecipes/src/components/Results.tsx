import React from 'react';
import { Recipe } from "../models/recipe-model";
import { Link } from "react-router-dom"; {/* added Link */}


interface Props {
    recipes: Recipe[];
}


function Results({recipes}: Props) {

  return (
    <>
    {recipes.map((hits) => {
      return (
          <div className = "recipeCard" key = {hits.recipe.label} >
            <div className="recipeResults">
              <img src={hits.recipe.image}  width="250" height="250"/>
              <h3 id = "recipeResultsName">{hits.recipe.label}</h3>
            </div>
            <p><Link to="/details">More Details</Link></p>
            <p>Add to Favorites</p>
          </div>
      );
    })}
    </>
  )};

  export default Results;
