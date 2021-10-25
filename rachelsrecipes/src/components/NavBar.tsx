import React from 'react';
import { Link } from "react-router-dom"; {/* added Link */}

function NavBar() {
  return (
    <>
        <nav>
          <div className="NavBar">
            <img className="NavIcon" src="RachelsRecipes2.svg" width="60" height="60"/>
            <h1>Rachel's Recipes</h1>
            <div className="NavBarLinks">
              <a><Link to="/">Search Recipes</Link></a>
              <a><Link to="/favorites">My Favorites</Link></a>
            </div>
          </div>     
        </nav>
    </>
  );
}

export default NavBar;