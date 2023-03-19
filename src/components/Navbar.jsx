import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/todos">todos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
