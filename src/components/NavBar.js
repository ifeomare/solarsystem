import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({link1, link2}) {
  return (
    <div className="nav">
      <Link to="/" className={link1}>ICONS</Link>
      <Link to="/fun-facts" className={link2}>FUN FACTS</Link>
    </div>
  );
}

export default NavBar;
