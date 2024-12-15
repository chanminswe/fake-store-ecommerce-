import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.css";

function NavBar() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function changeScreen() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", changeScreen);

    return () => {
      window.removeEventListener("resize", changeScreen);
    };
  }, []);

  return (
    <header className="nav-header">
      <h3>Logo</h3>

      {screenSize.width < 700 && (
        <button
          onClick={() => setIsDropDown(!isDropDown)}
          className="dropdown-btn"
        >
          <FaBars />
        </button>
      )}

      {isDropDown && (
        <nav className="dropdown-nav">
          <Link className="dropdown-list" to="/">
            Home
          </Link>
          <Link className="dropdown-list" to="/">
            Shop
          </Link>
          <Link className="dropdown-list" to="/">
            About
          </Link>
          <Link className="dropdown-list" to="/">
            Cart
          </Link>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
