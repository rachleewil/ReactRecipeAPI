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
          <div key = {hits.recipe.label} >
            {hits.recipe.label} 
            <div className="recipeImage">
              <img src={hits.recipe.image}  width="300" height="300"/>
            </div>
            <p><Link to="/details">More Details</Link></p>
          </div>
      );
    })}
    </>
  )};

  export default Results;