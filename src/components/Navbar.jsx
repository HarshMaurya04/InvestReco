// components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          InvestReco
        </NavLink>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <NavLink 
          to="/recommendations" 
          className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
          Recommendations
        </NavLink>
        <Link to="/about" className="navbar-link">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
