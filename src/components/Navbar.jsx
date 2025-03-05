import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import reactLogo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src={reactLogo} alt="React Logo" /></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fetchdata">Fetch Data</Link></li>
        <li><Link to="/smallproject">Small-Project</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
