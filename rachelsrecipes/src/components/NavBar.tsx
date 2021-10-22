import React from 'react';
import { Link } from "react-router-dom"; {/* added Link */}

function NavBar() {
  return (
    <>
        <nav>
          <div className="NavBar">
            <p><Link to="/">Search for Recipes</Link></p>
            <p><Link to="/favorites">Favorites List</Link></p>
          </div>
        </nav>
    </>
  );
}

export default NavBar;