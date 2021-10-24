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

//function Details({children}: {children: ReactNode}) {
    function Details({favs, children}: Props)  {
    return (
        <div className="RecipeDetails">
            <h2>Recipe Details</h2>
            <div>
                <p>Details for each recipe</p>
                <p><Link to="/"><button>Back to Home</button></Link></p>
            </div>
            {children}
        </div>
    )
}

// Link to see the recipe on their original source site
//Favorites button
//Back button


export default Details;