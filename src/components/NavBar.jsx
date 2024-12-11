import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <ul className="nav-menu sidebar">
        <li className="nav-option">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-option">
          <Link className="link" to="/">
            Shop
          </Link>
        </li>
        <li className="nav-option">
          <Link className="link" to="/">
            About
          </Link>
        </li>
        <li className="nav-option">
          <Link className="link" to="/">
            Cart
          </Link>
        </li>
      </ul>
      <ul className="nav-menu">
        <li className="nav-option">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-option">
          <Link className="link" to="/">
            Shop
          </Link>
        </li>
        <li className="nav-option">
          <Link className="link" to="/">
            About
          </Link>
        </li>
        <li className="nav-option">
          <Link className="link" to="/">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
