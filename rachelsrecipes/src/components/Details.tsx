//children: JSX.Element,
import React, { FC } from "react";
import { Recipe } from "../models/recipe-model";
import { Link } from "react-router-dom";import { JsxEmit } from "typescript";
 {/* added Link */ }


const Details: FC<Recipe> = ({ recipe }): JSX.Element => {
  return <>
    <p>Title: {recipe.label}</p>
    <p>Meal Type: {recipe.mealType}</p>
    <p>Cuisine Type: {recipe.cuisineType}</p>
    <p>Calories: {recipe.calories}</p>
    <p><Link to="/"><button className="homeButton">Back to Home</button></Link></p>
  </>;
};

// Link to see the recipe on their original source site
//Favorites button
//Back button


export default Details;