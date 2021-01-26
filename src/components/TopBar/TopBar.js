import React from "react";
import "./TopBar.css";
import {
  FaPhoneVolume,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="nav">
      <div className="left">
        <button>
          <FaPhoneVolume />
        </button>
        +1647-507-4908
      </div>
      <div>
        <ul className="right">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithub />
          </li>
          
        </ul>
      </div>
    </div>
  );
}

// export default TopBar
