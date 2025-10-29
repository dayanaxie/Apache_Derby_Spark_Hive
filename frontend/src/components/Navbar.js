import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Monitor Hospitalario</div>
      <ul className="navbar-links">
        <li><NavLink to="/" className="nav-item">Dashboard</NavLink></li>
        <li><NavLink to="/admisiones" className="nav-item">Admisiones</NavLink></li>
        <li><NavLink to="/historicos" className="nav-item">Históricos</NavLink></li>
      </ul>
    </nav>
  );
}
