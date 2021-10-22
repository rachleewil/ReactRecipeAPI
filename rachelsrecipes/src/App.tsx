import React from "react";
// import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Favorites from "./components/Favorites";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="App">
      <h1> Rachel's Recipes</h1>
      {/* <Switch>
        <Route path="/"> */}
          <Recipes />
        {/* </Route>
        <Route exact path="/details">
          <RecipeDetails />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
