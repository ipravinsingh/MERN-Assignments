import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <i>@</i>
          <Link className="link" to="/delivery">
            Delivery
          </Link>
        </li>
        <li>
          <i>@</i>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/diningOut"
          >
            DiningOut
          </Link>
        </li>
        <li>
          <i>@</i>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/nightlife"
          >
            Nightout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
