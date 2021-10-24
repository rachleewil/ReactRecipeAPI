//children: JSX.Element,
import React, { useContext } from "react";
import { ReactNode } from "react";
import { useParams } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { Recipe } from "../models/recipe-model";
import { Link } from "react-router-dom"; {/* added Link */}

interface Props {
    favs?: Recipe[];
    children?: ReactNode; 
    
}
//function Favorites({children}: {children: ReactNode}) {
    function Favorites({favs, children}: Props) {
        const { favorites } = useContext(FavoritesContext);
        return (
            <>
            <div className="RecipeFavorites">
                <h2>Favorite Recipes</h2>
                <ul>
                    {/* The first two li's are just test code to ensure the outer part of the Favorites function is working. */}
                    <li> test a </li>
                    <li> test b </li>
                    {favorites.map((item) => (
          
                       <li>{item}</li>
                    ))}
                </ul>
    
            
            </div>
            </>
        )
}

// favorites list page of Recipes
// details button
// remove recipes from favorites list
//back button

export default Favorites;