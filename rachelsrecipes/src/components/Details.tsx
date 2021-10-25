//children: JSX.Element,
import React from "react";
import { Recipe } from "../models/recipe-model";
import { Link } from "react-router-dom"; {/* added Link */ }


interface Props {
    recipes: Recipe[];
}

function Details({recipes}: Props) {
    return (
      <>
      <h2>Recipe Details</h2>
      {recipes.map((hits) => {
        return (
            <div key = {hits.recipe.label} >
              <div className="RecipeDetails">
                {hits.recipe.label}
                {hits.recipe.mealType}
                {hits.recipe.cuisineType}
              </div>
            </div>
        );
      })}
      <p><Link to="/"><button>Back to Home</button></Link></p>
      </>
    )};

// Link to see the recipe on their original source site
//Favorites button
//Back button


export default Details;

