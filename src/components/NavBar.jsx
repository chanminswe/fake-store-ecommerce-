import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <header className="navigation-header">
      <h2>MTA</h2>
      <nav className="navigation-routes">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shops</Link>
        <p>Review</p>
        <p>About</p>
      </nav>
    </header>
  );
}

export default NavBar;
