import axios from "axios";
import { Recipe, RecipeResponse } from "../models/recipe-model";

export function fetchRecipes(query: string): Promise<Recipe[]> {
  const apiURL = `https://api.edamam.com/api/recipes/v2/?q=${query}`;
  const apiKey = "&app_key=126cd0194e99a7e5da2de2d10c24bbde";
  const apiId = "&app_id=b725930f";
  const apiType = "&type=public";
  const url = `${apiURL}${apiType}${apiId}${apiKey}`;

  return axios.get<RecipeResponse>(url).then((response) => response.data.hits);
}
