import React from 'react';
import './App.css';
import Recipes from './components/Recipes';
import Favorites from "./components/Favorites";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; {/* added Link */}

function App() {
  return (
    <>
      <div className="App">
      <h1>Rachel's Recipes</h1>
      {/*  // This part should allow users to navigate between the two pages at will, 
            // by providing React Router Links to each page. */}

      <Router>
        <nav>
          <ul>
            <li><Link to="/">Search for Recipes</Link></li>
            <li><Link to="/favorites">Favorites List</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Recipes/>
          </Route>

          <Route exact path="/favorites">
            <Favorites/>
          </Route>
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;