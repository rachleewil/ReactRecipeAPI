//children: JSX.Element,
import React, { FC } from "react";
import { Recipe } from "../models/recipe-model";
import { Link } from "react-router-dom";import { JsxEmit } from "typescript";
 {/* added Link */ }

const Details: FC<Recipe> = ({ recipe }): JSX.Element => {
  return <>
    
    <p><Link to="/"><button className="homeButton">Back to Home</button></Link></p>
    <h2 id="title">Recipe Details</h2>

    <div className="recipeDetails">
        <p>Title: {recipe.label}</p>
        <p>Meal Type: {recipe.mealType}</p>
        <p>Cuisine Type: {recipe.cuisineType}</p>
        <p>Calories: {recipe.calories}</p>
    </div>

  </>;
};

// Link to see the recipe on their original source site
// Favorites button
// Back button


export default Details;