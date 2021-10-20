import axios from "axios";
import { Recipe, RecipeResponse } from "../models/recipe-model";

export function fetchRecipes(
  query: string,
  mealType: string,
  cuisineType: string,
  calories: string
): Promise<Recipe[]> {
  const apiURL = `https://api.edamam.com/api/recipes/v2/?q=${query}`;
  const apiMealType = `&mealType=${mealType}`;
  const apiCuisineType = `&cuisineType=${cuisineType}`;
  const apiCalories = `&calories=${calories}`;
  const apiKey = "&app_key=126cd0194e99a7e5da2de2d10c24bbde";
  const apiId = "&app_id=b725930f";
  const apiType = "&type=public";
  const url = `${apiURL}${apiType}${apiMealType}${apiCuisineType}${apiCalories}${apiId}${apiKey}`;

  return axios.get<RecipeResponse>(url).then((response) => response.data.hits);
}
