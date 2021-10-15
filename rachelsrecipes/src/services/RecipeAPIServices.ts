import axios from "axios";
import { Recipe, RecipeResponse } from "../models/recipe-model";

export function fetchRecipes(): Promise<Recipe[]> {
  return axios.get<RecipeResponse>("https://api.edamam.com/api/recipes/v2/?app_id=b725930f&app_key=126cd0194e99a7e5da2de2d10c24bbde&type=public")
      .then(response => response.data.hits);
}



