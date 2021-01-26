import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div className ="navContainer">
          <h1>Corlate</h1>
          <p>Theame your own project</p>
        </div>
        <div>
          <ul className ="navitems">
           <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
            </ul>
        </div>
      </nav>
    </div>
  );
}
