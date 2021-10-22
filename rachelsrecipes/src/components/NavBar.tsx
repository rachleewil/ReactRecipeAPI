import React from 'react';
import { Link } from "react-router-dom"; {/* added Link */}

function NavBar() {
  return (
    <>
        <nav>
          <div className="NavBar">
            <h1>Rachel's Recipes</h1>
            <div className="Links">
              <Link to="/">Search for Recipes</Link>
              <Link to="/favorites">Favorites List</Link>
            </div>
          </div>     
        </nav>
    </>
  );
}

export default NavBar;