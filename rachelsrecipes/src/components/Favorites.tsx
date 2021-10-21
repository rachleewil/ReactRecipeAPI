//children: JSX.Element,
import React, { useContext } from "react";
import { ReactNode } from "react";

import { useParams } from "react-router";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { Recipe } from "../models/recipe-model";

interface Props {
    favs?: Recipe[];
    children?: ReactNode; 
    
}
//function Favorites({children}: {children: ReactNode}) {
    function Favorites({favs, children}: Props) {
    return (
        <div className="RecipeFavorites">
            Favorites
            <div>
                Favorites list page of Recipes
            </div>
            {children}
        </div>
    )
}

// favorites list page of Recipes
// details button
//remove recipes from favorites list
//back button

export default Favorites;