import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <img
          class="logo"
          src="https://cdn.imago-images.com/Images/Logo/IMAGO-Primary_Logos-RGB-BLACK.svg"
        />
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="//github.io/jo_geek" target="_blank">
          Editorial
        </a>
        <a href="http://stackoverflow.com/users/4084003/" target="_blank">
          Sports
        </a>
        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">
          Creative
        </a>
        <a href="https://codepen.io/jo_Geek/" target="_blank">
          Archive
        </a>
        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
          Account
        </a>
      </div>
    </div>
  );
};

export default Header;
