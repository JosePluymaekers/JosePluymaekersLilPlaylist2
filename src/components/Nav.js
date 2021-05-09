import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navBar">
      <ul>
        <Link to="/">
          <li>Playlist</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
