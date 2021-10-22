import React from 'react';
import { Recipe } from "../models/recipe-model";
import { Link } from "react-router-dom"; {/* added Link */}


interface Props {
    recipes: Recipe[];
}

function Results({recipes}: Props) {

return (
  <>
  {recipes.map((hits, index) => {
    return (
        <div key = {index} >
          {hits.recipe.label} 
          <p><Link to="/details">More Details</Link></p>
        </div>
    );
  })}
  </>
)};


export default Results;