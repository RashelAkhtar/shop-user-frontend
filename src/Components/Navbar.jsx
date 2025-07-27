import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        JANNAT SHOPPING
      </Link>

      <div className="navbar__links">
        <Link
          to="/"
          className={`navbar__link ${isActive("/") ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`navbar__link ${isActive("/products") ? "active" : ""}`}
        >
          Shop
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
