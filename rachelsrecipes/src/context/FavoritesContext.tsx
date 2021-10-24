import { ReactNode, createContext, useState } from "react";
import React from 'react';
import { Recipe } from "../models/recipe-model";

interface FavoritesContextValue {

        favorites: Recipe[],
        addFavorite: (favorite: Recipe) => void,
        deleteFavorite: (label: string) => void; // should this possibly return an array 
                                                    // or have an array as its argument?
};


const defaultFavoritesValue: FavoritesContextValue = {

    favorites: [], 
    addFavorite: () => {},           // she told me NOT to return an object here and to return void
    deleteFavorite: () => {}         // but VSCode will not accept void



};

export const FavoritesContext = createContext(defaultFavoritesValue);

interface Props { 
    children?: ReactNode; 
}    //which version? see below

// from react_demo
// interface Props { children?: ReactNode; }

// from exercise 7
// interface Props {
// 	children: ReactNode;
// }

export function FavoritesContextProvider({children}: {children: Props}) {

    const [favorites, setFavorites] = useState<Recipe[]>([]);


    const addFavorite = (frecipe: Recipe): void => {
        setFavorites((prev) => [...prev, frecipe]);
    };


    const deleteFavorite = (id: string): void => {
        const index: number = favorites.findIndex((item) => item.recipe.label === id);
        setFavorites((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);

    };

    return (
        <FavoritesContext.Provider value = {{ favorites, addFavorite, deleteFavorite}}>
            {children}
        </FavoritesContext.Provider>

    );

};


export const useFavoritesContext = () => React.useContext(FavoritesContext);
