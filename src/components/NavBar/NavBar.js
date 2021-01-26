import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="leftcontainer">
        <h1>Corlate</h1>
        <p>Use your own theme always</p>
      </div>
      <div>
        <ul className="rightcontainer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutUs</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contactUs">ContactUs</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
