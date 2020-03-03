import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo" />

      <nav>
        <ul>
          <li>
            <Link to="/homepage"> Home </Link>
          </li>
          <li>
            <Link to="/Watchpage"> Watchpage </Link>
          </li>

          <li class="login">
            <Link to="/login"> Login </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
