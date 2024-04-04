import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Vending Machine</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/iphone">Iphone</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ipad">Ipad</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/laptop">Laptop</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
