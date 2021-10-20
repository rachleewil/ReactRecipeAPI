export interface Recipe {
  recipe: {
    uri: string;
    label: string;
    calories: string;
    image: string;
    source: string;
    url: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    ingredientLines: string[];
    ingredients: [
      {
        text: string;
        quantity: number;
        measure: string;
        food: string;
        weight: number;
        foodId: string;
      }
    ];
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
  };
}

export interface RecipeResponse {
  hits: Recipe[];
}
