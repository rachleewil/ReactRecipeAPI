//children: JSX.Element,
import React, { useContext } from "react";
import { ReactNode } from "react";
import { useParams } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesContext, useFavoritesContext } from "../context/FavoritesContext";
import { Recipe } from "../models/recipe-model";
import { Link } from "react-router-dom"; {/* added Link */};


interface Props {
    favs?: Recipe[];
    children?: ReactNode; 
    
}
//function Favorites({children}: {children: ReactNode}) {
    function Favorites({favs, children}: Props) {
        const { favorites, deleteFavorite } = useFavoritesContext(); 
        
        console.log("favorites array is");
        console.log(favorites);
        return (
            <>
            <div className="RecipeFavorites">
                <h2>Favorite Recipes</h2>
                <div className="grid">
                    {favorites.map((item) => (
                       <div className = "recipeCard" key = {item.recipe.label} >
                       <div className="recipeResults">
                         <img src={item.recipe.image}  width="250" height="250"/>
                         <h3 id = "recipeResultsName">{item.recipe.label}</h3>
                         <p><Link to="/details">More Details</Link></p>
                         <button className="deleteButton" onClick={() => deleteFavorite(item.recipe.label)}>Remove From Favorites</button>
                       </div>
                       </div>
                    ))}
                </div>
    
            
            </div>
            </>
        )
}

// favorites list page of Recipes
// details button
// remove recipes from favorites list
//back button

export default Favorites;