import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.css";

function NavBar() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const dropDownRef = useRef();

  useEffect(() => {
    function changeScreen() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (window.innerWidth >= 700) {
      setIsDropDown(false);
    }

    window.addEventListener("resize", changeScreen);

    return () => {
      window.removeEventListener("resize", changeScreen);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="nav-header">
      <h3>Logo</h3>
      {screenSize.width >= 700 && (
        <nav className="non-dropdown-nav">
          <Link className="non-dropdown-list" to="/">
            Home
          </Link>
          <Link className="non-dropdown-list" to="/">
            About
          </Link>
          <Link className="non-dropdown-list" to="/">
            Shop
          </Link>
          <Link className="non-dropdown-list" to="/">
            Cart
          </Link>
        </nav>
      )}

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
