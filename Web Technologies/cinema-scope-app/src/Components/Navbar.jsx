import React from "react";

function Navbar() {
  return (
    <div>
       <nav className="navbar">
        <p>Cinema Scope.</p>
        <ul className="list">
          <li>Home</li>
          <li>Latest</li>
          <li>IMDB Top</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
