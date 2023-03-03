import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <Link to="/">
          <img
            className="logo"
            src="https://cdn.imago-images.com/Images/Logo/IMAGO-Primary_Logos-RGB-BLACK.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="nav-btn"></div>

      <div className="nav-links">
        <a href="/" target="_blank" rel="noreferrer">
          Editorial
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          Sports
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          Creative
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          Archive
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          Account
        </a>
      </div>
    </div>
  );
};

export default Header;
