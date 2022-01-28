import React, { useEffect, useState } from "react";
import Searching from "../Searching/Searching";
import "./style/Nav.css";
function Nav() {
  const [blackNav, setBlackNav] = useState(false);

  return (
    <div className="Nav">
      <div className={`content ${blackNav ? "black" : ""}`}>
        <Searching />
        <div className="nav-bar">
          <ul
            onMouseEnter={() => setBlackNav(true)}
            onMouseLeave={() => setBlackNav(false)}
          >
            <li>HOME</li>
            <li>FILMY</li>
            <li>SERIALE</li>
            <li>RANKINGI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
