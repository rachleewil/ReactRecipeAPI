import React from 'react';
import { Recipe } from "../models/recipe-model";

interface Props {
    recipes: Recipe[];
}

function Results({recipes}: Props) {

return (
  <>
  {recipes.map((hits) => {
    return (
        <li>{hits.recipe.label}</li>
    );
  })}
  </>
)}

export default Results;


