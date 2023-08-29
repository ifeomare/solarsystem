import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div class="nav">
      <Link to="/">ICONS</Link>
      <Link to="/fun-facts">FUN FACTS</Link>
    </div>
  );
}

export default NavBar;
